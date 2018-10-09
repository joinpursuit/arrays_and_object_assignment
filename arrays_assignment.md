# Array Exercises
Jonathan Erquinigo

1. Log the last element of an array.

let arr = ["hiking", "swimming", "biking","running"]
console.log(arr[arr.length - 1])

2. Change the first element of an array to "something else".

let arr = ["hiking", "swimming", "biking","running"]
let removed = arr.shift();
arr.unshift("jumping");
console.log(arr);

3. Add "mango" to the end fruits array ["strawberry", "bannana"].

let fruits = ["strawberry", "bannana"]
fruits.push("mango");
console.log(fruits)


4. Add "blueberry" to the front of the same fruits array.

let fruits = ["strawberry", "bannana"]
fruits.push("mango");
fruits.unshift('blueberry')
console.log(fruits)

5. Remove the last element of the fruits array.

let fruits = ["strawberry", "bannana"]
fruits.push("mango");
fruits.unshift('blueberry')
fruits.pop()
console.log(fruits)

6. console.log the length of the fruits array.


let fruits = ["strawberry", "bannana"]
fruits.push("mango");
fruits.unshift('blueberry')
fruits.pop()
console.log(fruits)
console.log(fruits.length - 1) // logs the length of the array

7. Remove the first element of the fruits array.

let fruits = ["strawberry", "bannana"]
fruits.push("mango");
fruits.unshift('blueberry')
fruits.pop()
console.log(fruits)
// console.log(fruits.length - 1) // logs the length of the array
fruits.shift(); // removes the first element of the array
console.log(fruits);

8. Join all the elements in the fruits array with a '$'.

let fruits = ["strawberry", "bannana"]
fruits.push("mango");
fruits.unshift('blueberry')
fruits.pop()
console.log(fruits)
// console.log(fruits.length - 1) // logs the length of the array
fruits.shift(); // removes the first element of the array
console.log(fruits.join('$')); // this is the joined array with the dollar sign

9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// returns ["jets", "mets", "giants", "yankees"]

let longestArr = [["jets", "mets", "giants", "yankees"],
["cubs", "white sox", "bulls"]];
//console.log(longestArr[longestArr.length - 1])

if(longestArr[0].length > longestArr[1].length){
console.log(longestArr[0].join(',') + " is the higher value")

}else if(longestArr[0].length < longestArr[1].length){
  console.log(longestArr[1].join(",") + " is the higher value")
}else if(longestArr[0].length === longestArr[1].length){
  console.log("null")
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

let arr = ['dog', 'cat','bat','octopus','chinchilla']
let middleElement = arr[Math.floor(arr.length/2)]
if(arr.length % 2 == 0){
console.log(middleElement)
}else if(arr.length % 2 == 1){
console.log(middleElement)
}

11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.
```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
```

let arr = [1,2,3,4,5,6]
sumArray = 0
for(let i = 0; i < arr.length; i++){
  console.log(arr[i])
  sumArray = arr[i] + sumArray
  //sumArray += arr[i]
//sumArray[((arr[i] + arr[i]) / 2)]
}
console.log(sumArray)


12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.
```js
range(2, 6)
// => [2, 3, 4, 5, 6]
```

let min = 1;
let max = 30;

//create a loop to push all the other numbers into the array
let newArray = [];

for(let i = min; i <= max; i++){
  //console.log(i)
  newArray.push(i)

}
console.log(newArray)


13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.
```js
rangeWithStep(4, 10, 2)
// => [4, 6, 8, 10]
rangeWithStep(4, 10)
// => [4, 5, 6, 7, 8, 9, 10]
```

let min = 1;
let max = 35;
let step = 3
let rangeWithStep = []
//use a for loop to log all the values and store in array (min and max going up increments of steps)
for(let i = min; i <= max; i += step){
  //console.log(i)
  rangeWithStep.push(i)
}
console.log(rangeWithStep)


14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
The block should log a new array that doubles every number from the original array.
```js
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]
```
let arr = [1,2,3,4,5,6,7,8,9]
let doubleTrouble = []
for(let i = 1; i <= arr.length; i = i * 2){
//console.log(i)
doubleTrouble.push(i)
}
console.log(doubleTrouble)

15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.

let arr = [1,2,3,4,5,6,7,8,9,]
let target = 4;

for(let i = 0; i< arr.length; i++){
  for(let j = 0; j < arr.length; j++){
if(arr[i] + arr[j] === target){
console.log(arr[i],  " + "+ arr[j]+ " = "+ target)

}else if(arr[i] === !arr[j]){
  console.log("not equal ")
}



}
}
