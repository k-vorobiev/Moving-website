jQuery(document).ready(function($) {
    body = $('body');

    body.on('keypress', '#customer_from_zip, #customer_to_zip', function(event){
        event = event || window.event;
        if (event.charCode && event.charCode!=0 && event.charCode!=46 && (event.charCode < 48 || event.charCode > 57) )
            return false;
    });

    $(window).scroll(function(){
        var header = $('.header'),
            scroll = $(window).scrollTop();
      
        if (scroll >= 80) {
            header.addClass('header_fixed');
            body.css('padding-top', header.height() + 'px');
        } else {
            header.removeClass('header_fixed');
            body.css('padding-top', '0px');
        }
    });
});