
const express = require('../../express');

// ! 说明：es5中构造函数可以new, 还可以充当函数调用
const router = express.Router();

router.get('/', function (req, res, next) {
	res.end('user')
})
router.get('/add', function (req, res, next) {
	res.end('user add')
})
router.get('/remove', function (req, res, next) {
	res.end('user remove')
})

module.exports = router
