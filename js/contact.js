//Callout//
$("#link").click(function () {
  $('html, body').animate({
    scrollTop: $("#target").offset().top
  }, 1000);
  $('.callout').hide();
});
