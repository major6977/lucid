$(window).scroll(function () {
  $("#fade-txt1").css("opacity", 1.2 - $(window).scrollTop() / 1200);
  $("#fade-txt2").css("opacity", 1.2 - $(window).scrollTop() / 1700);
  $(".fade-txt3").css("opacity", 1.2 - $(window).scrollTop() / 1700);
  $(".fade-txt-index-pg").css("opacity", 1.2 - $(window).scrollTop() / 1200);
});
