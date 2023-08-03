const palindromes = function (string) {
  let originalString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  let reverseString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split("").reverse().join("").toLowerCase();
  let originalNoSpaces = originalString.replace(/\s/g, "");
  let reverseNoSpaces = reverseString.replace(/\s/g, "");
  if (originalNoSpaces == reverseNoSpaces) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
