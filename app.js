var express = require('express');
var todos = require('./todos');

var app = express();

app.use(express.bodyParser());
//app.use(express.logger());
app.use(express.static(__dirname + '/public'));

app.get("/todos", function (req, res) {
    res.json(todos.getTodos());
});

app.post("/todos", function (req, res) {
    res.json(todos.addTodo(req.body));
});


app.put("/todos/:id", function (req, res) {
    res.send(todos.setTodo(req.body));
});

app.del("/todos/:id", function (req, res) {
    todos.deleteTodo(req.params.id);
    res.send();
});

app.listen(3000);
console.log('Listening on port 3000');