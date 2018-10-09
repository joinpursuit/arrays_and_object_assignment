# Array Exercises

1. Log the last element of an array.
```
let arr = [1,2,3,5]
let arr2 = arr.pop()
console.log(arr2);
```
2. Change the first element of an array to "something else".
```
let arr = [1,2,3]
arr.shift()
arr.unshift('something else')
console.log(arr);
```
3. Add "mango" to the end fruits array ["strawberry", "bannana"].
```
let arr = ['strawberry', 'banana']
arr.push('mango')
console.log(arr);
```
4. Add "blueberry" to the front of the same fruits array.
```
let arr = ['strawberry', 'banana']
arr.unshift('blueberry')
console.log(arr);
```
5. Remove the last element of the fruits array.
```
let arr = ['strawberry', 'banana']
arr.pop()
console.log(arr);
```
6. console.log the length of the fruits array.
```
let arr = ['strawberry', 'banana']
console.log(arr.length);
```
7. Remove the first element of the fruits array.
```
let arr = ['strawberry', 'banana']
arr.shift()
console.log(arr);
```
8. Join all the elements in the fruits array with a '$'.
```
let arr = ['strawberry', 'banana']
console.log(arr.join('$'));
```
9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// returns ["jets", "mets", "giants", "yankees"]
```
```
let arr1 = ([1, 2, 3]);
let arr2 = ([1, 2, 3, 4, 5]);
if (arr1 < arr2){
  console.log(arr2)
  } else if (arr1 > arr2) {
    console.log(arr1)
  } else {
    console.log('Equal')
  }
```
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
```
let arr = ([1, 2, 3, 4, 5]);
let midIdx = Math.floor(arr.length / 2)
if (arr.length %2){
  console.log(arr[midIdx])
} else {
  console.log('opps! theres no middle')
}
```

11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.
```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
```
```
let arr = [1, 2, 3, 4, 5];
let total = 0
for (let i = 0; i < arr.length; i ++){
  total += arr[i]

}
console.log(total)

```
12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.
```js
range(2, 6)
// => [2, 3, 4, 5, 6]
```
```
let max = 15
let min = 7
let result = [];

for(i = min; i <= max; i++){
  result.push(i)
}
console.log(result);
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
```
let max = 15
let min = 7
let step;

let result = [];

if (step === 0 || step === undefined ){
  step = 1;
 }

for(i = min; i <= max; i += step){
  result.push(i)
}
console.log(result);
```

14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
The block should log a new array that doubles every number from the original array.
```js
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]
```
```
let arr = [1,2,3,4]
let arr2 = []
for (let i = 0; i < arr.length; i++){
  arr2.push(arr[i]*2)
}
console.log(arr2);
```

15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.
```
let target = 8
let arr = [0,1,2,3,4,5,6,7,8,9]
let result = []

for (let i = 0; i < arr.length - 1; i++){
  for (let j = i + 1; j < arr.length; j++){
if (arr[i] + arr[j] === target){
  result.push([i, j]);
}
  }
}

console.log(result);


```
