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
            'setlocation' : false
        }, options);

        this.click(function() {
            var target = $(this).attr('href') || $(this).data('target');

            settings.offset = $(this).data('offset') || settings.offset;
            var setlocation = $(this).data('setlocation');

            if (typeof setlocation != 'undefined') {
                settings.setlocation = parseInt(setlocation);
            }

            var offset = $(target).offset().top - settings.offset;

            $('html, body').animate({
                scrollTop: offset
            }, 500);

            if (!settings.setlocation) return false;
        });

    };
})(jQuery);
