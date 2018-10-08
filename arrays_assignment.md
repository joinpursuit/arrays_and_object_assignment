# Array Exercises

1. Log the last element of an array.

let arr = ["fox", "frog", "bug"];
console.log(arr[arr.length - 1])

2. Change the first element of an array to "something else".

arr[0] = "something else"

3. Add "mango" to the end fruits array ["strawberry", "bannana"].

let fruits = ["strawberry", "banana"];
fruits.push("mango");
console.log(fruits)

4. Add "blueberry" to the front of the same fruits array.

fruits.unshift("blueberry")
console.log(fruits)

5. Remove the last element of the fruits array.

fruits.pop()
console.log(fruits)

6. console.log the length of the fruits array.

console.log(fruits.length)

7. Remove the first element of the fruits array.

fruits.shift()

8. Join all the elements in the fruits array with a '$'.

console.log(fruits.join($))

9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// returns ["jets", "mets", "giants", "yankees"]

```

let arr1 = ["fox", "box", "lox", "pox"]
let arr2 = ["mouse", "house", "blouse"]
let longestArr = ([arr1, arr2]);

if (longestArr[0].length > longestArr[1].length) {

console.log(longestArr[0])

} else if (longestArr[0].length < longestArr[1].length) {

console.log(longestArr[1])

} else {

  console.log("null")
}

,,,,
10. Write a `middleElement` code block that takes an array variable and logs the middle element of that array.
If the array has an even number of elements, the function should log "Oops, there's no middle..."

```js
middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla']);
 // 'bat'

middleElement([1, 2, 3, 4, 5]);
//  3

middleElement([1, "hmm", "wat", 4, 5]);
//  "wat"

middleElement([1, 2, 3, 4, 5, 6]);
//  "Oops, there's no middle"

middleElement(["john", "paul", "george", "ringo"]);
//  "Oops, there's no middle"
```
let arr = ["small", "doll", "call", "mall", "stroll"];
let middleElement = arr[Math.floor(arr.length / 2)];
if((arr.length / 2) % 2 === 0) {
  console.log("Oops, there's no middle...")

} else {


console.log(middleElement)
}


11. Write a `sumArray` code block that takes as variable array of numbers and logs the sum of all these numbers.
```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
```
let array = [1, 2, 3, 4, 5, -6];
sumArray = 0;
for (let i = 0; i < array.length; i++ ) {
  sumArray = sumArray + array[i];
}

console.log(sumArray)


12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.
```js
range(2, 6)
// => [2, 3, 4, 5, 6]
```
let min = 12
let max = 17
let range = [];
for(let i = min; i <= max; i++) {
range.push(i)
}
console.log(range)

,,,,

13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.
```js
rangeWithStep(4, 10, 2)
// => [4, 6, 8, 10]
rangeWithStep(4, 10)
// => [4, 5, 6, 7, 8, 9, 10]
```

let min = 23;
let max = 34;
let step = 5;
let rangeWithStep = [];

if (step === undefined || step === 0) {
  step = 1
}

for (let i = min; i <= max; i = i + step) {
rangeWithStep.push(i)
}

console.log(rangeWithStep)
,,,,

14. Write a `doubleTrouble` code block that takes in a variable array of numbers.
The block should log a new array that doubles every number from the original array.
```js
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]
```

let trouble = [1, 4, 7, 22];
let doubleTrouble = [];

for (let i = 0; i < trouble.length; i++) {
  doubleTrouble.push(trouble[i] * 2)
}

console.log(doubleTrouble)

,,,

15. Write a code block that takes in two variables. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.

let target = 72;
let array = [21, 67, 3, 5];

let result = [];

for (let i = 0; i < array.length; i++) {

  for (let q = i + 1; q < array.length; q++) {

    if (array[i] + array[q] === target) {
      result.push(i, q)
    }

  }
}


if (result.length === 0) {
  console.log("No answer")
} else {
  console.log(result)
}


//This one was intense
