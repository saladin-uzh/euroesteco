var technology = function () {
    var container = $('.sip-3d'),
        house = {
            roof: container.children('.roof'),
            inside: container.children('.inside'),
            frontWall: container.children('.front-wall'),
            sideWall: container.children('.side-wall')
        },
        inside = {
            between: house.inside.children('.between'),
            back: house.inside.children('.back'),
            side: house.inside.children('.side'),
            insideBack: house.inside.children('.inside-back'),
            insideSide: house.inside.children('.inside-side'),
            bottom: house.inside.children('.bottom')
        },
        setHouse = function () {
            var ZTranslate = (container.width() / -2) + 'px',
                frontWallTranslate = (container.width() * -0.09) + 'px',
                sideWallTranslate = (container.width() / 5) + 'px',
                roofTransform = house.roof.css('transform') + "\r\n" + 'translateZ(' + ZTranslate + ')',
                insideTransform = house.inside.css('transform') + "\r\n" + 'translateZ(' + ZTranslate + ')',
                frontWallTransform = house.frontWall.css('transform') + "\r\n" + 'translateZ(' + frontWallTranslate + ')',
                sideWallTransform = house.sideWall.css('transform') + "\r\n" + 'translateZ(' + sideWallTranslate + ')',
                fullSize = container.width() + 'px';

            house.roof.css({
                'transform': roofTransform
            });
            house.inside.css({
                'transform': insideTransform
            });
            house.frontWall.css({
                'transform': frontWallTransform
            });
            house.sideWall.css({
                'transform': sideWallTransform
            });
            inside.bottom.css({
                'height': fullSize
            });
        };
    setHouse();
};

$(document).ready(technology);