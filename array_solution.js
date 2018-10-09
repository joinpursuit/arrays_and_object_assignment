/*
//Question 1
let fruits = ["mango","blueberry","banana"];
console.log(fruits[fruits.length - 1]);

//Question 2
let fruits = ["mango","blueberry","banana"];
fruits[fruits.length - 1] = "something else";
console.log(fruits);

//Question 3
let fruits = ["strawberry","banana"];
fruits.push("mango");
console.log(fruits);

//Question 4
let fruits = ["strawberry","banana"];
fruits.unshift("blueberry");
console.log(fruits);

//Question 5
let fruits = ["blueberry","strawberry","banana"];
fruits.pop();
console.log(fruits);

//Question 6
let fruits = ["blueberry","strawberry","banana"];
console.log(fruits.length);

//Question 7
let fruits = ["blueberry","strawberry","banana"];
fruits.shift();
console.log(fruits);

//Question 8
let fruits = ["blueberry","strawberry","banana"];
let joinFruits = fruits.join("$");
console.log(joinFruits);

//Question 9
let longestArr = [[1,2,3,4],[1,2,3,4,5]];
if (longestArr[0].length > longestArr[1].length) {
  console.log(longestArr[0]);
} else if (longestArr[0] < longestArr[1]) {
  console.log(longestArr[1]);
} else {
  console.log("null");
}

//Question 10
let arr = ['dog', 'cat', 'bat','octopus','chinchilla']
let middleElement = arr[Math.floor(arr.length / 2)];
if (arr.length % 2) {
  console.log(middleElement);
} else {
  console.log("Oops, there's no middle...");
}

//Question 11
let sumArray = [1,2,3,4,5,6];
let sum = 0;
for(let i = 0; i < sumArray.length; i++) {
  sum += sumArray[i];
}
console.log(sum);

//Question 12
let range = [3,8];
let newAange = [];
let min = range[0];
let max = range[1];
for (let i = min; i <= max; i++){
  newAange.push(i);
}
console.log(newAange);

//Question 13
let rangeWithStep = [2,10,2];
let newAange = [];
let min = rangeWithStep[0];
let max = rangeWithStep[1];
let step = rangeWithStep[2];
if (!step) {
  step = 1;
}
for (let i = min; i <= max; i += step) {
  newAange.push(i);
}
console.log(newAange);

//Question 14
let originArr = [1,2,3,5,9];
let doubleTrouble =[];
for (let i =0; i < originArr.length; i++) {
  doubleTrouble.push(originArr[i] * 2);
}
console.log(doubleTrouble);

//Question 15

//Solution with two for loops
let arr = [1,3,4,5,8];
let target = 9;
let answer = [];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length ; j++) {
    if (arr[i] + arr[j] === target) {
      answer.push([i,j]);
    }
  }
}
console.log(answer);

Solution with objects
// let arr = [0, 1, 2, 3]
// let target = 3;
// let searching = {};
// let output = [];
//
// for(let i = 0; i < arr.length; i++) {
//  if(searching[arr[i]] || searching[arr[i]] === 0) {
//    let arrToPush = [Math.min(arr[i], searching[arr[i]]), Math.max(arr[i], searching[arr[i]])]
//    output.push(arrToPush)
//  } else {
//    let look = target - arr[i]
//    searching[look] = arr[i]
//  }
// }
// console.log(output)
*/
