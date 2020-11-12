// WHEN the user click the search button

function handleSearch() {

    makeWeatherRequest(search);
}

// THEN I get the value that the entered into the search input

function makeWeatherRequest(search) {

    // NEXT, we need to build the URL for the first API request

    // Example: https://api.openweathermap.org ..../weather?q=[USER_INPUT]&appid=....

    // NEXT, make the request to the URL with jQuery ajax

    $.ajax(queryUrl).then(function (response) {
        // THEN get the lat and lng out of the `respnse` object
        // NEXT call `makeOneCallRequest( lat, lng )` and pass in the lat and lng;

    });
}

function makeOneCallRequest(lat, lng) {
    // NEXT, we need to build the URL for the first API request

    // Example: https://api.openweathermap.org ..../onecall?lat=[LAT]&lon=[LNG]&appid=....

    // NEXT, make the request to the URL with jQuery ajax

    $.ajax(queryUrl).then(function (response) {
        // Finish rendering data to the html
    });
}