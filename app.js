var express = require('express');
var app = express();

app.use(express.logger());
app.use(express.static(__dirname + '/public'));

app.get("/todos", function (req, res) {
    console.log("Todos called");
    res.send();
});

app.listen(3000);
console.log('Listening on port 3000');