const removeFromArray = function(arr, ...values) {    
  return arr.filter(ele => !values.includes(ele))
}

// Do not edit below this line
module.exports = removeFromArray;
