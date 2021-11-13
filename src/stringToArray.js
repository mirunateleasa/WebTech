//node stringToArray.js
// implement a function that receives as a parameter a string
// containing a list of numbers and returns an array containing a
// list of those numbers.

function strToArr(str) {
  let array = [];
  for (var i = 0; i < str.length; i++) {
    array.push(str[i]);
  }
  return array;
}

console.log(strToArr("12345"));
