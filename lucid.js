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
  fetchWeatherScottsdale: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherScottsdale(data));
  },

  displayWeatherScottsdale: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    // Scottsdale, AZ

    document.querySelector(".sct-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 f</span>";
    document.querySelector("#sct-desc").innerHTML = description;
    document.querySelector("#sct-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#sct-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#sct-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Las Angeles

  fetchWeatherLosAngeles: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherLa(data));
  },

  displayWeatherLa: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#la-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 f</span>";
    document.querySelector("#la-desc").innerHTML = description;
    document.querySelector("#la-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#la-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#la-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Beverly Hills

  fetchWeatherBeverlyHills: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherBhc(data));
  },

  displayWeatherBhc: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#bhc-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 f</span>";
    document.querySelector("#bhc-desc").innerHTML = description;
    document.querySelector("#bhc-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#bhc-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#bhc-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Seattle

  fetchWeatherSeattleWa: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherSea(data));
  },

  displayWeatherSea: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#sea-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 f</span>";
    document.querySelector("#sea-desc").innerHTML = description;
    document.querySelector("#sea-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#sea-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#sea-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Boston

  fetchWeatherBoston: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherBo(data));
  },

  displayWeatherBo: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#bo-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 f</span>";
    document.querySelector("#bo-desc").innerHTML = description;
    document.querySelector("#bo-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#bo-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#bo-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Miami

  fetchWeatherMiami: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherMi(data));
  },

  displayWeatherMi: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#mi-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 f</span>";
    document.querySelector("#mi-desc").innerHTML = description;
    document.querySelector("#mi-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#mi-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#mi-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Chicago

  fetchWeatherChicago: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherChi(data));
  },

  displayWeatherChi: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#chi-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 f</span>";
    document.querySelector("#chi-desc").innerHTML = description;
    document.querySelector("#chi-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#chi-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#chi-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Vancouver, BC

  fetchWeatherVancouver: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherVan(data));
  },

  displayWeatherVan: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#van-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 f</span>";
    document.querySelector("#van-desc").innerHTML = description;
    document.querySelector("#van-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#van-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#van-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },

  // Toronto, ON

  fetchWeatherToronto: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=imperial&appid=" +
        this.apiKey
    )
      .then((Response) => Response.json())
      .then((data) => this.displayWeatherOt(data));
  },

  displayWeatherOt: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_max, temp_min } = data.main;

    document.querySelector("#ot-temp").innerHTML =
      "Temp: " + temp.toFixed(0) + "<span>&#176 f</span>";
    document.querySelector("#ot-desc").innerHTML = description;
    document.querySelector("#ot-weather-icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector("#ot-hi").innerHTML =
      "hi " + temp_max.toFixed(0) + " <span>&#176 </span>";
    document.querySelector("#ot-low").innerHTML =
      " low " + temp_min.toFixed(0) + " <span>&#176 </span>";
  },
};
weather.fetchWeatherScottsdale("Scottsdale");
weather.fetchWeatherLosAngeles("Los Angeles");
weather.fetchWeatherBeverlyHills("Beverly Hills");
weather.fetchWeatherSeattleWa("Seattle");
weather.fetchWeatherBoston("Boston");
weather.fetchWeatherMiami("Miami");
weather.fetchWeatherChicago("Chicago");
weather.fetchWeatherVancouver("Vancouver");
weather.fetchWeatherToronto("Toronto");

// Maps Locations API

function sctMapApi() {
  let options = {
    zoom: 8,
    center: { lat: 33.50259, lng: -111.92917 },
  };
  let map = new google.maps.Map(document.getElementById("sctMapApi"), options);
}
