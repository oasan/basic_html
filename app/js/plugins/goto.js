/**
 * Скроллит страницу по клику на ссылку с соотв якорем
 * setlocation - атрибут в ссылке добавляет хеш в адрес страницы - можно задать при инициализации, либо в атрибуте data-setlocation
 * offset - скрллим до блока оставляя отступ сверху, так же можно указать в атрибуте data-offset
 *
 * Все что указано в атрибутах имеет преимущество
 */

(function( $ ) {
    $.fn.goto = function(options) {
        var settings = $.extend( {
            'offset' : 0,
            'setlocation' : false,
            'callback' : null
        }, options);

        this.click(function() {
            var target = $(this).attr('href') || $(this).data('target');

            settings.offset = $(this).data('offset') || settings.offset;
            var setlocation = $(this).data('setlocation');

            if (typeof setlocation != 'undefined') {
                settings.setlocation = parseInt(setlocation);
            }

            $(target).gotoElement(settings);

            if (!settings.setlocation) return false;
        });
    };

    $.fn.gotoElement = function(options) {
        var settings = $.extend( {
            'offset' : 0,
            'callback' : null
        }, options);

        const offset = this.offset().top - settings.offset;

        $('html, body').animate({
            scrollTop: offset
        }, 500, function() {
            if (typeof settings.callback == 'function') callback();
        });

        return this;
    };
})(jQuery);
