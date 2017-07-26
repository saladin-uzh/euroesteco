var materials = function () {
    var materialsItem = $('.materials-item'),
        windowBlock = $('.windows-block'),
        windowIt = $('.window-item'),
        contentIt = $('.content-info'),
        setCircles = function () {
            var circles = $('.materials-item'),
                height = circles.css('height'),
                ico = circles.children('.ico'),
                icoSize = (parseInt(height.substr(0, height.length - 2)) * 0.4) + 'px',
                caption = circles.children('.materials-caption'),
                textSize = (parseInt(height.substr(0, height.length - 2)) * 0.12) + 'px';

            circles.css({
                'width': height.toString(),
                'min-width': height.toString(),
                'max-width': height.toString()
            });

            ico.css('font-size', icoSize);
            caption.css('font-size', textSize);
        };

    setCircles();

    windowBlock.hide();

    materialsItem.mouseenter(function (event) {
        var currentItem = $(this),
            current = currentItem.children('span');

        if (materialsItem.eq(0).is(event.target)) {
            current.css({
                'color': '#FFF',
                'transition-duration': '0.3s'});
            windowBlock.slideDown(700);
        }
    });

    contentIt.hide();

    windowIt.click(function () {
        var current = $(this);

        current.addClass('current');
        contentIt.show();
        windowIt.not(current).hide();
    });

    $(window).resize(setCircles);
};

$(document).ready(materials);