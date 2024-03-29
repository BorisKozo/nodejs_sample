﻿/*global requirejs*/
'use strict';

requirejs.config({
    baseUrl: '/',
    waitSeconds: 3000,
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        'marionette': {
            deps: ['backbone', 'jquery'],
            exports: 'Marionette'
        },
        'handlebars': {
            exports: 'Handlebars'
        }

    },
    paths: {
        'jquery': 'lib/jquery',
        'underscore': 'lib/underscore',
        'backbone': 'lib/backbone',
        'marionette': 'lib/backbone.marionette',
        'handlebars': 'lib/handlebars',
        'i18nprecompile': 'lib/i18nprecompile',
        'json2': 'lib/json2',
        'hbs': 'lib/hbs'
    },
    hbs: {
        disableI18n: true
    }
});

require([
    'js/app',
    'js/loader'
], function (app, loader) {
    loader.start();
});