// Fading Text 1 (Lucid Air Page) and Text 2 (Features Page)

$(window).scroll(function () {
  $("#fade-txt1").css("opacity", 1.7 - $(window).scrollTop() / 500);
  $("#fade-txt2").css("opacity", 1.7 - $(window).scrollTop() / 800);
});
