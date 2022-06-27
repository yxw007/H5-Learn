Date.prototype.format = function (fmt) {
	var o = {
		"M+": this.getMonth() + 1, //月份
		"d+": this.getDate(), //日
		"h+": this.getHours(), //小时
		"m+": this.getMinutes(), //分
		"s+": this.getSeconds(), //秒
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度
		S: this.getMilliseconds(), //毫秒
	};
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var k in o) {
		if (new RegExp("(" + k + ")").test(fmt)) {
			fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return fmt;
};


function localDateFormat(date) {
	var nowDate = (new Date()).format("yyyy-MM-dd");
	var referDate = (new Date(date)).format("yyyy-MM-dd");
	const nowDateStamp = new Date(nowDate).getTime();
	const referDateStamp = new Date(referDate).getTime();
	const twoDay = 2 * 24 * 3600 * 1000;

	const nowDay = (nowDateStamp / (1000 * 3600 * 24)) | 0;
	const referDay = (referDateStamp / (1000 * 3600 * 24)) | 0;
	if (Math.abs(nowDay - referDay) > twoDay) {
		return date;
	} else {
		switch (nowDay - referDay) {
			case 2:
				return "前天";
			case 1:
				return "昨天";
			case 0:
				return "今天";
			case -1:
				return "明天";
			case -2:
				return "后天";
		}
	}
	return date;
}

for (let i = 20; i < 30; i++) {
	console.log(localDateFormat(`2022-6-${i}`));
}
