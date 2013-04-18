var express = require('express');
var todos = require('./todos');

var app = express();

app.use(express.bodyParser());
app.use(express.logger());
app.use(express.static(__dirname + '/public'));

app.get("/todos", function (req, res) {
    res.json(todos.getTodos());
});

app.put("/todos/:id", function (req, res) {
    todos.setTodo(req.body);
    res.send();
});

app.listen(3000);
console.log('Listening on port 3000');