$(document).ready(function(){
    $('#toStep2').click(function(){
         $('.step1').hide(500);
         $('.step2').show(500);
         $(".progress-bar").animate({width: "50%"}).text('50%');
    });
 
    $('.toStep1').click(function(){
     $('.step2').hide(500);
     $('.step1').show(500);
    });
});