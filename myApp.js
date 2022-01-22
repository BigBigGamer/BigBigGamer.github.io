var express = require('express');
var app = express();

console.log("Hello World")

app.get('/', send_hello);

function send_hello(req, res) {
    res.send('Hello Express');
}


































 module.exports = app;
