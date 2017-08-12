var projects = function () {
    var galleryItem = $('.gallery-item'),
        galleryDesc = $('.item-desc'),
        images = $('.house-image, .portal'),
        imageWidth = images.width(),
        descBtn = $('.desc-btn');

    images.height(imageWidth / 1.5);

    galleryItem.click(function () {
        var current= $(this);

        current.children(galleryDesc).toggleClass('active-desc');
    });
};

$(document).ready(projects);