//this is a js file



$(document).ready(function(){
    
    
    var selector = $('.js-mobile-navigation');
    var height = selector.outerHeight();
     
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

    
//var codeReader = $('.code-highlighter').text().replace(/\t/g, '&nbsp;');
//$( '.code-highlighter' ).replaceWith( codeReader );





});
