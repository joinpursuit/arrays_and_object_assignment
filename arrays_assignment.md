# Array Exercises

1. Log the last element of an array.

let ary = [1,5,7,9]
console.log(ary[ary.length-1])


2. Change the first element of an array to "something else".

let ary = [1,5,7,9]
ary[0] = "something else"


3. Add "mango" to the end fruits array ["strawberry", "bannana"].

let ary = ["strawberry", "bannana"];
ary.push( "mango");


4. Add "blueberry" to the front of the same fruits array.

let ary = ["strawberry", "bannana"];
ary.push( "mango");
ary.unshift("blueberry");


5. Remove the last element of the fruits array.
let ary = ["strawberry", "bannana"];
ary.push( "mango");
ary.unshift("blueberry");
ary.pop()

6. console.log the length of the fruits array.

console.log(ary.length)

7. Remove the first element of the fruits array.

ary.shift()

8. Join all the elements in the fruits array with a '$'.

let ary = ["strawberry", "bannana"];
ary.push( "mango");
ary.unshift("blueberry");

console.log(ary.join('$'))


9. Write a `longestArr` code block that takes in two array variables. The code block should compare the length of the two arrays and log whichever array is longer (aka whichever array has more values in it). If the lengths of the two arrays are equal, then log null.
```js
longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// returns [1, 2, 3, 4, 5]

longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// returns ["jets", "mets", "giants", "yankees"]

let ary1 = [4,5,1,3,7];
let ary2 = [1,2,3,4,5,]

if(ary1.length > ary2.length){
  console.log(ary1)
}else if(ary1.length < ary2.length){
  console.log(ary2)
}else{
  console.log("null")
}



```
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

let ary1 = ['cat', 'dog', 'apples', 'airplanes'];
let midIx = Math.floor(ary1.length /2);
if(ary1.length %2 != 0) {
console.log (ary1[midIx])}
else {console.log ("Oops, there's no middle")
}


11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.
```js
sumArray([1, 2, 3, 4, 5, 6])
//  21

sumArray([1, 2, 3, 4, 5, -6])
//  9
```

let ary1 = [1, 2, 3, 4, 5, 6]
let sumary1 = 0
for(x=0;x<ary1.length;x++){
  sumary1+=ary1[x]
}
console.log(sumary1)


12. Write a `range` code block that takes two number variables: min and max.
The block will log an array with all the numbers, inclusive, between min and max.

```js
range(2, 6)
// => [2, 3, 4, 5, 6]
```

let max = 7
let min = 2
let ary =[]
for(i=min;i<max;i++){
  ary.push(i)
}console.log(ary)


13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
If no step value is provided, the increment will be 1.
```js
rangeWithStep(4, 10, 2)
// => [4, 6, 8, 10]
rangeWithStep(4, 10)
// => [4, 5, 6, 7, 8, 9, 10]
```

let max = 10;
let min =  1;
let step = 2;

let ary =[];
for(i=min;i<= max;i+= step);{
  ary.push(i)
}console.log(ary)

14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
The block should log a new array that doubles every number from the original array.
```js
doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]
doubleTrouble([10, 8, 5]);
// returns [20, 16, 10]


let ary = [1,3,5,10,80,120];
let temp = [];
for(i=0;i<ary.length;i++);{
  temp.push(ary[i]*2)
}
console.log(temp)

```

15. Write a code block that takes in two varaibles. A target, and an array. Console log the indicies (as an array) of the elements that add up to the target. Exactly two indicies must be logged.

 given: arr = [1,2,3,4,5]
 target: = 8
 output [2,4]
