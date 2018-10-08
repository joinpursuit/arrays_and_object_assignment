// 1
array[array.length - 1];

// 2
array[0] = "something else";

// 3
let fruits = ["strawberry", "banana"];
fruits.push("mango");

// 4
fruits.unshift("blueberry");

// 5
fruits.pop();

// 6
console.log(fruits.length);

// 7
fruits.shift();

// 8
fruits.join("$");

// 9
function longestArr(arr1, arr2) {
  if (arr1.length === arr2.length) console.log(null);
  else if (arr1.length > arr2.length) console.log(arr1);
  else if (arr1.length < arr2.length) console.log(arr2);
}

// 10
function middleElement(arr1) {
  if (arr1.length % 2 === 0) console.log("Oops, there's no middle...");
  else console.log(arr1[Math.floor(arr1.length / 2)]);
}

// 11
function sumArray(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  console.log(sum);
}

// 12
function range(min, max) {
  let newArray = [];
  for (let i = min; i <= max; i++) {
    newArray.push(i);
  }
  console.log(newArray);
}

// 13
function rangeWithStep(min, max, step) {
  let newArray = [];
  if (typeof step !== "undefined") {
    for (let i = min; i <= max; i += step) {
      newArray.push(i);
    }
  } else if (typeof step === "undefined") {
    for (let i = min; i <= max; i++) {
      newArray.push(i);
    }
  }
  console.log(newArray);
}

// 14
function doubleTrouble(arrayNumbers) {
  let newArrayNumbers = [];
  for (let i = 0; i < arrayNumbers.length; i++) {
    newArrayNumbers.push(arrayNumbers[i] * 2);
  }
  console.log(newArrayNumbers);
}

// 15
function findIndices(target, array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
}

console.log(findIndices(8, [1, 2, 3, 4, 5])); // [2, 4]
