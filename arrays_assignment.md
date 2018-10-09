# Array Exercises

1. Log the last element of an array.

let arr = ["fist", "second", "last"]
console.log(arr[arr.length - 1])



2. Change the first element of an array to "something else".

let arr = ["fist", "second", "last"]

arr.shift()
arr.unshift("something else")
console.log(arr)


3. Add "mango" to the end fruits array ["strawberry", "bannana"].

let fruits = ["straberry", "bannana"]

fruits.push("mango");

console.log(fruits);



4. Add "blueberry" to the front of the same fruits array.

let fruits = ["straberry", "bannana"]

fruits.push("mango");
fruits.unshift("blueberry")
console.log(fruits);



5. Remove the last element of the fruits array.

let fruits = ["straberry", "bannana"]

fruits.push("mango");
fruits.unshift("blueberry");
fruits.pop()
console


6. console.log the length of the fruits array.

let fruits = ["straberry", "bannana"]

console.log(fruits.length)


7. Remove the first element of the fruits array.

let fruits = ["straberry", "bannana"]

fruits.push("mango");   // mango is added to the end
fruits.unshift("blueberry"); // blueberry is added to the beginning
fruits.pop(); // mango is removed from the end
fruits.shift(); // blueberry is removed from the front
console.log(fruits)


8. Join all the elements in the fruits array with a '$'.

let fruits = ["mango", "orange", "juice","avocado"]
console.log(fruits.join("$"))



9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// returns ["jets", "mets", "giants", "yankees"]

```
let longestArr =[[1,7,3,3,4,5],[1,0,0,9,0,6,5]];


if (longestArr[0].length === longestArr[1].length){
  console.log("NAN")
}
else if (longestArr[0].length > longestArr[1].length){
  console.log(longestArr[0])
} else {
  console.log(longestArr[1])
}



10. Write a `middleElement` code block that takes an array varialbe and logs the middle element of that array.
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

let middleElement = ['dog', 'cat', 'bat', 'octopus', 'chinchilla','chuwawa'];

if ((middleElement.length) % 2 === 1){
  console.log(middleElement[Math.floor(middleElement.length /2)])
} else {
  console.log("oops you have two middle Element")
}



11. Write a `sumArray` code block that takes as variable array of numbers and logs the sum of all these numbers.
```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
```
let sumArray = [1,2,3,4,5];

let result = 0


for (let i = 0; i < sumArray.length; i++){
  result+= sumArray[i]
}
console.log(result);




12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.
```js
range(2, 6)
// => [2, 3, 4, 5, 6]
```
let min = 3;
let max = 6;

let range = [];

for (let i = min; i < max; i++){
  (range.push(i))
}
console.log(range)

let min = 4;
let max = 10;
let step = 3;

let range = [];

if(step > 0){
for (let i = min; i <= max; i+= step){
  range.push(i)
}
console.log(range)

  } else {
  for (let i = min; i <= max; i++){
    range.push(i)
}
console.log(range)
}



13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.
```js
rangeWithStep(4, 10, 2)
// => [4, 6, 8, 10]
rangeWithStep(4, 10)
// => [4, 5, 6, 7, 8, 9, 10]
```
let min = 4;
let max = 10;
let step = 3;

let range = [];

if(step > 0){
for (let i = min; i <= max; i+= step){
  range.push(i)
}
console.log(range)

  } else {
  for (let i = min; i <= max; i++){
    range.push(i)
}
console.log(range)
}

14. Write a `doubleTrouble` code block that takes in a variable array of numbers.
The block should log a new array that doubles every number from the original array.
```js
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]
```

let tree = [6,2,3,4,5];

let doubleTree= []

for (let i = 0; i < tree.length; i++){
  doubleTree.push(tree[i] * 2)
}
console.log(doubleTree)






15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.

[1, 2, 3, 4, 56, 23, 11]
target = 7

output // => [2, 3]


let age = [4,0,3,5,6,7];
let target = 7;

for (let i = 0; i < age.length - 1; i++){
  for(let j = 1; j < age.length; j++){
  if (age[i] + age[j] === target){
  console.log(i, j)
}
}
}
// Reed correction

let age = [2,4,5,3,5,6,1];
let target = 7;
let answer = []

for (let i = 0; i < age.length - 1; i++){
  for (let j = i +1; j < age.length; j++){
    if (age[i] + age[j] === target){
      answer.push([i, j])
    }
  }
}
console.log(answer);
