function celsiusToFahrenheit(tempInCelsius) {
  const tempInFahrenheit = tempInCelsius * 1.8 + 32;
  return `${tempInFahrenheit}°F`;
}

function fahrenheitToCelsius(tempInFahrenheit) {
  const tempInCelsius = (tempInFahrenheit - 32) * (5 / 9);
  return `${tempInCelsius}°C`;
}

console.log(celsiusToFahrenheit(23));
console.log(fahrenheitToCelsius(90));
