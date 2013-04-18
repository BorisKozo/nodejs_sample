module.exports = function () {
    var todos = [];
    var count = 0;

    return {
        getTodos: function () {
            return todos;
        },
        addTodo: function(todo){
            todo.id = count++;
            todos.push(todo);
            return todo;
        },
        setTodo: function (data) {
            for (var i = 0, length = todos.length; i < length; i++) {
                if (todos[i].id === data.id) {
                    console.log(i, data);
                    todos[i] = data;
                    return;
                }
            }
            
        },
        deleteTodo: function (id) {
            console.log(todos);
            console.log(id);
            for (var i = 0, length = todos.length; i < length; i++) {
                console.log(todos[i].id);
                if (todos[i].id.toString() === id) {
                    todos.splice(i, 1);
                    console.log(todos);
                    return;
                }
            }
        }
    }
}();