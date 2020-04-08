subnav = $('.subnav--item');

subnav.click( function() {
  console.log('over');
  subnav.removeClass('item__active');
  $(this).addClass('item__active');
}
)

$('.btn__more').click( function() {
  console.log('Btn More Clicked');
  $('.subtitle').css('visibility','visible').hide().fadeIn('slow');
}
)