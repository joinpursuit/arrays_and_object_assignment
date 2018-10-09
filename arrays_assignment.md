# Array Exercises

1. Log the last element of an array.

let fruits = ["apple","rhubarb", "banan"]
console.log(fruits[fruits.length - 1])

2. Change the first element of an array to "something else".

let ingr = ["flour", "butter", "cinnamon"]
console.log(ingr[ingr.length - 1])

ingr[0] = "Something else"

3. Add "mango" to the end fruits array ["strawberry", "bannana"].

let fruits = ["strawberry", "bannana"]
fruits.push("mango")
console.log(fruits)

4. Add "blueberry" to the front of the same fruits array.

fruits.unshift("blueberry")

5. Remove the last element of the fruits array.

fruits.pop()

6. console.log the length of the fruits array.

console.log(fruits.length - 1)

7. Remove the first element of the fruits array.

fruits.shift()

8. Join all the elements in the fruits array with a '$'.

console.log(fruits.join("$"))

9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
```js
arr1 = [1, 2, 3]
arr2 = [10, 11, 12]

if (arr1.length > arr2.length) {
  console.log(arr1)
} else if (arr2.length > arr1.length) {
  console.log(arr2)
} else {
  console.log("null")
}

10. Write a `middleElement` code block that takes an array varialbe and logs the middle element of that array.
If the array has an even number of elements, the function should log "Oops, there's no middle..."

let arr = ["cat", "dog", "bird", "ok"]
let mid = Math.floor((arr.length) / 2 )

if (mid % 2 === 0) {
  console.log("Oops, there is no middle.")
}  else {

console.log(arr[mid])
}

11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.
```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
```
let myArray = [10, 20, 30, 40, 50]
let sum = 0;
for(let i=0; i<myArray.length; i++){
 sum += myArray[i]
 }


12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.
```js
range(2, 6)
// => [2, 3, 4, 5, 6]
```
let min= 20
let max = 30

let range = []
for(let i = min; i <= max; i++ ){
range.push(i)}
console.log(range)

13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.
```js
rangeWithStep(4, 10, 2)
// => [4, 6, 8, 10]
rangeWithStep(4, 10)
// => [4, 5, 6, 7, 8, 9, 10]
```
let min= 20
let max = 30
let step = 0

let range = []

if(step > 0){
for(let i = min; i <= max; i += step ){
range.push(i)}
console.log(range) }

if(step === 0)
{ for(let i = min; i <= max; i++ ){
range.push(i)}
console.log(range) }


14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
The block should log a new array that doubles every number from the original array.
```js
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]
```

let myArray = [10, 20, 30, 40, 50];
let doubleArray = [];

for(let i = 0; i < myArray.length; i++) {
  doubleArray.push(myArray[i] * 2)
}
console.log(doubleArray)

15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.
