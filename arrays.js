// //1. Log the last element of an array.
// let arr = ["mango", "banana", "strawberry"]
// console.log(arr[arr.length -1]);

// // 2. Change the first element of an array to "something else".
// let arr = ["mango", "banana", "strawberry"]
// arr[0] = "something else"
// console.log(arr);

// // 3. Add "mango" to the end fruits array ["strawberry", "bannana"].
// let fruits = ["strawberry", "bannana"]
// fruits.push("mango")
// console.log(fruits);

// // 4. Add "blueberry" to the front of the same fruits array.
// let fruits = ["strawberry", "bannana"]
// fruits.push("mango")
// fruits.unshift("blueberry")
// console.log(fruits);

// // 5. Remove the last element of the fruits array.
// let fruits = ["strawberry", "bannana"]
// fruits.push("mango")
// fruits.unshift("blueberry")
// fruits.pop()
// console.log(fruits);

// // 6. console.log the length of the fruits array.
// let fruits = ["strawberry", "bannana"]
// fruits.push("mango")
// fruits.unshift("blueberry")
// fruits.pop()
// console.log(fruits);
// console.log(fruits.length)

// // 7. Remove the first element of the fruits array.
// let fruits = ["strawberry", "bannana"]
// fruits.push("mango")
// fruits.unshift("blueberry")
// fruits.pop()
// fruits.shift()
// console.log(fruits);


// // 8. Join all the elements in the fruits array with a '$'.
// let fruits = ["strawberry", "bannana"]
// fruits.push("mango")
// fruits.unshift("blueberry")
// fruits.pop()
// fruits.shift()
// console.log(fruits.join ('$'));

// 9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.

//
// let arr1 = ["a", "b", "c"]
// let arr2 = ["a", "b"]
// let longestArr = (arr1 , arr2);
//
// if (arr1.length > arr2.length){
//   console.log(arr1)
// }else if (arr2.length > arr1.length){
//   console.log(arr2);
// }else{
//   console.log("null");
// }

//9. OR
//
// let longestArr = [["a", "b", "c"] , ["a", "b"]];
//
// if (longestArr[0].length > longestArr[1].length){
//   console.log(longestArr[0])
// }else if (longestArr[1].length > longestArr[0].length){
//   console.log(longestArr[1]);
// }else{
//   console.log("null");
// }


//10. Write a `middleElement` code block that takes an array variable and logs the middle element of that array.
// If the array has an even number of elements, the function should log "Oops, there's no middle..."
//
// let middleElement = ['dog', 'cat', 'bat', 'octopus', 'chinchilla']
//
// if(middleElement.length % 2 !== 0){
//   console.log(middleElement[(middleElement.length-1)/2]);
// }else{
//   console.log("Oops, there's no middle...");
// }


// 11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.
//
// let sumArray = [1,2,3,4]
// let sum = 0;
// // for a string: let sum = ""
//
// for (let i =0; i < sumArray.length ; i++){
// sum +=  sumArray[i]
// // sum = sum + sumArray[i]
// }
// console.log(sum);

// 12. Write a `range` code block that takes two number variables: min and max.
// The block will log an array with all the numbers, inclusive, between min and max.
//
// let min = 5
// let max = 10
// let range = []
// //empty array
//
// for (let i = min; i <= max; i++) {
//   range.push(i)
// }
// console.log(range);


// // 13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
// // The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
// // If no step value is provided, the increment will be 1.
//
// let min = 2;
// let max = 10;
// let step = 5
// let rangeWithStep = []
//
// if (!step){
// console.log("it worked");
// }
//
// for(i=min; i<=max; i+=step){
//   if(step) {
//     rangeWithStep.push(i)
//   }
// }
//   console.log(rangeWithStep);

// 14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
// The block should log a new array that doubles every number from the original array.

// let arr = [89,9,4]
// let doubleTrouble = []
//
// for (let i = 0; i < arr.length; i++){
//   doubleTrouble.push(arr[i]*2)
// }
// console.log(doubleTrouble);


// 15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.

let target = 11
let arr = [5,4,6]
let block = []
let result;

for (let i = 0; i < arr.length; i++){
  if (arr[0] + arr[1] === target){
    result = [0, 1]
    // console.log([0, 1]);
  } else if (arr[0] + arr[2] === target){
    result = [0, 2]
    // console.log([0,2]);
  } else if (arr[1] + arr[2] === target){
    result = [1, 2]
    // console.log([1,2]);
  }
}
console.log(result);
