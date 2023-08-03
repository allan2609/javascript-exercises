const fibonacci = function(n) {
  let firstInt = 0;
  let secondInt = 1;
  let j = Number(n);
  if (j > 0) {
    for (let i = 2; i < j; i++) {
      let result = firstInt + secondInt;
      firstInt = secondInt;
      secondInt = result;
    }
    return firstInt + secondInt;
  } else {
    return "OOPS";
  }
};

// Do not edit below this line
module.exports = fibonacci;
