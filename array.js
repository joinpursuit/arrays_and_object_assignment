//1.
// let arr = [2, 3, 5, 7, 11]
// console.log(arr[arr.length - 1]);

//2.
// let arr = [2, 3, 5, 7, 11]
// arr[0]= 1
// console.log(arr);

//3.
// let arr = ['strawberry', 'bannana'];
//  arr.push('mango');
//  console.log(arr);

//4.
// let arr = ['strawberry', 'bannana'];
//  arr.unshift('blueberry');
// console.log(arr);

//5.
// let arr = ['strawberry', 'bannana'];
// arr.pop();
// console.log(arr);

//6
// let arr = ['strawberry', 'bannana'];
// console.log(arr.length);

//7.
// let arr = ['strawberry', 'bannana'];
// arr.shift();
// console.log(arr);

//8
// let arr = ['strawberry', 'bannana'];
// let joinArr = arr.join('$')
// console.log(joinArr);

//9.
// let longestArr = ('a', 'b');
// let a = [1, 2, 3];
// let b = [1, 2, 3];
// if (a.length > b.length) {
//   console.log(a);
// } else if (a.length < b.length) {
//   console.log(b);
// } else {
//   console.log(null);
// }

//10.
// let middleElement = ('a');
// let a = ['dog', 'cat', 'bat', 'octopus', 'chinchilla'];
// if (a.length % 2 === 1) {
//   console.log(a[Math.floor(a.length / 2)]);
// } else {
//   console.log("Oops, there's no middle...");
// }

//11.
// let sumArray = [1, 2, 3, 4, 5, -6];
// let total = 0
// for (let i = 0; i < sumArray.length; i++) {
//   total = total + Number(sumArray[i]);
//   console.log(total);
// }//???

//12.
// let min = 2;
// let max = 6;
// let result = [];
// for(let i = min; i <= max; i++) {
//   result.push(i)
// }
// console.log(result)

//13.
// let min = 4;
// let max = 10;
// let step = 2;
// if(!step) {
//   step = 1;
// }
// let result = [];
// for(let i = min; i <= max; i += step) {
//   result.push(i)
// }
// console.log(result)

//14.
let arr = [1, 2, 3];
let result = [];
for(let i = 0; i < arr.length; i++) {
  result.push(arr[i] * 2)
}
console.log(result)
