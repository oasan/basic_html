(function( $ ) {
    $.fn.form = function(options) {
        var settings = $.extend( {
            success_title: 'Спасибо за заявку!',
            success_message: 'Наши менеджеры свяжутся с вами в ближайшее время.',
            error_title: 'Произошла ошибка.',
            error_message: 'Попробуйте выполнить запрос позже.',
            after_success: false,
            callback_function: false,
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
                const action = $(this).attr('action');

                if (!validate_form(form)) {
                    return false;
                }

                var data = new FormData( form[0] );

                $.ajax({
                    url: action,
                    type: 'POST',
                    data: data,
                    processData: false,
                    contentType: false
                }).done(function(data) {
                    if (data == 1) {
                        form.trigger('reset');
                        showMsg(settings.success_title, settings.success_message);

                        if (typeof settings.after_success == 'function') {
                            settings.after_success();
                        }
                    } else {
                        var error = '';
                        for (var key in data) {
                            error += data[key] + '. ';
                        }
                        showMsg(settings.error_title, error);
                    }
                }).fail(function() {
                    showMsg(settings.error_title, settings.error_message);
                }).always(function() {
                    if (typeof settings.callback_function == 'function') {
                        settings.callback_function();
                    }
                });

                return false;
            });
        });

    };
})(jQuery);
