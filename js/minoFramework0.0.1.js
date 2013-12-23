//this is a js file

var mq = window.matchMedia( "(max-width: 799px)" );
var mqReturn = window.matchMedia( "(min-width: 800px)" );
var selector = $('.js-mobile-navigation');
var height = selector.outerHeight();

if (mq.matches) {
$(window).load(function(){ 
    
        selector.css('margin-top', - (height + 100)).fadeOut();
   
});
}
$(document).ready(function(){
    $('.js-mobile-menu').click(function(){
        
            if (selector.hasClass('opened')) {
              
                selector.removeClass('opened').css('margin-top', - (height + 100)).fadeOut();
            }else{
              selector.fadeIn().removeAttr('style').addClass('opened');
            }
    });
    
    
    $(window).resize(function(){
        if (mqReturn.matches) {
            selector.removeAttr('style');
            if (selector.hasClass('opened')) {
               selector.removeClass('opened').fadeOut(); 
            }
        }else{
            selector.css('margin-top', - (height + 100)).fadeOut();
            if (selector.hasClass('opened')) {
               selector.removeClass('opened');
            }
        }
    });
});
