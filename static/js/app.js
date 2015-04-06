require.config({
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min',
        less: '//cdnjs.cloudflare.com/ajax/libs/less.js/2.3.1/less.min',
        bootstrap: '//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min',
        imagesLoaded: '../vendor/imagesloaded.pkgd.min',
        underscore: '../vendor/underscore-min',
        domReady: '../vendor/domReady',
        skrollr: '../vendor/skrollr.min',
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

define('app', ['jquery', 'scrollReveal', 'less', 'skrollr'], function ($, scrollReveal, less, skrollr) {

    window.sr = new scrollReveal({
        reset: true
    });

    skrollr.init({
        forceHeight: false
    });

    //in real life need use onload
    setTimeout(function() {
        $(".loading").hide();
        $('#body').removeClass("without-scroll");
    }, 2000)

});