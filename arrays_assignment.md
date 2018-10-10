# Array Exercises

1. Log the last element of an array.

```js
let arr = [1,2,3];

console.log(arr[arr.length - 1]);
```

2. Change the first element of an array to "something else".

```js
let arr = ["kiwi","mango", "watermelon"];
arr[0] = "something else";
console.log(arr);

//Or

arr.slice(0,1, "something else")
console.log(arr);
```
3. Add "mango" to the end fruits array ["strawberry", "banana"].

```js
let arr = ["strawberry", "banana"];
arr.push("mango");
console.log(arr);
```

4. Add "blueberry" to the front of the same fruits array.

```js
let arr = ["strawberry", "banana"];
arr.unshift("blueberry");
console.log(arr);
```

5. Remove the last element of the fruits array.

```js
let arr = ["blueberry", "strawberry", "banana", "mango"];
arr.pop();
console.log(arr);
```

6. console.log the length of the fruits array.

```js
let arr = ["blueberry", "strawberry", "banana", "mango"];
console.log(arr.length);
```

7. Remove the first element of the fruits array.

```js
let arr = ["blueberry", "strawberry", "banana", "mango"];
arr.shift();
console.log(arr);
```
8. Join all the elements in the fruits array with a '$'.

```js
let arr = ["blueberry", "strawberry", "banana", "mango"];
console.log(arr.join("$"));
```

9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.

```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

longestArr(["cubs", "white sox", "bulls"],["jets", "mets", "giants", "yankees"]);
// returns ["jets", "mets", "giants", "yankees"]
```

```js

let longestArr = [ ["cubs", "white sox", "bulls"],["jets", "mets", "giants", "yankees"]];

if(longestArr[0].length > longestArr[1].length){
  console.log(longestArr[0]);
}else if(longestArr[0].length < longestArr[1].length){
  console.log(longestArr[1]);
}else{
  console.log(null);
};

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
let element = ['dog', 'cat', 'batman~','bat', 'octopus', 'chinchilla'];
let midElement = Math.floor(element.length/2);

if (element.length%2 === 1){
   console.log(element[midElement]);
}else if (element.length%2 === 0){
  console.log("Oops, there's no middle...");
};
```

11. Write a `sumArray` code block that takes as variable array of numbers and logs the sum of all these numbers.

```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
```

```js
let arr = [1, 2, 3, 4, 5, 6];
let newArr = 0;

for(let i = 0; i < arr.length; i++){
  newArr = newArr + arr[i];
  console.log(arr[i], newArr);
};
```

12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.
```js
range(2, 6)
// => [2, 3, 4, 5, 6]
```

```js
let minNum = 1;
let maxNum = 4;
var range = [];

for (var i = minNum; i <= maxNum; i++) {
    range.push(i);
}
console.log(range);
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
let minNum = 4;
let maxNum = 10;
var step = 2;
let arr = [];

for (let i = minNum; i <= maxNum; i += step) {
    arr.push(i);
}
console.log(arr);
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
let arr = [1, 2, 3];
let result = [];
for(let i = 0; i < arr.length; i++) {
  result.push(arr[i] * 2)
}
console.log(result)

```

15. Write a code block that takes in two variables. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.

```js
let arr = [0, 1,2,3];
let target = 3;
let answer = [];

for (let i = 0; i < arr.length - 1; i++){
 for (let j = i + 1; j < arr.length; j++){
   if (arr[i] + arr[j] === target){
     answer.push([i, j]);
   }
 }
}
 console.log(answer);
```
