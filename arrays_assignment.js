// Question 1
// let array = ['earth', 'fire', 'water', 'ice', 'wind']
// console.log(array[array.length - 1])
// ///////////////////////////////////////////////////////
// Question 2
// let array = ['earth', 'fire', 'water', 'ice', 'wind'];
// array.splice(0,1, "something else");
// console.log(array);
///////////////////////////////////////////////////////////
// Question 3
// let array = ['strawberry', 'cherry', 'dragon fruit', 'apple', 'orange']
// array.push('mango')
// console.log(array)
////////////////////////////////////////////////////////////
// Question 4
// let array = ['strawberry', 'cherry', 'dragon fruit', 'apple', 'orange'];
// array.unshift('blueberry');
// console.log(array);
////////////////////////////////////////////////////////////
// Question 5
// let array = ['strawberry', 'cherry', 'dragon fruit', 'apple', 'orange'];
// array.pop()
// console.log(array)
/////////////////////////////////////////////////////////////
// Question 6
// let array = ['strawberry', 'cherry', 'dragon fruit', 'apple', 'orange'];
// console.log(array.length);
//////////////////////////////////////////////////////////////
// Question 7
// let array = ['strawberry', 'cherry', 'dragon fruit', 'apple', 'orange'];
// array.shift()
// console.log(array)
///////////////////////////////////////////////////////////////
// Question 8
// let array = ['strawberry', 'cherry', 'dragon fruit', 'apple', 'orange'];
// console.log(array.join('$'))
///////////////////////////////////////////////////////////////
// Question 9
// let array1 = [1, 2, 3, 4]
// let array2 = [1, 2, 3, 4, 5, 6, 7]
//
// if(array1.length <= array2.length){
//   console.log(array2)
// } else if(array1.length >= array2.length){
//   console.log(array1)
// } else {
//   console.log('null')
// }
///////////////////////////////////////////////////////////////
// Question 10
// let array = [1, 2, 3, 4, 5, 6, 7, 8]
// let middleElement = Math.floor(array.length / 2)
//  if(middleElement % 2 === 0){
//    console.log("Oops, there's no moddle")
//  }else if(middleElement % 2 !== 0){
//    console.log(array[middleElement])
//  }
//  /////////////////////////////////////////////////////////////
//  Question 11
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let sum = 0
// for(let i = 0; i <= array.length-1; i++){
//   sum += array[i]
// } console.log(sum)
/////////////////////////////////////////////////////////////////
// Question 12
// let range = [2, 6]
// for(let i = 6; i >= 2; i--){
//   range.splice(0,0, i)
// }
// range.pop()
// range.pop()
// console.log(range)
/////////////////////////////////////////////////////////////////
// Question 13
// let range = [2, 20, 2]
// let i;
// for(i = range[0]; i <= range[1]; i += range[2]){
//   range.push(i)
// }
// range.shift()
// range.shift()
// range.shift()
// console.log(range)
/////////////////////////////////////////////////////////////////
// Question 14
// let range = [3, 4, 5, 6, 8, 10]
// let i;
// for(i = 0; i <= range.length-1; i++){
// range[i] *= 2
// }console.log(range)
////////////////////////////////////////////////////////////////
// Question 15
// let target = 30;
// let array = [1, 18, 13, 10];
//
// let result = [];
//
// for(let i = 0; i < array.length; i++) {
//   for (let q = i + 1; q < array.length; q++){
//     if(array[i] + array[q] === target){
//       result.push(i, q)
//     }
//   }
// }
//  if(result.length === 0) {
//    console.log('no answer')
//  } else {
//    console.log(result)
//  }
