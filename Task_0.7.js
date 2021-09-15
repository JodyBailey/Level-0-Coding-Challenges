function celsiusToFahrenheit(tempInCelsius) {
    var tempInFahrenheit = tempInCelsius * 1.8 + 32; 
    return tempInFahrenheit; 
}

function fahrenheitToCelsius(tempInFahrenheit) {
    var tempInCelsius = (tempInFahrenheit - 32) * (5 / 9); 
    return tempInCelsius;
}
