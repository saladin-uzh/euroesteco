var materials = function () {
    var center = $('.main-center'),
        materialsItem = $('.materials-item'),
        block = center.children('[class$="-block"]'),
        item = block.children('[class$="-item"]'),
        contentIt = $('.content-info'),
        contentCp = $('.content-caption'),
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
    block.hide();

    materialsItem.mouseenter(function () {
        var currentItem = $(this),
            target = currentItem.attr('id'),
            targetBlock = center.children('.' + target + '-block');

        if (!currentItem.is('.active')) {
            item.show();
            currentItem.addClass('active');
            materialsItem.not(currentItem).removeClass('active');
            targetBlock.slideDown(500);
            block.not(targetBlock).hide(500);
            contentIt.removeClass('anim');
            item.removeClass('current');
        }
    });

    contentCp.click(function () {
        var current = $(this),
            currentWindow = current.parent(),
            details = current.siblings('.content-info');

        currentWindow.toggleClass('current');
        details.toggleClass('anim');
        item.not(currentWindow).toggle();
    });

    $(window).resize(setCircles);
};

$(document).ready(materials);