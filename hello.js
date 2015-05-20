var divs = $('.hero h1');
$(window).scroll(function(){
  var opacity = 1 - ($(window).scrollTop()/(window.innerHeight/2));
  var scale = ($(window).scrollTop() / window.innerHeight) + 1; 
  $(divs).css('opacity', opacity);
  $(divs).css('transform', 'scale(' + scale + ')');
});