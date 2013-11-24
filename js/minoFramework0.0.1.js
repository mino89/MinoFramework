//this is a js file



$(document).ready(function(){
        $('.js-mobile-menu').click(function(){
            
            $('.js-mobile-navigation').toggleClass('opened');
            
    });

$('.highlighter').each(function() {
    
  $(this).text($(this).html());
  $(this).text().replace('<', '&')
  $(this).text().replace(/\t/g, '&nbsp;')
});
    
//var codeReader = $('.code-highlighter').text().replace(/\t/g, '&nbsp;');
//$( '.code-highlighter' ).replaceWith( codeReader );





});
