/**
 * Created by Saladin on 09.07.2017.
 */
var main = function () {
    var sections = $('main > section');

    sections.css('height', $(window).height() + 'px');
};

$(document).ready(main);