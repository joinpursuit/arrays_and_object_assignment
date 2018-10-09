# Array Exercises

1. Log the last element of an array.

let arr = [ 1, 2, 3, 4]
console.log(arr.length)

2. Change the first element of an array to "something else".

arr.shift()
arr.unshift("something else")

3. Add "mango" to the end fruits array ["strawberry", "bannana"].

let fruits = ['strawberry', 'banana']
fruits.push('mango')

4. Add "blueberry" to the front of the same fruits array.

fruits.unshift('blueberry')

5. Remove the last element of the fruits array.

fruts.pop()

6. console.log the length of the fruits array.

console.log(fruits.length)

7. Remove the first element of the fruits array.

fruits.shift()

8. Join all the elements in the fruits array with a '$'.

console.log(fruits.join('$'))

9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// returns ["jets", "mets", "giants", "yankees"]


let longestArr = [[1, 2, 3],[4, 5, 6, 7, 8, 9]]

if((longestArr[0].length) > (longestArr[1].length)) {
  console.log(longestArr[1]);
} else if (longestArr[0].length < longestArr[1].length) {
  console.log(longestArr[1]);
}else {
  console.log('null');
}

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
let arr = [1, 2, 3, 4, 5, 6, 7, 8]

let middleElement = arr[Math.floor((arr.length - 1) / 2)]
  if (arr.length % 2 === 0){
    console.log("Oops theres no middle...");
  } else {
    console.log(middleElement);
  }


11. Write a `sumArray` code block that takes as variable array of numbers and logs the sum of all these numbers.
```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
```
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let sumArray = arr.join('+');

console.log(eval(sumArray));


12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.
```js
range(2, 6)
// => [2, 3, 4, 5, 6]
```
let min = 2
let max = 6
range = []

while(min < max+1){
  range.push(min++);
}
console.log(range);


13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.
```js
rangeWithStep(4, 10, 2)
// => [4, 6, 8, 10]
rangeWithStep(4, 10)
// => [4, 5, 6, 7, 8, 9, 10]
```
let a = 2
let b = 10
let c = 2
let range = [a, b, c]
while (a <= b) {
  range.push(a += c)
}
console.log(range);

14. Write a `doubleTrouble` code block that takes in a variable array of numbers.
The block should log a new array that doubles every number from the original array.
```js
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]
```
let a = 2
let b = 10
let c = 2
let range = [a, b, c]
for(let i = min; i <= max; i += step) {
  range.push.(i)
}
console.log(range);

15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.

let arr = [0, 1, 2, 3 ];
let target = 3;
let answer = [];

for (let i = 0;i < arr.length - 1; i++) {

  for (let j = i +1; j < arr.length; j++) {
    if (arr[i]+ arr[j] === target) {
      answer.push([i, j])
    }
  }
}
