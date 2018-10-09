# Array Exercises

1. Log the last element of an array.

let arr =['hello', 'darkness', "my", "old", "friend"];

console.log(arr[arr.length-1]);


2. Change the first element of an array to "something else".

let arr =['hello', 'darkness', "my", "old", "friend"];
arr[0]= "something else"

console.log(arr);


3. Add "mango" to the end fruits array ["strawberry", "banana"].

let fruits =["strawberry", "banana"];

fruits.push("mango");
console.log(fruits);


4. Add "blueberry" to the front of the same fruits array.

let fruits =["strawberry", "banana"];

fruits.unshift("blueberry");
console.log(fruits);


5. Remove the last element of the fruits array.

let fruits =["strawberry", "banana"];

fruits.pop();
console.log(fruits);

6. console.log the length of the fruits array.

let fruits =["strawberry", "bannana"];


console.log(fruits.length);

7. Remove the first element of the fruits array.

let fruits =["strawberry", "bannana"];

fruits.shift()

console.log(fruits);

8. Join all the elements in the fruits array with a '$'.
let fruits =["strawberry", "bannana"];

console.log(fruits.join('$'));

9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// returns ["jets", "mets", "giants", "yankees"]

```

let arrA = [1, 2, 3, 4];
let arrB = [1, 2, 3, 4, 5];

if(arrA.length === arrB.length){
  console.log("NuLl")
}else if(arrA.length > arrB.length){
  console.log(arrA)
}else if(arrB.length > arrA.length){
  console.log(arrB)
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

let middleElement = ['dog', 'cat', 'bat', 'octopus', 'chinchilla', 'moth'];
let mid = Math.floor(middleElement.length/2);

if(middleElement.length%2){
  console.log(middleElement[mid])

}else{
  console.log("Oops, theres no middle...")
}


11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.
```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
```

let sumArray = [1, 2, 3, 4, 5, 6];
let addNum = 0

for( var i = 0; i <= sumArray.length-1; i++){

  addNum += sumArray[i]
}

console.log(addNum);

12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.
```js
range(2, 6)
// => [2, 3, 4, 5, 6]
```

let start = 3;
let endNum = 9;
let aMM =[];

for(var i = start; i <= endNum; i++){

aMM.push(i)

}
console.log(aMM);




13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.
```js
rangeWithStep(4, 10, 2)
// => [4, 6, 8, 10]
rangeWithStep(4, 10)
// => [4, 5, 6, 7, 8, 9, 10]
```
let start =2
let endNum =12
let Step = 0;
let aMMR =[];

if(Step>1){
  for (var i =start; i <=endNum; i+= Step){
    aMMR.push(i);
  }
}else{
  for (var i =start; i <=endNum; i++){
    aMMR.push(i);
  }
}
console.log(aMMR)




14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
The block should log a new array that doubles every number from the original array.
```js
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]
```

let doubleArr = [3, 4, 5, 6, 20];
let doubA =[];
for(var i = 0; i <= doubleArr.length - 1; i++){
  doubA.push(2 * doubleArr[i])
}
console.log(doubA);

15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.
