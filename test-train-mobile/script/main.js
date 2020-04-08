subnav = $('.subnav--item');

subnav.click( function() {
  console.log('over');
  subnav.removeClass('item__active');
  $(this).addClass('item__active');
}
)

var subnavBuy = $('.subnav--item__buy');

subnavBuy.click( function() {
  $('.location').toggle([400])
  $(this).css('background-color','#ccc')
}
)

$('.btn__more').click( function() {
  console.log('Btn More Clicked');
  $(this).prev().css('visibility','visible').hide().fadeIn('slow');
}
)