require.config({
    paths: {
        jquery: '../vendor/jquery.min',
        waitForImages: '../vendor/jquery.waitforimages.min',
        bootstrap: '../vendor/bootstrap.min',
        scrollReveal: '../vendor/scrollReveal.min'
    },
    shim: {
        scrollReveal: {
            deps: ['jquery']
        },
        waitForImages: {
            deps: ['jquery']
        },
        bootstrap: {
            deps: ['jquery']
        },
        jquery: {
            exports: '$'
        }
    }
});

define('app', ['jquery', 'scrollReveal', 'waitForImages', 'bootstrap'], function ($, scrollReveal, waitForImages, bootstrap) {

    window.sr = new scrollReveal({
        reset: true
    });

    $.waitForImages.hasImgProperties = ['backgroundImage', 'background'];

    var $images = $('div[class*="img-"]');
    var loading = $('.loading');
    var progressBar = loading.find('.progress .progress-bar');
    var loaded = 0;

    $('body').waitForImages({
        finished: function() {
             var percent = (loaded++)/$images.length * 100;
             progressBar.css('width', percent+'%').attr('aria-valuenow', percent);
             loading.hide();
             $('body').removeClass("without-scroll");
        },
        each: function() {
            var percent = (loaded++)/$images.length * 100;
            progressBar.css('width', percent+'%').attr('aria-valuenow', percent);
        },
        waitForAll: true
    });

});