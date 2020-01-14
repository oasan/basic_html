$(function() {

    $('.ajax_form').form();

    $('a[data-rel^=lightcase]').lightcase({
        swipe: true
    }).click(function() {
        return false;
    });



	$('.nav_toggle_wrap').click(function() {
		$(this).toggleClass('open');

		$('.main_menu_wrap').slideToggle();

		return false;
	});


	$(window).scroll(scrollFunction);
	scrollFunction();

	function scrollFunction() {
		if ($(window).scrollTop() <= 100) {
			$('.section_header').removeClass('fixed');
		} else {
			$('.section_header').addClass('fixed');
		}
	}



	/**
	 * Маска ввода
	 * Документация тут https://github.com/RobinHerbots/Inputmask
	 * Для номеров телефона:
	 * $('[name="phone"]').inputmask("+7 (9{3,4}) 9{2,3}-99-99");  // Общая маска
	 * $('[name="phone"]').inputmask("+7 (999) 999-99-99");  // Маска для мобильных
	 */
	$('[name="phone"]').inputmask("+7 (999) 999-99-99");  // Маска для мобильных номеров телефона



	/**
	 * Адаптивный слайдер
	 * Документация тут http://kenwheeler.github.io/slick/
	 **/
	$('.slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});


    $('.toggle').toggleMore(); // При нажатии на элемент показывает или скрывает указанный элемент

	$('.tabs').tabs(); // Табы в т.ч. вложенные

	$('.open_popup').openPopup(); // Показывает попапы

	$('.goto').goto(); // Скроллит страницу по клику на ссылку с соотв якорем

	// showMsg('Hello', 'Hello, world'); // Выводит всплывающее сообщение (первый параметр заголовок, второй - текст)

});
