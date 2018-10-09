// # Array Exercises
// 1. Log the last element of an array.
console.log("####### Prob 1 #######");

let arr = ['a', 'b', 'c'];
console.log(arr[arr.length-1]);

// 2. Change the first element of an array to "something else".
console.log("####### Prob 2 #######");

arr[0] = "something else";
console.log(arr)

// 3. Add "mango" to the end fruits array ["strawberry", "bannana"].
console.log("####### Prob 3 #######");

let fruits = ["strawberry", "bannana"];
fruits.push("mango");
console.log(fruits);

// 4. Add "blueberry" to the front of the same fruits array.
console.log("####### Prob 4 #######");

fruits.unshift("blueberry");
console.log(fruits);
// 5. Remove the last element of the fruits array.
console.log("####### Prob 5 #######");

fruits.pop();
console.log(fruits);
// 6. console.log the length of the fruits array.
console.log("####### Prob 6 #######");

console.log(fruits.length);
// 7. Remove the first element of the fruits array.
console.log("####### Prob 7 #######");

fruits.shift();
console.log(fruits);
// 8. Join all the elements in the fruits array with a '$'.
console.log("####### Prob 8 #######");

let newFruits = fruits.join("$");
console.log(newFruits);
// 9. Write a `longestArr` code block that takes in two array variables. 
//The code block should compare the length of the two arrays and log whichever 
//array is longer (aka whichever array has more values in it). If the lengths of 
//the two arrays are equal, then log null.
// ```js
// longestArr([1, 2, 3], [1, 2, 3, 4, 5]);
// // returns [1, 2, 3, 4, 5]
// longestArr(["jets", "mets", "giants", "yankees"], ["cubs", "white sox", "bulls"]);
// // returns ["jets", "mets", "giants", "yankees"]

// ```
console.log("####### Prob 9 #######");

function longestArr(arrA, arrB){
	if(arrA.length > arrB.length){
		console.log(arrA);
	}else if(arrB.length > arrA.length){
		console.log(arrB);
	}else{
		console.log(null);
	}
}
longestArr([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);

// 10. Write a `middleElement` code block that takes an array varialbe and logs the middle element of that array.
// If the array has an even number of elements, the function should log "Oops, there's no middle..."

// ```js
// middleElement(['dog', 'cat', 'bat', 'octopus', 'chinchilla']);
//  // 'bat'

// middleElement([1, 2, 3, 4, 5]);
// //  3

// middleElement([1, "hmm", "wat", 4, 5]);
// //  "wat"

// middleElement([1, 2, 3, 4, 5, 6]);
// //  "Oops, there's no middle"

// middleElement(["john", "paul", "george", "ringo"]);
// //  "Oops, there's no middle"
// ```
console.log("####### Prob 10 #######");

function middleElement(arr){
	if(arr.length % 2){
		console.log(arr[Math.floor(arr.length/2)]);
	}else{
		console.log("Oops, there's no middle...")
	}
}
middleElement([1, 2, 3, 4, 5]);
// 11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.
// ```js
// sumArray([1, 2, 3, 4, 5, 6])
// //  21

// sumArray([1, 2, 3, 4, 5, -6])
// //  9
// ```
console.log("####### Prob 11 #######");

let arr1 = [1, 2, 3, 4, 5, 6];
let sumArr = 0;
for(i = 0; i < arr1.length; i++){
	sumArr = sumArr + arr1[i];
}
console.log(sumArr);
// 12. Write a `range` code block that takes two number variables: min and max.
// The block will log an array with all the numbers, inclusive, between min and max.
// ```js
// range(2, 6)
// // => [2, 3, 4, 5, 6]
// ```
console.log("####### Prob 12 #######");

function range(var1, var2){
	let rangeArr = [];
	let min = var1 < var2 ? var1 : var2;
	let max = var1 > var2 ? var1 : var2;
	for(let i = min; i <= max; i++){
		rangeArr.push(i);
	}
	console.log(rangeArr);
}
range(7, 4)
// 13. Write a `rangeWithStep` code block that takes three number variables: min, max and step.
// The block will log an array with all the numbers, inclusive, between min and max, , going up in increments equal to step.
// If no step value is provided, the increment will be 1.
// ```js
// rangeWithStep(4, 10, 2)
// // => [4, 6, 8, 10]
// rangeWithStep(4, 10)
// // => [4, 5, 6, 7, 8, 9, 10]
// ```
console.log("####### Prob 13 #######");

function rangeWithStep(var1, var2, step){
	let someArrayOfNums = [];
	let min = var1 < var2 ? var1 : var2;
	let max = var1 > var2 ? var1 : var2;
	if(step){
		for(let i = min; i <= max; i = i + step){
			someArrayOfNums.push(i);
		}
	}else{
		for(let i = min; i <= max; i++){
			someArrayOfNums.push(i);
		}
	}

	console.log(someArrayOfNums);
}
rangeWithStep(-2, 2, 1);
// 14. Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
// The block should log a new array that doubles every number from the original array.
// ```js
// doubleTrouble([1, 2, 3]);
// // returns [2, 4, 6]
// doubleTrouble([10, 8, 5]);
// // returns [20, 16, 10]
// ```
console.log("####### Prob 14 #######");

function doubleTrouble(arg){
	let doubledArr = [];
	for(let i = 0; i < arg.length; i++){
		doubledArr.push(arg[i]*2);
	}
	console.log(doubledArr);
}
doubleTrouble([3, -2, 3, 4]);

// 15. Write a code block that takes in two varaibles. 
//A target, and an array. Console log the indicies (as an array) of the 
//elements that add up to the target. Exactly two indicies must be logged. 

console.log("####### Prob 15 #######");


function findIndicies(target, arr){
	let arrOfIndicies = [];
	for (let i = 0; i < arr.length; i++) {	
		for (let j = i+1; j < arr.length; j++){
			if(arr[i] + arr[j] === target){
				arrOfIndicies.push(i, j);			
			}		
		}
	}
	console.log(arrOfIndicies);
}

findIndicies(7, [5, 4, 1, 2]);
//doesn't work well if arr[i]*2==target or if more than two array values combine to make up the target;










