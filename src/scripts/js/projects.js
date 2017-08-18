var projects = function () {
    var galleryItem = $('.gallery-item'),
        galleryDesc = $('.item-desc'),
        images = $('.house-image, .portal'),
        imageWidth = images.width();

    images.height(imageWidth / 1.5);

    galleryItem.click(function () {
        var current = $(this);

        current.next(galleryDesc).toggleClass('active-desc');
    });
};

$(document).ready(projects);