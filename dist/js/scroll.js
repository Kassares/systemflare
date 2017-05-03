 $(document).ready(function(){
    $(".smoothscroll").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1200);
    });
});






//text

 $(document).ready(function(){
   $(".clients-detail").click(function() {
  $(this).parent().children().stop().fadeOut( "slow", function() {
    // Animation complete
       $(this).parent().find('ul').delay(602).fadeIn( 600);
  });

  
   });
 });
 
 
 ////////////////////////////FEATURES ANIMATION
 
 $(document).ready(function(){
   $(".features-cell").mouseenter( function() {
  $(this).children().stop().fadeOut( "slow", function() {
    // Animation complete
       $(this).find('ul').stop().fadeIn( 600);
       
  });
  

  
   });
   $(".features-cell").mouseleave( function() {
  $(this).children().stop().fadeIn( "slow", function() {
    // Animation complete
       $(this).find('ul').delay(602).stop().fadeOut( 600);
       
  });
  

  
   });
 });