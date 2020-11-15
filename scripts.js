// WHEN the user click the search button
var searchBtnEl = $("#searchBtn");
var citySearchEl = $("#citySearch");
var cityEl = $("#city");
var temperatureEl = $("#temperature");
var humidityEl = $("#humidity");
var windspeedEl = $("#windSpeed");
var uvIndexEl = $("#uvIndex");

var apiKey = "995e326b80d10383e267b0aff15bf8af";

// Current date
var todayDate = moment().format("L");

// Click Event.
searchBtnEl.on("click", function () {
    var cityName = citySearchEl.val().toLowerCase();

    makeWeatherRequest(cityName);
})

// Create EventListenner.

// function handleSearch() {

// makeWeatherRequest(search);
// }

// THEN I get the value that the entered into the search input

// GET data from Openweathermap with ajax
function makeWeatherRequest(cityName) {
    // Get city value input
    // var cityName = cityEl.val().toLowerCase();
    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    
        currentWeather(response);
    })

    // $.ajax(queryUrl).then(function (response) {
    // THEN get the lat and lng out of the `response` object
    // NEXT call `makeOneCallRequest( lat, lng )` and pass in the lat and lng;

    // });
}

// Function to display the TODAY data-time  weather
function currentWeather(response){
    var cityValue = response.name;
    var iconValue = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png").addClass("bg-primary rounded");
    var tempValue = (response.main.temp -273.15) * 1.8 +32;
    var humidityValue = response.main.humidity;
    var windSpeedValue = response.wind.speed;

    console.log();
    
    cityEl.text((cityValue) + " (" + todayDate + " )");
    cityEl.append(iconValue);
    temperatureEl.text("Temperature: " + tempValue.toFixed(1) + " °F");
    humidityEl.text("Humidity: " + humidityValue);
    windspeedEl.text("Wind Speed: " + windSpeedValue);
}

// function makeOneCallRequest(lat, lng) {
    // NEXT, we need to build the URL for the first API request

    // Example: https://api.openweathermap.org ..../onecall?lat=[LAT]&lon=[LNG]&appid=....

    // NEXT, make the request to the URL with jQuery ajax

    // $.ajax(queryUrl).then(function (response) {
        // Finish rendering data to the html
    // });
// }