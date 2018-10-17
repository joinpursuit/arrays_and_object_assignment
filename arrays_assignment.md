# Array Exercises

1. Log the last element of an array.

let fruits = [ "apples", "mango" , "pear", "strawberry"]
fruits[fruits.length -1]

2. Change the first element of an array to "something else".

let fruits = [ "apples", "mango" , "pear", "strawberry"]
fruits[0]=("something else")
console.log(fruits)


3. Add "mango" to the end fruits array ["strawberry", "bannana"].

let fruits = [ "strawberry", "bannana"]
fruits.push("mango")
console.log(fruits)


4. Add "blueberry" to the front of the same fruits array

let fruits = [ "strawberry", "bannana", "mango"]
fruits.unshift("blueberry")
console.log(fruits)


5. Remove the last element of the fruits array.

let fruits = [ "strawberry", "bannana", "mango"]
fruits.pop()
console.log(fruits)

6. console.log the length of the fruits array.
console.log(fruits.length)


7. Remove the first element of the fruits array.

let fruits = [ "strawberry", "bannana", "mango"]
fruits.shift()
console.log(fruits)


8. Join all the elements in the fruits array with a '$'.

let fruits = [ "strawberry", "bannana", "mango"]
console.log(fruits.join("$"))

9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
```js

arr1 = [ 1,2,3]
arr2 = [1,2,3]
if ( arr1.length === arr2.length) {
    console.log(null)
} if (arr1.length > arr2.length) {
console.log(arr1)  
} else {
console.log(arr2)
}

```
10. Write a `middleElement` code block that takes an array varialbe and logs the middle element of that array.
If the array has an even number of elements, the function should log "Oops, there's no middle..."

MidIndex = [Math.floor(myArr.length/2)]


if (myArr.length % 2 === 1) {
  console.log(myArr[MidIndex])
} else {
  console.log("Oops, there's no middle...")
}

11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.

sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9

let NumArray = [1, 2, 3, 4, 5, 6]
let sumArray = 0

for ( let i = 0; i < NumArray.length; i++) {
 sumArray += NumArray[i]
}
console.log(sumArray)

12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.
```js
range(2, 6)

let MinNum = 2
let MaxNum = 6

for ( let i = MinNum; i <= MaxNum ; i++)
if (i >= MinNum && i <= MaxNum) {
  console.log(i)
}

13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.

let Min = 4
let Max = 10
let step = 2
if (!step) {
  step = 1
}
RangeOfStep =[]
for ( let i = Min; i <= Max; i += Step) {
  RangeOfStep.push(i)
}

console.log(RangeOfStep)

14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
The block should log a new array that doubles every number from the original array.

arr = [1,2,3,4]
let doubleTrouble = arr.map((el) => {
  return el*2
})
 console.log(doubleTrouble)
 
15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.

let arr = [0,1,2,3]
let target = 3
let answer =[]

for (let i = 0; i < arr.length-1;i++) {
  for (let j = i + 1; j< arr.length; j++) {
  if (arr[i] + arr[j]=== target) {
    answer.push([i,j])
  }
}
}
console.log(answer)
