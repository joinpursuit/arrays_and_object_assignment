# Array Exercises

1. Log the last element of an array.
//
let nums = [1, 2, 3, 4, 4]
console.log (nums.length)
//

2. Change the first element of an array to "something else".
//
let tasks = ["study", "clean", "work"]
tasks[0] = "something else"
console.log (tasks)
//
3. Add "mango" to the end fruits array ["strawberry", "bannana"].
//
let fruits = ["strawberry", "banana"]
fruits.push ("mango")
console.log (fruits)
//
4. Add "blueberry" to the front of the same fruits array.
//
let fruits = ["strawberry", "banana"]
fruits.unshift ("blueberry")
console.log (fruits)
//

5. Remove the last element of the fruits array.
//
let fruits = ["strawberry", "banana"]
fruits.unshift ("blueberry")
fruits.pop (fruits.length -1)
console.log (fruits)
//

6. console.log the length of the fruits array.
//
let fruits = ["strawberry", "banana"]
fruits.unshift ("blueberry")
fruits.pop (fruits.length -1)
console.log (fruits.length)
//

7. Remove the first element of the fruits array.
//
let fruits = ["strawberry", "banana"]
fruits.unshift ("blueberry")
fruits.pop (fruits.length -1)
fruits.shift (0,1)
console.log (fruits)
//

8. Join all the elements in the fruits array with a '$'.
//
let fruits = ["strawberry", "banana"]
console.log (fruits.join("$"))
//

9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
//
let longestArr = [1 ,2 ,3 ,4 ,5]
let longestArr1 = [1, 2, 3, 4, 5, 6]

if (longestArr.length > longestArr1.length){
  console.log ("Array " + longestArr + " is longer")
}
else if (longestArr.length < longestArr1.length){
  console.log ("Array " + longestArr1 + " is longer")
}
else
  console.log ("null")
//

```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// returns ["jets", "mets", "giants", "yankees"]

```
10. Write a `middleElement` code block that takes an array varialbe and logs the middle element of that array.
If the array has an even number of elements, the function should log "Oops, there's no middle..."
//
let middleElement = ["chicken", "fish,", "steak"]

if (middleElement = Math.floor(middleElement.length/ 2)){
  console.log (middleElement.length)
}
else console.log ("oop...there's no middle...")
//

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

11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.
//
let sumArray = [1, 2, 3, 4, 5, 6]
let sum = 0;
for (let i = 0; i < sumArray.length; i++)
   sum = sum + sumArray[i]

  console.log(sum)
//
```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
```
12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.
//
let min = 2
let max = 6
let range =[]

for (let i = min; i < max; i++){
  range.push(i)
}
console.log (range)

//
```js
range(2, 6)
// => [2, 3, 4, 5, 6]
```

13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.
//
let min = 2
let max = 12
let step = 2
let range =[]

for (let i = min; i <= max; i+=2){
  range.push(i)
}
console.log (range)
//

```js
rangeWithStep(4, 10, 2)
// => [4, 6, 8, 10]
rangeWithStep(4, 10)
// => [4, 5, 6, 7, 8, 9, 10]
```

14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
The block should log a new array that doubles every number from the original array.
//
let tree = [2, 4, 6, 8, 10]

let doubleTree = []

for (let i = 0; i < tree.length ; i ++) {

 doubleTree.push(tree[i] * 2)
}
console.log(doubleTree)
//

```js
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]

```

15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.
//
let target = 12
let nums = [4, 8]

for (let i = 0; i < nums.length; i++){
  nums[0] + nums [1] === target
}
console.log (nums.split)
//
