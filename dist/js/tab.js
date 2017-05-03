$(document).ready(function(){
    // вешаем на каждую ссылку обработчик
$(".features-box").click(function(){
    $(".features_text").css("display", "inherit");
    $( ".features_text").addClass( "activeClass" );
});
});