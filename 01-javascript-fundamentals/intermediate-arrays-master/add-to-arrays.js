// ADD TO ARRAY RESEARCH
// uso de shift, unshift, push y pop

function addToArray(location, elem, arr) {
  if (location === "FRONT") {
    arr.unshift(elem);
  } else if (location === "BACK") {
    arr.push(elem);
  } else {
    console.log("ERROR");
  }
}

testArray = [1, 2, 3];

addToArray("FRONT", 0, testArray);
console.log(testArray); // [0,1,2,3]

addToArray("BACK", 4, testArray);

// RANGE

function range(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []

// EVEN NUMBERS

let evenNumbers = function (max) {
  let result = [];
  for (let i = 2; i < max; i += 2) {
    result.push(i);
  }
  return result;
};

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]

// LOG BETWEEN STEPPER RECALL

function logBetweenStepper(min, max, step) {
  for (let i = min; i <= max; i += step) {
    console.log(i);
  }
}

//
