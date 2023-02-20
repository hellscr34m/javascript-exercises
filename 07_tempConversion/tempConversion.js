const convertToCelsius = function(vFahrenheit) {
  return roundToOneDecimal(vCelsius = (vFahrenheit - 32) * 5 / 9);
};

const convertToFahrenheit = function(vCelsius) {
  return roundToOneDecimal(vFahrenheit = (vCelsius * 9 / 5) + 32);
};
function roundToOneDecimal(num) {
  return parseFloat(num.toFixed(1));
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
