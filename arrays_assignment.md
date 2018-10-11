# Array Exercises

1. Log the last element of an array.
``` js
let arr = ["pencil", "scissors", "glue", "tape"]
console.log (arr[arr.length-1])
```

2. Change the first element of an array to "something else".
```js
let arr = ["pencil", "scissors", "glue", "tape"]
arr [0] = "gum"
console.log(arr)
```

3. Add "mango" to the end fruits array ["strawberry", "bannana"].
```js
let fruits = ["strawberry", "banana"]
fruits.push ("mango")
console.log (fruits)
```

4. Add "blueberry" to the front of the same fruits array.
```js
let fruits = ["strawberry", "banana"]
fruits.unshift ("blueberry")
console.log (fruits)
```

5. Remove the last element of the fruits array.
```js
let fruits = ["strawberry", "banana"]
fruits.pop ()
console.log (fruits)
```

6. console.log the length of the fruits array.
```js
let fruits = ["strawberry", "banana"]
console.log (fruits.length)
```

7. Remove the first element of the fruits array.
```js
let fruits = ["strawberry", "banana"]
fruits.shift ()
console.log (fruits)
```

8. Join all the elements in the fruits array with a '$'.
```js
let fruits = ["strawberry", "banana"]
console.log (fruits.join('$'))
```

9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
 // to compare we can use the conditional more than
 // if (longArr [0][])
// create an if else statement that uses a conditional to compare if their length and log the longest array
 if their length is equal, log null  


```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// returns ["jets", "mets", "giants", "yankees"]
```

```js
let longArr1 = [1, 2, 3]
let longArr2 = [1, 2, 3, 4]
if (longArr1.length < longArr2.length){
  console.log (longArr2)
} else if (longArr1.length > longArr2.length){
  console.log (longArr1)
} else if (longArr1.length === longArr2.length){
  console.log ("null")
}

```

10. Write a `middleElement` code block that takes an array variable and logs the middle element of that array.
If the array has an even number of elements, the function should log "Oops, there's no middle..."
```js
let midElement = [1, 2, 3, 4, 5]
let mid = Math.floor((midElement.length)/2)
if (mid % 2 === 0) {
  console.log(midElement[mid])
} else {
  console.log ("Oops, There's no middle...")
}
```

11. Write a `sumArray` code block that takes as variable an array of numbers and logs the sum of all these numbers.

```js
let arr = [20, 40, 60, 80]
let sum = 0;
for (let i = 0; i < arr.length; i++){
sum += arr[i]// could also be written as: sum = sum + arr[i]
// i = # => arr[#] => # is i = 0 => arr[20] => 20
}
console.log(sum)
```

12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.

```js
let min = 1
let max = 5
let emp = []
for (let i = min ; i <= max; i++){
emp.push(i)

}
console.log(emp)
```

13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.

```js
let min = 1
let max = 12
let step = 2
let total = []
if (step > 0){
for (let i = min; i <= max; i+= step)
total.push(i)
} else if (step <= 0){
for (let i= min; i<=max; i++)
total.push(i)
} console.log (total)
```

14. Write a `doubleTrouble` code block that takes in a variable array of numbers.
The block should log a new array that doubles every number from the original array.

```js
let doubleTrouble = [1, 2, 3]
let total = []
for (let i = 0; i < doubleTrouble.length; i++){
total.push (doubleTrouble[i] * 2)}
console.log(total)
```

15. Write a code block that takes in two variables. A target, and an array. Console log the indices (as an array) of the elements that add up to the target. Exactly two indices must be logged.
the code takes two variables
```js
let target = 5
let array = [1, 6, 4, 10, 5]
let result = []

for ( let i = 0; i < array.length; i++){
  for ( let j = i+1; j < array.length; j++){
    if (array[i] + array[j] === target){
      result.push(i, j)
      }
    }
  }
if (result.length === 0) {
  console.log("No matching values found :\(");
  } else {
  console.log(result)
  }

```
