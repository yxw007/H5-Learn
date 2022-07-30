const EventEmitter = require('events');
const fs = require('fs');
const Queue = require('./Queue')
class WriteStream extends EventEmitter {
    constructor(path, options) {
        super();
        this.path = path;
        this.highWaterMark = options.highWaterMark || 16 * 1024;
        this.flags = options.flags || 'w';
        this.encoding = options.encoding || 'utf8';
        this.start = options.start || 0;
        this.emitClose = options.emitClose || true;
        this.open(); // 默认打开写入的文件

        this.len = 0; // 默认记录调用write写了多少个
        this.needDrain = false; // 是否触发drain事件
        this.writting = false; // 默认不是正在写入 
        this.cache = new Queue(); // []
        this.offset = this.start; // 偏移量
    }
    destory(err) {
        if (err) {
            this.emit('error', err);
        }
        if (this.fd) {
            fs.close(this.fd, () => {
                this.emit('close');
            })
        }
    }
    open() {
        fs.open(this.path, this.flags, (err, fd) => {
            if (err) {
                return this.destory(err);
            }
            this.fd = fd;
            this.emit('open', fd); // 触发open事件
        })
    }
    write(chunk, encoding = this.encoding, callback = () => { }) {
        // 写入的数据可能是buffer 也可能是字符串
        chunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        this.len += chunk.length; // 将数据长度记录下来
        let ret = this.len < this.highWaterMark
        this.needDrain = !ret;
        let cb = callback; // 保存callback 
        callback = () =>{
            cb();
            // 增加一条逻辑 就是写入后再次清空缓存
            this.clearBuffer(); // 情况缓存区
        }
        if(!this.writting){
            // 写入到文件中
            this.writting = true
            this._write(chunk,encoding,callback);
        }else{
            // 如果是正在写入 要写入到缓存区中
            this.cache.add({chunk,encoding,callback});
        }
        return ret
    }
    clearBuffer(){
        let obj = this.cache.poll(); // 不停的取 总会有一天是undefind
        if(obj){
            let {chunk,encoding,callback} = obj;
            this._write(chunk,encoding,callback);
        }else{
            if(this.needDrain){
                this.writting = false;// 已经都写完了
                this.needDrain = false;// 下次重新计算needDrain的值
                this.emit('drain');
            }
        }
    }
    _write(chunk,encoding,callback){
        // 真正的写入
        if(typeof this.fd !== 'number'){
            return this.once('open',()=>this._write(chunk,encoding,callback))
        }
        fs.write(this.fd,chunk,0,chunk.length,this.offset,(err,written)=>{
            this.len -= written; // 将记录的值减小
            this.offset+=written;
            callback();
            // 当写入文件后 继续情况缓存区
        });
    }
    end(chunk = '',encoding = this.encoding,cb=()=>{}){
        this.write(chunk,encoding,()=>{
            cb();
            this.destory()
        });
    }
}

module.exports = WriteStream