require.config({
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
        less: '//cdnjs.cloudflare.com/ajax/libs/less.js/2.3.1/less.min',
        bootstrap: '//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min',
        underscore: '../vendor/underscore-min.js',
        scrollReveal: '../vendor/scrollReveal.min'
    },
    shim: {
        underscore: {
            exports: '_'
        },
        bootstrap: {
            deps: ['jquery', 'underscore']
        },
        scrollReveal: {
            deps: ['jquery']
        },
        jquery: {
            exports: '$'
        }
    }
});

define([
    'jquery', 'scrollReveal', 'less'
], function ($, scrollReveal) {

    var config = {
        reset:  true
    };

    window.sr= new scrollReveal(config);

    return {

    };
});