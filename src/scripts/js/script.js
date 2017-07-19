/**
 * Created by Saladin on 09.07.2017.
 */
var main = function () {
    var location = window.location.href,
        menuItem = $('.menu-item'),
        languageButton = $('.language-btn'),
        languageItem = $('.language-item'),
        upButton = $('#up-btn'),
        feedbackButton = $('#feedback-btn'),
        feedbackForm = $('.feedback'),
        feedbackHideButton = $('.close-btn'),
        feedbackInput = $('#feedback-form input, #message');

    menuItem.each(function() {
        var link = $(this).attr('href');

        if (location === link) {
            $(this).addClass('current');
        }
    });

    languageItem.each(function () {
        var currentLanguage = $(this).attr('href');

        if (location === currentLanguage) {
            $(this).addClass('current-language');
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

    var responsive = function () {
        var introduction = $('main > section.introducing'),
            introductionHeading = introduction.children('.introducing-heading'),
            header = $('header'),
            aboutUs = $('main > section.about-us'),
            aboutUsOverflowedBlock = aboutUs.children('.about-us-item:nth-of-type(2)'),
            advantages = $('main > section.advantages'),
            advantagesBottomItems = advantages.children('.advantages-item.bottom'),
            advantagesTopItems = advantages.children('.advantages-item.top'),
            advantagesTopItemsCircles = advantagesTopItems.children('.advantages-img'),
            advantagesBottomItemsCircles = advantagesBottomItems.children('figure.circle'),
            gallery = $('main > section.gallery .gallery-box'),
            galleryItems = gallery.children('figure.gallery-item');

        aboutUs.css({
            'margin-top':
                (aboutUsOverflowedBlock.get(0).getBoundingClientRect().top -
                aboutUs.get(0).getBoundingClientRect().top - 70) * -1 + 'px',
            'min-height': ($(window).height() * 0.55) + 'px',
            'margin-bottom': aboutUs.height() + 'px'
        });
        introduction.css({
            'height': $(window).height() + 'px'
        });
        introductionHeading.css({
            'margin-top': (header.height() + ($(window).height() / 10)) + 'px'
        });
        advantagesBottomItemsCircles.css('height', advantagesBottomItemsCircles.width() + 'px');
        advantagesTopItems.css('max-height', (advantagesTopItemsCircles.height() * 1.6) + 'px');
        advantages.css('margin-bottom', (advantages.height() / 2) + 'px');
        galleryItems.css({
            'height': (advantages.height() / 2) + 'px',
            'max-height': (advantages.height() / 2) + 'px'
        });
    };

    responsive();
    $(window).scrollTop(0);
    $(window).resize(responsive);
};

$(document).ready(main);