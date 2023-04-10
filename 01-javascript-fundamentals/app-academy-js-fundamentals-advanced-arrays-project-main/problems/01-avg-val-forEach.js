/*
Write a function `avgVal(arr)` that accepts an array as an arg. The function
should return the average of all values in the array. If the array is empty,
it should return `null`.

Solve this using Array's `forEach()` method.

Examples:

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

*/

let avgVal = function (arr) {
  let sum = 0;
  let longitud = arr.length;
  if (longitud < 1) {
    return null;
  }
  arr.forEach(function (elem, index) {
    sum += elem;
  });
  return sum / longitud;
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = avgVal;
} catch (e) {
  module.exports = null;
}
