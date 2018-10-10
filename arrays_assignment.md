# Array Exercises

1. Log the last element of an array.
```js
let myArray = ["Full Stack Web","iOS","Android"]
console.log(myArray[myArray.length-1])
```
2. Change the first element of an array to "something else".
```js
let myArray = ["Full Stack Web","iOS","Android"];
myArray[0] = "something else";
```
3. Add "mango" to the end fruits array ["strawberry", "banana"].
```js
let myArray = ["strawberry", "banana"];
myArray.push("mango");
```
4. Add "blueberry" to the front of the same fruits array.
```js
let myArray = ["strawberry", "banana","mango"];
myArray.unshift("blueberry");
```
5. Remove the last element of the fruits array.
```js
let myArray = ["blueberry","strawberry","banana","mango"];
myArray.pop();
```
6. console.log the length of the fruits array.
```js
let myArray = ["blueberry","strawberry","banana","mango"];
console.log(myArray.length)
```
7. Remove the first element of the fruits array.

```js
let myArray = ["strawberry", "banana","mango"];
myArray.shift();
```

8. Join all the elements in the fruits array with a '$'.
```js
let myArray = ["strawberry", "banana","mango"];
myArray.join('$');
```
9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// returns ["jets", "mets", "giants", "yankees"]

```
```js
function longestArr(array1,array2) {
  if (array1.length > array2.length) {
    return array1;
  } else if (array2.length > array1.length) {
    return array2;
  } else {
    return ("Your arrays ${array1} and ${array2} are equal");
  }
}
console.log(longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]));
```
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
```js
function middleElement (array) {
  if (array.length%2===0) {
    return ("Oops, there's no middle");
  } else {
    return array[(Math.floor(array.length / 2))];
  }
}
console.log(middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla']))
```
11. Write a `sumArray` code block that takes as variable array of numbers and logs the sum of all these numbers.
```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
```
```js
function sumArray(array){
  let result = 0;
  for (i=0; i<array.length; i++) {
    result += array[i];
  }
  return result;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
```
12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.

```js
range(2, 6)
// => [2, 3, 4, 5, 6]
```
```js
function range(num1,num2) {
  let myArray = [];
  for (let i=num1; i<=num2; i++) {
    myArray.push(i);
  }
  return myArray;
}
console.log(range(2,6))
```
13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.
```js
rangeWithStep(4, 10, 2)
// => [4, 6, 8, 10]
rangeWithStep(4, 10)
// => [4, 5, 6, 7, 8, 9, 10]
```
```js
function rangeWithStep(num1,num2,stepNum) {
  let myArray = [];
  let s = stepNum || 1;
  for (let i=num1; i<=num2; i+=s){
    myArray.push(i);
  }
return myArray;
}
console.log(rangeWithStep(4,10))
```
Corey's solution (step = 1 creates a DEFAULT VALUE for step, in case the step is not given.):
```js
const makeArr = (min, max, step = 1) => {
  let output = [];
  for (let i = min; i<= max; i += step ) {
    output.push(i);
  }
  return output;
}
console.log(makeArr(4,7))
```
14. Write a `doubleTrouble` code block that takes in a variable array of numbers.
The block should log a new array that doubles every number from the original array.
```js
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]
```
```js
function doubleTrouble(array) {
  let myArray = [];
  for (let i=0; i<array.length; i++) {
    myArray.push(array[i]*2);
  }
  return myArray;
}
console.log(doubleTrouble([2,3,4]))
```

15. Write a code block that takes in two variables. A target, and an array. Console log the indices (as an array) of the elements that add up to the target. Exactly two indices must be logged.
```js
function indices(t,array) {
let arrayIndices = [];
for (i=0; i<t; i++) {
  arrayIndices.push(i);
}
return arrayIndices;
}
console.log(indices(3,[2,6,9,7,2,9]))
```
Right solution (Reed's):
```js
let arr = [0,1,2,3];
let target = 3; //  represents the target

let answer = [];

for (let i = 0; i<arr.length-1; i++) {
  for (let j = i + 1; j<arr.length; j++) {
    if (arr[i]+arr[j] === target) {
      answer.push([i,j]);
    }
  }
}
```
