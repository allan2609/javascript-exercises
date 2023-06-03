const removeFromArray = function(arr, value) {    
    return arr.filter(function(ele){ 
        return ele != value; 
    });
};

// Do not edit below this line
module.exports = removeFromArray;
