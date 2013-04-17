var express = require('express');
var app = express();

app.get("/hello_world", function (req, res) {
    res.send("<h1>Hello World</h1>");
});

app.listen(3000);
console.log('Listening on port 3000');