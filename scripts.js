// WHEN the user click the search button
var searchBtnEl = $("#searchBtn");
var citySearchEl = $("#citySearch");
var cityEl = $("#city");
var temperatureEl = $("#temperature");
var humidityEl = $("#humidity");
var windspeedEl = $("#windSpeed");
var uvIndexEl = $("#uvIndex");

var apiKey = "995e326b80d10383e267b0aff15bf8af";
var cityName;

// Current date
var todayDate = moment().format("L");

// Click Event.
searchBtnEl.on("click", function () {
    cityName = citySearchEl.val().toLowerCase();
    makeWeatherRequest(cityName);
    // forcastWeather();
})

// GET data from Openweathermap with ajax
function makeWeatherRequest(cityName) {
    // Get weather values
    var queryUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        // console.log(response);
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

    // Display weather data browser by append to html
    cityEl.text((cityValue) + " (" + todayDate + " ) ");
    cityEl.append(iconValue);
    temperatureEl.text("Temperature: " + tempValue.toFixed(1) + " °F");
    humidityEl.text("Humidity: " + humidityValue + "%");
    windspeedEl.text("Wind Speed: " + windSpeedValue);

    // Get LAT and LON values and pass to uvIndexWeather() function
    uvIndexWeather(latValue, lonValue);
    forecastWeather(latValue, lonValue);
}

// Function to display UV Index
function uvIndexWeather(latValue, lonValue) {
    // Get UV INDEX value from ajax
    var uvIndexQueryUrl = "http://api.openweathermap.org/data/2.5/uvi?lat=" + latValue + "&lon=" + lonValue + "&appid=" + apiKey;
    $.ajax({
        url: uvIndexQueryUrl,
        method: "GET"
    }).then(function (uvData) {
        uvIndexEl.text("UV Index: " + uvData.value);
    });
}

// Forecast Function
function forecastWeather(latValue, lonValue) {
    // 5-day Forecast
    var fiveDayForcastQueryUrl = "http://api.openweathermap.org/data/2.5/onecall?lat=" + latValue + "&lon=" + lonValue + "&exclude=minutely,hourly&appid=" + apiKey;
    $.ajax({
        url: fiveDayForcastQueryUrl,
        method: "GET"
    }).then(function (fiveDay) {
        console.log(fiveDay);

        var i = fiveDay.daily.length

        for (var i = 1; i < 6; i++) {
            // console.log(i);
            // Getting the date for each day forecast
            var eachDate = moment.unix(fiveDay.daily[i - 1].dt).format("L");
            $("#date" + [i]).text(eachDate);

            // Getting the icon for each date forecast and display
            $("#imgDate" +[i]).attr("src", "https://openweathermap.org/img/wn/" + fiveDay.daily[i-1].weather[0].icon + ".png").addClass("bg-primary rounded");

            // Getting the TEMP for each date and display

            // Getting the Humidity for each date and display

        }
    })
}
