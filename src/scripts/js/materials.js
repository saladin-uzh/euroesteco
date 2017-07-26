var materials = function () {
    var center = $('.main-center'),
        materialsItem = $('.materials-item'),
        block = center.children('[class$="-block"]'),
        item = block.children('[class$="-item"]'),
        contentIt = $('.content-info'),
        contentCp = $('.content-caption'),
        slider = $('.content-slider'),
        view3DButton = slider.children('.view-3d'),
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

        details.toggleClass('anim');
        currentWindow.toggleClass('current');
        item.not(currentWindow).toggle();
    });

    view3DButton.click(function () {
        var button = $(this),
            img = button.siblings('img'),
            iFrame = button.siblings('iframe'),
            width = img.css('width'),
            height = img.css('height');

        iFrame.css({
            'width': width,
            'height': height
        });
        iFrame.toggleClass('active');
        if (iFrame.is('.active')) {
            button.text('Close 3D');
        } else {
            button.text('View 3D');
        }
    });

    $(window).resize(setCircles);
};

$(document).ready(materials);