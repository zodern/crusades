var divs = $('.hero h1');
$(window).scroll(function(){
  var opacity = 1 - ($(window).scrollTop()/(window.innerHeight/2));
  $(divs).css('opacity', opacity);
});