// Fading Text 1 (Lucid Air Page) and Text 2 (Features Page)

$(window).scroll(function () {
  $("#fade-txt1").css("opacity", 1.7 - $(window).scrollTop() / 500);
  $("#fade-txt2").css("opacity", 1.7 - $(window).scrollTop() / 800);
});

// Hamburger Bar Menu

function myFunction() {
  var x = document.getElementById("my-links");
  var mobileHeader = document.querySelector(".mobile-header");
  if (x.style.display === "block") {
    x.style.display = "none";
    mobileHeader.style.height = "40px";
  } else {
    x.style.display = "block";
    mobileHeader.style.height = "250px";
  }
}

// Button Function

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
