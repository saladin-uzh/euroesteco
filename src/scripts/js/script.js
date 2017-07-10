/**
 * Created by Saladin on 09.07.2017.
 */
var main = function () {
    var sections = $('main > section'),
        introduction = $('main > section.introducing'),
        header = $('header');

    sections.css('height', $(window).height() + 'px');
    // introduction.css('padding-top',
    //     header.css('height').substr(0, header.css('height').length - 2)
    //     + 'px');
};

$(document).ready(main);