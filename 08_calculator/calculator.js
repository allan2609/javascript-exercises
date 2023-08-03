const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((a, b) => a + b, 0);
};

const multiply = function(arr) {
  let result = 1;
  for (let x of arr) {
    result *= x;
  }
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(x) {
  let result = 1;
	for (let i = x; i > 1; i--) {
    result *= i;
  } 
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
