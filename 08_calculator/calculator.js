const add = function (x, y) {
  let result = x + y;
  return result;
};

const subtract = function (x, y) {
  let result = x - y;
  return result;
};

const sum = function (numbers) {
  let x = numbers.reduce((a, b) => (a + b),0);
  return x;
};

const multiply = function (numbers) {
  let result = numbers.reduce((x, y) => y * x, 1);
    return result
};

const power = function (x,y) {
  let result = Math.pow(x,y);
  return result
};

const factorial = function (num) {
  let result = num;
  if(num === 0 || num === 1)
    return 1
  else if(num === 2)
    return 2
  while(num > 1){
    num--;
    result *= num
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
