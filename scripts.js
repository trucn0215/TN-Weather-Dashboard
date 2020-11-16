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

// GET data from Openweathermap with ajax
function makeWeatherRequest(cityName) {
    // Get weather values
    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        currentWeather(response);
    })
}

// Function to display the TODAY data-time  weather
function currentWeather(response) {
    var cityValue = response.name;
    var iconValue = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png").addClass("bg-primary rounded");
    var tempValue = (response.main.temp - 273.15) * 1.8 + 32;
    var humidityValue = response.main.humidity;
    var windSpeedValue = response.wind.speed;

    // Get lat and lon from response
    var latValue = response.coord.lat;
    var lonValue = response.coord.lon;

    // console.log(latValue);
    // console.log(lonValue);

    cityEl.text((cityValue) + " (" + todayDate + " ) ");
    cityEl.append(iconValue);
    temperatureEl.text("Temperature: " + tempValue.toFixed(1) + " °F");
    humidityEl.text("Humidity: " + humidityValue);
    windspeedEl.text("Wind Speed: " + windSpeedValue);

    uvIndexWeather(latValue, lonValue);


}

function uvIndexWeather(latValue, lonValue) {
    // Get UV INDEX value
    var uvIndexQueryUrl = "http://api.openweathermap.org/data/2.5/uvi?lat=" + latValue + "&lon=" + lonValue + "&appid=" + apiKey;
    $.ajax({
        url: uvIndexQueryUrl,
        method: "GET"
    }).then(function (uvData) {
        uvIndexEl.text("UV Index: " + uvData.value);
    });
}

// function makeOneCallRequest(lat, lng) {
    // NEXT, we need to build the URL for the first API request

    // Example: https://api.openweathermap.org ..../onecall?lat=[LAT]&lon=[LNG]&appid=....

    // NEXT, make the request to the URL with jQuery ajax

    // $.ajax(queryUrl).then(function (response) {
        // Finish rendering data to the html
    // });
// }