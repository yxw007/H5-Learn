
const express = require('../../express');

// ! 说明：es5中构造函数可以new, 还可以充当函数调用
const router = express.Router();

router.get('/', function (req, res) {
	res.end('article')
})
router.get('/add', function (req, res) {
	res.end('article add')
})
router.get('/remove', function (req, res) {
	res.end('article remove')
})

module.exports = router
