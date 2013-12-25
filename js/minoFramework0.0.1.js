//this is a js file

var mq = window.matchMedia( "(max-width: 799px)" );
var mqReturn = window.matchMedia( "(min-width: 800px)" );
var selector = $('.mobile-navigation');
var target = $('.side-navigation');
var height = target.outerHeight();

if (mq.matches) {
$(window).load(function(){ 
    
        selector.css('margin-top', - (height));
   
});
}

$(document).ready(function(){
    $('.js-mobile-menu').click(function(){
        
            if (selector.hasClass('opened')) {
              
                selector.removeClass('opened').css('margin-top', - (height));
            }else{
              selector.removeAttr('style').addClass('opened');
            }
    });
    
    
    $(window).resize(function(){
        if (mqReturn.matches) {
            selector.removeAttr('style');
            if (selector.hasClass('opened')) {
               selector.removeClass('opened'); 
            }
        }else{
            selector.css('margin-top', - (height));
            if (selector.hasClass('opened')) {
               selector.removeClass('opened');
            }
        }
    });
});
