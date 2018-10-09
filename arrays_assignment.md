# Array Exercises

<!-- 1. Log the last element of an array. -->

// 1.
// let array = ['blue', 'red', 'yellow', 'orange']
// console.log(array);
// console.log(array[array.length -1]);


<!-- 2. Change the first element of an array to "something else". -->

//2.
// array[0] = 'purple';
// console.log(array)



<!-- 3. Add "mango" to the end fruits array ["strawberry", "bannana"]. -->

// 3.
// let fruits =['strawberry', 'banana'];
// fruits.push('mango') //add mango to the end of fruits array
// console.log(fruits)



<!-- 4. Add "blueberry" to the front of the same fruits array. -->


// 4.
// fruits.unshift('blueberry') // add blueberry to the front of the fruits array
// console.log(fruits)



<!-- 5. Remove the last element of the fruits array. -->

// fruits.pop() // remove the last element of the fruits array
// console.log(fruits)



<!-- 6. console.log the length of the fruits array. -->

// 6.
// console.log(fruits.length) //log the length of the array


<!-- 7. Remove the first element of the fruits array. -->

//7.
// fruits.shift()
// console.log(fruits) // remove the first element of the fruits arrays

<!-- 8. Join all the elements in the fruits array with a '$'. -->

// 8.
// console.log(fruits.join('$'))



<!-- 9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// returns ["jets", "mets", "giants", "yankees"]

``` -->

// 9.
// let longestArr = [['jets', 'mets', 'nets'], ['yankees', 'giants', 'knicks', 'rangers']]
// if (longestArr[0].length > longestArr[1].length){
//   console.log(longestArr[0])
// }else if(longestArr[1].length > longestArr[0].length){
//   console.log(longestArr[1])
// }else{
//   console.log('null')
// }


<!-- 10. Write a `middleElement` code block that takes an array varialbe and logs the middle element of that array.
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
``` -->



// 10.
// let middleElement = [1, 2, 'hello', 4, 5]
// let midInd = Math.floor(middleElement.length / 2)
// if (middleElement.length % 2 === 0){
//   console.log('Oops, there is no middle')
// }else{
//   console.log(middleElement[midInd]);
// }



<!-- 11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.
```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
``` -->


// 11.
// let array = [2, 5, 7, 10, 6, 9];
// let sumArray = array[0] + array[1] + array[2] + array[3] + array[4] + array[5];
// console.log(sumArray)


<!-- 12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.
```js
range(2, 6)
// => [2, 3, 4, 5, 6]
``` -->


// 12.
// let min = 2
// let max = 6
// let range = []
// for (let i = min; i <= max; i++){
//   range = [i];
//   console.log(range)
// }

<!-- 13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.
```js
rangeWithStep(4, 10, 2)
// => [4, 6, 8, 10]
rangeWithStep(4, 10)
// => [4, 5, 6, 7, 8, 9, 10]
``` -->

// 13.
// let min = 4;
// let max = 10;
// let step = 1;
// let rangeWithStep = [];
//
// for (let i = min; i <= max; i += step){
//   if(step > 1 ){
//   rangeWithStep.push(i)
// }else{
//   rangeWithStep.push(i)
// }
// }
//   console.log(rangeWithStep)



<!-- 14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
The block should log a new array that doubles every number from the original array.
```js
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]
``` -->


// 14.
// let doubleTrouble = [1, 2, 3];
// let work = [];
// for (let i = 0; i < doubleTrouble.length; i++){
//   work.push(doubleTrouble[i] * 2)
// }
// console.log(work)

<!-- 15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.  -->

//15.


// let target = 12;
// let arr = [2, 4, 7, 5, 10, 15]
// let answer = [];
//
// for (let i = 0; i < arr.length - 1; i++){
//   for (let j = i + 1; j < arr.length; j++){
//     if(arr[i] + arr[j] === target){
//       answer.push([[i], [j]]);
//     }
//   }
//
// }
//
// console.log(answer);
