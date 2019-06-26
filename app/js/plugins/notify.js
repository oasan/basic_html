/**
 * Выводит уведомление
 * @param  {[string]} message Сообщение
 * @param  {[string]} class Дополнительные классы
 */
function notify(message, css_class) {
    var notify = $('.notify');

    if (css_class) {
        css_class = 'notify ' + css_class;
    } else {
        css_class = 'notify';
    }

    if (!notify.length) {
        notify = $('<div class="notify"><div class="close">&times;</div><div class="message"></div></div>');
        $('body').append(notify);
    }

    notify.attr('class', css_class);

    $('.message', notify).html(message);

    $(notify).fadeIn();

    $('.close', notify).click(function() {
        $(notify).fadeOut();
    });

    window.clearTimeout(window.notifyTemeoutHendler);

    window.notifyTemeoutHendler = setTimeout(function() {
       $(notify).fadeOut();
   }, 3000);
}
