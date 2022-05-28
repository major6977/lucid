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

// Weather API

let weather = {
  apiKey: "38564753ed038f14cb4ef6819ad2f457",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity, temp_max, temp_min } = data.main;
    const { speed, gust } = data.wind;

    document.querySelector(".temp").innerHTML =
      "Temperature: " + temp.toFixed(0) + "<span>&#176 f</span>";
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
  },
};
weather.fetchWeather("Scottsdale");
