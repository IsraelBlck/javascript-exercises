const ftoc = function(numb) {
  ////converting from Fahrenheit to Celsius
  let convertToCelsiusResult = (numb - 32) * 0.5556;

  //// rounding result to the rounded to one decimal place and returning result
  return (rounded = Math.round(convertToCelsiusResult * 10) / 10);
};

const ctof = function(numb) {
  ////converting from Celsius to Fahrenheit
  let convertToFahrenheitResult = numb * 1.8 + 32;
  //// rounding result to the rounded to one decimal place and returning result
  return (rounded = Math.round(convertToFahrenheitResult * 10) / 10);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
