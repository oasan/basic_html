(function( $ ) {
    $.fn.form = function(options) {
        var settings = $.extend( {
            'action' : 'sendmail.php',
            'success_message' : 'Спасибо за заявку, наши менеджеры свяжутся с вами в ближайшее время',
            'error_message' : 'Произошла ошибка попробуйте выполнить запрос позже',
            after_success: false
        }, options);

        // Проводит валидацию формыы
        function validate_form(form) {
            var valid = true;

            $('.required', form).each(function() {
                if ($(this).attr('type') == 'checkbox') {
                    if (!$(this).is(':checked')) {
                        var chkbx = $(this).closest('.checkbox_wrap');
                        chkbx.addClass('error');

                        setTimeout(function() {
                            chkbx.removeClass('error');
                        }, 2000);

                        $(this).change(function(){
                            if ($(this).is(':checked')) {
                                $(this).closest('.checkbox_wrap').removeClass('error');
                            }
                        });

                        valid = false;
                    } else {
                        $(this).closest('.checkbox_wrap').removeClass('error');
                    }
                } else {
                    if (!$(this).val()) {
                        var input = $(this);
                        input.addClass('error');

                        setTimeout(function() {
                            input.removeClass('error');
                        }, 2000);

                        $(this).change(function(){
                            if ($(this).val()) {
                                $(this).removeClass('error');
                            }
                        });

                        valid = false;
                    } else {
                        $(this).removeClass('error');
                    }
                }
            });

            return valid;
        }

        return this.each(function() {
            $(this).submit(function() {
                var form = $(this);

                if (!validate_form(form)) {
                    return false;
                }

                var data = new FormData( form[0] );

                $.ajax({
                    url: settings.action,
                    type: 'POST',
                    data: data,
                    processData: false,
                    contentType: false
                }).done(function(data) {
                    if (data == 1) {
                        form.trigger('reset');
                        showMsg('', settings.success_message);

                        if (typeof settings.after_success == 'function') {
                            settings.after_success();
                        }
                    } else {
                        var error = '';
                        for (var key in data) {
                            error += data[key] + '. ';
                        }
                        showMsg('Произошла ошибка', error);
                    }
                }).fail(function() {
                    showMsg('Произошла ошибка', settings.error_message);
                });

                return false;
            });
        });

    };
})(jQuery);
