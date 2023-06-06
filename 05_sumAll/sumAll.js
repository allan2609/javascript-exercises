const sumAll = function(a,b) {
  let answer = 0;
  if (a >= 0 && b >= 0 && typeof a === "number" && typeof b === "number") {
  for (let i = 0; i <= b || i <= a; i++) {
    answer += i;
  }
  return answer;
} else {
  return "ERROR";
}
};

// Do not edit below this line
module.exports = sumAll;
