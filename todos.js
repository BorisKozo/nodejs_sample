module.exports = function () {
    var todos = [];

    return {
        getTodos: function () {
            return todos;
        },
        setTodo: function (data) {
            for (var i = 0, length = todos.length; i < length; i++) {
                if (todos[i].id === data.id) {
                    todos[i] = data;
                    return;
                }
            }
            todos.push(data);
        }
    }
}();