//this is a js file




$(document).ready(function(){
    var mq = window.matchMedia( "(max-width: 800px)" );
    var mqReturn = window.matchMedia( "(min-width: 800px)" );
    var selector = $('.js-mobile-navigation');
    var height = selector.outerHeight();
    
    if (mq.matches) {
        
        selector.css('margin-top', - (height + 100));    
        $('.js-mobile-menu').click(function(){
            
                if (selector.hasClass('opened')) {
                  
                    selector.removeClass('opened');
                    selector.css('margin-top', - (height + 100));
                }else{
                    
                  selector.removeAttr('style');
                  selector.addClass('opened');
                }
        });
    }
    
    $(window).resize(function(){
        console.log($(window).width());
        if (mqReturn.matches) {
            selector.removeAttr('style');
        }else{
            selector.css('margin-top', - (height + 100));
        }
    });
});
