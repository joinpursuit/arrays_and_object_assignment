# Array Exercises

1. Log the last element of an array.

```
let arr = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10] ;

console.log(arr[arr.length - 1]);

```
2. Change the first element of an array to "something else".


```

let arr = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10] ;

arr [0] = "something else";
console.log(arr);

```
3. Add "mango" to the end fruits array ["strawberry", "bannana"].

```
let fruits = ["strawberry", "bannana"]

fruits.push("mango")
console.log(fruits)

```
4. Add "blueberry" to the front of the same fruits array.

```
let fruits = ["strawberry", "bannana"]

fruits.push("mango")
fruits.unshift("blueberry")
console.log(fruits)

```
5. Remove the last element of the fruits array.

```

let fruits = ["strawberry", "bannana"]

fruits.push("mango")
fruits.unshift("blueberry")
fruits.pop()
console.log(fruits)

```
6. console.log the length of the fruits array.

```

let fruits = ["strawberry", "bannana"]

fruits.push("mango")
fruits.unshift("blueberry")
fruits.pop()

console.log(fruits.length)

```
7. Remove the first element of the fruits array.

```

let fruits = ["strawberry", "bannana"]

fruits.push("mango")
fruits.unshift("blueberry")
fruits.shift()
console.log(fruits)

```

8. Join all the elements in the fruits array with a '$'.

```
let fruits = ["strawberry", "bannana"]

fruits.push("mango")
fruits.unshift("blueberry")


console.log(fruits.join('$'))

```

9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.

```

let arr1 = ['a', 'b', 'c', 'd']
let arr2 = [1, 2, 3, 4, 5]

if( arr1.length > arr2.length) {
  console.log(arr1)

} else if( arr1.length < arr2.length) {
  console.log(arr2);
} else {
  console.log(null)
}

```

10. Write a `middleElement` code block that takes an array varialbe and logs the middle element of that array.
If the array has an even number of elements, the function should log "Oops, there's no middle..."

```

let middleElement = ['a', 'b', 'c', 'd', 'e'];


if(middleElement.length % 2 === 1) {
  console.log( middleElement[Math.floor(middleElement.length / 2)])
}
else {
  console.log("Opps, there is no middle")
}


```

11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.

```

let arr = [2, 2, 3, 4, 5]
let sumArr = 0;

for( i = 0; i < arr.length ; i++) {
  sumArr += arr[i]
} console.log(sumArr);

```

12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.

```

let min = 3;
let max = 13;

let rangeArr = [];

for(i = 3 ; i <= 13 ; i++) {
rangeArr.push(i)
}
console.log(rangeArr);

```

13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.

```

let min = 2;
let max = 14;

let rangeWithStep = [];

for(i = 2 ; i <= 14 ; i+= 2) {
rangeWithStep.push(i)
}
console.log(rangeWithStep);

```

14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
The block should log a new array that doubles every number from the original array.


```
let arr1 = [2, 3, 4, 5, 6]
let doubleTrouble = [];

for(let i = 0; i < arr1.length; i++) {
   doubleTrouble[i] = arr1[i] * 2;
}  

 console.log(doubleTrouble);

 ```


15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.


```
let arr = [12, 13, 11, 10, 15, 8];

let t = 24;

let ans = {};

let t2 = [];


for(let i = 0;  i < arr.length - 1 ; i ++) {

for(let j = i + 1; j < arr.length ; j ++) {

console.log([i,j])



 if (arr[i] + arr[j] === t) {
    t2.push([arr[i], arr[j]])
}
}
}
 console.log(t2);
 
 ```
