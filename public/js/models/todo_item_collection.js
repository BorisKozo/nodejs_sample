/*global define*/

define(['backbone', './todo_item'], function (Backbone, TodoItem) {
    'use strict';
    var TodoItemCollection = Backbone.Collection.extend({
        model: TodoItem,
        setFinished: function (value) {
            this.each(function (item) {
                item.set('isFinished', value);
            });
            this.trigger('finishChanged', this.toArray(), this);
        }
    });

    return TodoItemCollection;
});