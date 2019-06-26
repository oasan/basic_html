(function( $ ) {
	$.fn.openPopup = function(options) {


		this.click(function() {
			var popup = $(this).attr('href') || $(this).data('popup');

			$.fn.showPopup(popup, options);

			return false;
		});
	};

	$.fn.showPopup = function(popup, options) {
		var options = $.extend( {
			'popup_wrap_class' : 'popup_wrapped',
            'popup_screen_class' : 'popup_screen',
            'close_btn' : '<div class="close">&times;</div>'
	    }, options);

		var close = $(options.close_btn);

		// Оборачиваем попап
		if (!$(popup).parent().hasClass(options.popup_wrap_class)) {
			$(popup).show();
			var popup_wrap_id = 'popup_wrap_' + $(popup).attr('id');
			popup = $(popup).wrap('<div class="' + options.popup_wrap_class + '" id="' + popup_wrap_id + '"></div>').parent();
			popup.prepend(close);
		} else {
			popup = $(popup).show().parent();
		}

		var screen = $('.' + options.popup_screen_class);

		if (!screen.length) {
			screen = $('<div class="' + options.popup_screen_class + '"></div>');

			$('body').append(screen);
		}

		var margin_left = popup.outerWidth() / 2;
		var margin_top = popup.outerHeight() / 2;

		popup.css('margin-left', -margin_left)
			 .css('margin-top', -margin_top);

		$(popup).addClass('open');
		screen.addClass('open');

		// Закрывает попап
		screen.on('click', function() {
			$.fn.closePopup(popup);
		});

		$(close, popup).on('click', function() {
			$.fn.closePopup(popup);
		});
	};

	$.fn.closePopup = function(popup, screen) {
		popup = popup || $('.popup').parent();
		screen = screen || $('.popup_screen');

		popup.removeClass('open');

		screen.removeClass('open');

		return false;
	};

	$.fn.showMsg = function(title, msg) {
		var html = '<div class="popup msg_popup" id="msg_popup">';
		html += title ? '<div class="title">' + title + '</div>' : '';
		html += msg ? '<div class="msg">' + msg + '</div>' : '';
		html += '</div>';

		$.fn.closePopup();

		$('#msg_popup').parent().remove();

		$('body').append(html);

		$.fn.showPopup('.msg_popup');
	}

})(jQuery);

function showMsg(title, msg) {
	$.fn.showMsg(title, msg);
}
