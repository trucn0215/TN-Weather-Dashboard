// WHEN the user click the search button
var cityName = $("#citySearch");

var apiKey = "995e326b80d10383e267b0aff15bf8af";


// function handleSearch() {

    // makeWeatherRequest(search);
// }

// THEN I get the value that the entered into the search input

// function makeWeatherRequest() {
    // var queryUrl = "https://www.api.openweathermap.org/data/2.5/weather?q=" + cityName + "appid=" + apiKey;
    var queryUrl ="http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response){
        console.log(response)
    })
    // NEXT, we need to build the URL for the first API request

    // Example: https://api.openweathermap.org ..../weather?q=[USER_INPUT]&appid=....

    // NEXT, make the request to the URL with jQuery ajax

    // $.ajax(queryUrl).then(function (response) {
        // THEN get the lat and lng out of the `response` object
        // NEXT call `makeOneCallRequest( lat, lng )` and pass in the lat and lng;

    // });
// }

// makeWeatherRequest();
// function makeOneCallRequest(lat, lng) {
    // NEXT, we need to build the URL for the first API request

    // Example: https://api.openweathermap.org ..../onecall?lat=[LAT]&lon=[LNG]&appid=....

    // NEXT, make the request to the URL with jQuery ajax

    // $.ajax(queryUrl).then(function (response) {
        // Finish rendering data to the html
    // });
// }