$(function(){
  $('.fas').click(function(){
    $('.js-modal').fadeIn();
    // return false;
});
$('.js-modal-close').click(function(){
    $('.js-modal').fadeOut();
    // return false;
});

$('.modal-cc').click(function(){
  $('.js-modal').fadeOut();
});

$('.megane').click(function(){
$('.mmm').fadeIn();
});

$('.mmm').click(function(){
$(this).fadeOut();
});

$('.paspol').click(function(){
$('.ppp').fadeIn();
});
  
$('.ppp').click(function(){
  $(this).fadeOut();
  });

});