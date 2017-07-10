/**
 * Created by Saladin on 09.07.2017.
 */
var main = function () {
    var menuItem = $('.menu-item'),
        languageButton = $('.language-btn'),
        languageItem = $('.language-item'),
        upButton = $('#up-btn');

    menuItem.each(function() {
        var location = window.location.href,
            link = this.href;
        if(location == link) {
            $(this).addClass('current');
        }
    });

    languageButton.click(function() {
        languageItem.toggleClass('active');
    });

    upButton.click(function () {
        var page = $('html, body');
        page.animate({
            scrollTop: 0
        }, 1000, 'swing');
    });

    var responsive = function (scrollPosition) {
        var introduction = $('main > section.introducing'),
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
                aboutUs.get(0).getBoundingClientRect().top
                - 70) * -1 + 'px',
            'min-height': ($(window).height() * 0.52) + 'px',
            'margin-bottom': aboutUs.height() + 'px'
        });
        introduction.css('height', ($(window).height()) + 'px');
        advantagesBottomItemsCircles.css('height', advantagesBottomItemsCircles.width() + 'px');
        advantagesTopItems.css('max-height', (advantagesTopItemsCircles.height() * 1.6) + 'px');
        advantages.css('margin-bottom', (advantages.height() / 2) + 'px');
        galleryItems.css({
            'height': (advantages.height() / 2) + 'px',
            'max-height': (advantages.height() / 2) + 'px'
        });

        $(window).scrollTop(scrollPosition);
    };

    responsive(0);
    $(window).resize(function () {
        var scrollPosition = $(window).scrollTop();
        responsive(scrollPosition);
    });
};

$(document).ready(main);