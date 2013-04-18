/*global define*/

define(['backbone'], function (Backbone) {
    'use strict';
    var count = 0;
    var TodoItem = Backbone.Model.extend({
        defaults: {
            isFinished: false
        },
        initialize: function () {
            this.set("id", count++);
        }
    });

    return TodoItem;
});