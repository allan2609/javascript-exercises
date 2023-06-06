//const removeFromArray = function(arr, ...values) {    
//  return arr.filter(ele => !values.includes(ele))
//}

// Do not edit below this line
//module.exports = removeFromArray;


const removeFromArray = function(arr, ...values) {    
  let newArray = []
  arr.forEach(element => {
    if (!values.includes(element)) {
      newArray.push(element)
    }
  })
    return newArray
}

module.exports = removeFromArray
