// const express = require("express");
const express = require('../express');
const app = express();

const user = require('./routes/user');
const article = require('./routes/article')

app.use('/user', user);
app.use('/article', article);
app.use('/manager', (req, res) => {
	res.end("manager out");
})

app.listen(3000);
