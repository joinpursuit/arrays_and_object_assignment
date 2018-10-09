1. Log the last element of an array.

let arr = [1, 2, 3, 4, 5]
console.log(arr[arr.length-1])

2. Change the first element of an array to "something else".

let arr = [1, 2, 3, 4, 5]
arr.splice(0,1,"something else")
console.log(arr)

3. Add "mango" to the end fruits array ["strawberry", "bannana"].

let arr = [1, 2, 3, 4, 5]
arr.splice(arr.length, arr.length, "strawberry", "bannana")
console.log(arr)

4. Add "blueberry" to the front of the same fruits array.

let arr = [1, 2, 3, 4, 5]
arr.splice(arr.length, arr.length, "strawberry", "bannana")
arr.splice(0,0,"blueberry")
console.log(arr)

5. Remove the last element of the fruits array.

let arr = [1, 2, 3, 4, 5]
arr.pop()
console.log(arr)

6. console.log the length of the fruits array.

let arr = [1, 2, 3, 4, 5]
console.log(arr.length)

7. Remove the first element of the fruits array.

let arr = [1, 2, 3, 4, 5]
arr.shift()
console.log(arr)

8. Join all the elements in the fruits array with a '$'.

let arr = [1, 2, 3, 4, 5]

console.log(arr.join("$"))


9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

let arr1 = [1, 2, 3, 4, 5, 6, 7]
let arr2 = [1, 2, 3, 4, 5]

if (arr1.length > arr2.length){
console.log(arr1)
} else if (arr2.length > arr1.length) {
console.log(arr2)
} else
  console.log('null')




10. Write a `middleElement` code block that takes an array varialbe and logs the middle element of that array.
If the array has an even number of elements, the function should log "Oops, there's no middle..."

let arr = [1, 2, 3, 48, 5, 6, 7]


if (arr.length % 2 != 0){
console.log(arr[Math.floor(arr.length/2)])
} else {
console.log('Oops, there\'s no middle...')}

11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.
```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
```
let array = [1, 2, 3, 4, 5, 6]
let sumArray =  0
for(let i = 0; i < array.length; i++) {
  sumArray += array[i];
}


console.log(sumArray)



12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.
```js
range(2, 6)
// => [2, 3, 4, 5, 6]
```
let min = 2
let max = 6

let array = []
for (let i = min; i < max+1; i++) {
  array.push(i)
  }
  console.log(array)


13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.
```js
rangeWithStep(4, 10, 2)
// => [4, 6, 8, 10]
rangeWithStep(4, 10)
// => [4, 5, 6, 7, 8, 9, 10]
```
let rangeWithStep = []
let min = 2
let max =10
let step = 2

if (step >= 1){
  for (let i = min; i <= max; i+=step) {
  rangeWithStep.push(i)

  }console.log(rangeWithStep)

  } else {
    for (let i = min; i <= max; i++) {
  rangeWithStep.push(i)


  }console.log(rangeWithStep)}


14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
The block should log a new array that doubles every number from the original array.
```js
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]
```
let doubleTrouble = []
let trouble = [10, 8, 5]
for (let i = 0; i <= trouble.length-1; i++){
  doubleTrouble.push(trouble[i]*2)
}
console.log(doubleTrouble)

15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.

let target = 7
let arr = [-5, 3, 10, 4, 13]
let indecies = []

for(let i = 0; i < arr.length; i++) {
  for(let j = i + 1; j < arr.length; j++) {
    if((arr[i] + arr[j]) === target) {
      indecies.push(i, j)
    }
}
}

console.log(indecies)
