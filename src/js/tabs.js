(function( $ ) {
    $.fn.tabs = function() {
        this.each(function(){
            var tab_btns = $('.open_tab', this).not($('.tab .open_tab', this));


            var tabs = $('.tab', this).not($('.tab .tab', this));

            tab_btns.removeClass('active');
            tab_btns.eq(0).addClass('active');

            tabs.hide();
            tabs.eq(0).show();

            tab_btns.click(function() {
                tab_btns.removeClass('active');
                $(this).addClass('active');

                tabs.hide();
                $($(this).attr('href')).show();

                return false;
            });
        });

    };
})(jQuery);