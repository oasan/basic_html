/**
 * При нажатии на элемент показывает или скрывает указанный элемент
 * Целевой элемент берется из атрибута href или data-target
 * Можно задать текст кнопки для открытия и скрытия в соотв атрибутах data-showtext и data-hidetext
 **/
(function( $ ) {
    $.fn.toggleMore = function() {

        this.click(function() {
            var target = $(this).attr('href') || $(this).data('target');

            $(target).slideToggle();

            var showtext = $(this).data('showtext');
            var hidetext = $(this).data('hidetext');

            if ($(this).text() == hidetext) {
                $(this).text(showtext);
            } else {
                $(this).text(hidetext);
            }

            return false;
        });

    };
})(jQuery);
