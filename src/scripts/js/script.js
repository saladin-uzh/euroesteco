/**
 * Created by Saladin on 09.07.2017.
 */
var main = function () {
    var menuItem = $('.menu-item'),
        languageButton = $('.language-btn'),
        languageItem = $('.language-item'),
        upButton = $('#up-btn'),
        feedbackButton = $('#feedback-btn'),
        feedbackForm = $('.feedback'),
        feedbackHideButton = $('.close-btn'),
        feedbackInput = $('#feedback-form input, #message'),
        preloader = $('#preloader'),
        materialsItem = $('.materials-item'),
        windowIt = $('.window-item'),
        contentIt = $('.content-information');

    menuItem.each(function() {
        var location = window.location.href,
            link = $(this).attr('href'),
            absoluteLink = '';

        if (location === link) {
            $(this).addClass('current');
        }

        if (location === '') {

        }
    });

    languageItem.each(function () {
        var htmlLang = $('html').attr('lang'),
            currentItem = $(this),
            currentItemLang = currentItem.attr('id');

        if (htmlLang === currentItemLang) {
            currentItem.addClass('current-language');
        }
    });

    languageButton.click(function() {
        languageItem.toggleClass('active');
    });

    upButton.click(function () {
        var page = $('html, body');
        page.animate({
            scrollTop: 0
        }, $(window).scrollTop(), 'swing');
    });

    feedbackButton.click(function() {
        feedbackForm.toggleClass('slide');
    });

    feedbackHideButton.click(function() {
        feedbackForm.removeClass('slide');
    });

    feedbackInput.focus(function() {
        var current = $(this);
        current.removeAttr('placeholder');
    });

    feedbackInput.blur(function () {
       var current = $(this),
           text = current.data('placeholder');
       current.attr('placeholder', text);
    });

    function sideBar () {
        var materialsHeight = materialsItem.css('width');

        materialsItem.css({'height': materialsHeight, 'max-height': materialsHeight, 'min-height': materialsHeight});
    };

    sideBar();
    
    windowIt.hide();
    contentIt.hide();

    materialsItem.hover(
        function () {
            var currentItem = $(this),
                current = currentItem.children('span');

            current.css({
                'color': '#FFF',
                'transition-duration': '0.3s'});

            if (materialsItem.eq(0).is(event.target)) {
                windowIt.slideDown('slow');
            }
        },
        function () {
            var currentItem = $(this),
                current = currentItem.children('span');

            current.css({
                'color': '#033f01',
                'transition-duration': '0.3s'});
        }
    );

    // $(window).scrollTop(0);
    // $(window).on('scroll', function () {
    //     $(window).scrollTop(0);
    // });
};

$(document).ready(main);

window.onload = function () {
    var preloader = document.getElementById('preloader'),
        page = $('body');
    preloader.classList.add('loaded');
    page.addClass('visible');
};
