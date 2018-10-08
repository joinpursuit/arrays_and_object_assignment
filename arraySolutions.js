//1 Log the last element of an array.
let arrNums = [0, 1, 2, 3];
console.log(arrNums[arrNums.length - 1]);

//2 Change the first element of an array to "something else".
let arrStr = ["this", "that", "another thing"];
arrStr[0] = "something else";
console.log(arrStr);

//3 Add "mango" to the end fruits array ["strawberry", "bannana"].
let fruits = ["strawberry", "bannana"];
fruits.push("mango");
console.log(fruits);

//4 Add "blueberry" to the front of the same fruits array.
fruits.unshift("blueberry");
console.log(fruits);

//5 Remove the last element of the fruits array.
let lastElem = fruits.pop();
console.log(lastElem, fruits);

//6 console.log the length of the fruits array.
console.log("length", fruits.length);

//7 Remove the first element of the fruits array.
let firstElem = fruits.shift();
console.log(firstElem, fruits);

//8 Join all the elements in the fruits array with a '$'.
let joined = fruits.join("$");
console.log(joined, fruits);

//9 Write a longestArr code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
const longestArr = function(a, b) {
  if (a.length === b) {
    return null;
  } else {
    return a.length > b.length ? a : b;
  }
};
//console.log(longestArr([1, 2, 3], [1, 2, 3, 4, 5]));
// returns [1, 2, 3, 4, 5]

console.log(
  longestArr(
    ["jets", "mets", "giants", "yankees"],
    ["cubs", "white sox", "bulls"]
  )
);
// returns ["jets", "mets", "giants", "yankees"]

//10 Write a middleElement code block that takes an array variable and logs the middle element of that array. If the array has an even number of elements, the function should log "Oops, there's no middle..."
const middleElement = function(a) {
  if (!(a.length % 2)) {
    console.log("Oops, there's no middle...");
  } else {
    return console.log(a[(a.length / 2) >>> 0]);
  }
};
middleElement(["dog", "cat", "bat", "octopus", "chinchilla"]);
// 'bat'

middleElement([1, 2, 3, 4, 5]);
//  3

middleElement([1, "hmm", "wat", 4, 5]);
//  "wat"

middleElement([1, 2, 3, 4, 5, 6]);
//  "Oops, there's no middle"

middleElement(["john", "paul", "george", "ringo"]);
//  "Oops, there's no middle"

//11 Write a sumArray code block that takes as variable array of numbers and logs the sum of all these numbers.
const sumArray = function(a) {
  let b = 0;
  for (let i = 0, len = a.length; i < len; i++) {
    b += a[i];
  }
  return console.log(b);
};
sumArray([1, 2, 3, 4, 5, 6]);
//  21

sumArray([1, 2, 3, 4, 5, -6]);
//  9

//12 Write a range code block that takes two number variables: min and max. The block will log an array with all the numbers, inclusive, between min and max.
const range = function(min, max) {
  let a = [];
  for (min; min <= max; min++) {
    a.push(min);
  }
  return console.log(a);
};
range(2, 6);
// => [2, 3, 4, 5, 6]

//13 Write a rangeWithStep code block that takes three number variables: min, max and step. The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step. If no step value is provided, the increment will be 1.
const rangeWithStep = function(min, max, step) {
  let a = [];
  let i = step || 1;
  for (min; min <= max; min += i) {
    a.push(min);
  }
  return console.log(a);
};
rangeWithStep(4, 10, 2);
// => [4, 6, 8, 10]
rangeWithStep(4, 10);
// => [4, 5, 6, 7, 8, 9, 10]

//14 Write a doubleTrouble code block that takes in a variable array of numbers. The block should log a new array that doubles every number from the original array.
const doubleTrouble = function(a) {
  let b = [];
  for (let i = 0, len = a.length; i < len; i++) {
    b.push(a[i] * 2);
  }
  return console.log(b);
};
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]

//15 Write a code block that takes in two variables. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.
const codeBlock = function(target, arr) {
  let b = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] <= 7) {
      b.push(i);
    }
  }
  for (let j = 0, ben = b.length; j < ben; j++) {
    for (let k = 0, ken = b.length; k < ken; k++) {
      if (arr[j] + arr[k] === target) {
        if (j !== k) {
          return console.log([j, k]);
        }
      }
    }
  }
};

codeBlock(7, [1, 2, 3, 4, 19, 0]); //=> [2, 3]
