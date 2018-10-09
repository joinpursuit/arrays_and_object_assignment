/*
1.
let arr = [2, 3, 5, 7, 11]
console.log(arr[arr.length -1])

2.
let arr = [2, 3, 5, 7, 11]
arr[0] = "something else"
console.log(arr)

3.
let fruits = ["starwberry", "banana"]
fruits.push ("mango")
console.log(fruits)

4.
let fruits = ["starwberry", "banana"]
fruits.unshift ("blueberry")
console.log(fruits)

5.
let fruits = ["starwberry", "banana"]
fruits.pop()
console.log(fruits)

6.
let fruits = ["starwberry", "banana"]
console.log(fruits.length)

7.
let fruits = ["starwberry", "banana"]
fruits.shift()
console.log(fruits)

8.
let fruits = ["starwberry", "banana"]
console.log(fruits.join('$'))

9.
let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3, 4]

if(arr1 > arr2){
  console.log(arr1)
}else if(arr2 > arr1){
  console.log(arr2)
}else{
  console.log("null")
}

10.
let arr = [1, 2, 3, 4]
let middle = Math.floor((arr.length) / 2)
if(middle % 2 === 0){
  console.log("Oops, there's no middle...")
}else{
  console.log(middle)
}

11.
sum = 0
let arr = [1, 2, 3, 4]
for(let i = 0; i < arr.length; i++){
  sum += arr[i] //keying into index of array === array[index]
}
 console.log(sum)

 12.
 let min = 2
 let max = 10
 let range = []

 for(let i = min; i <= max; i++){
   range.push(i)
 }
 console.log(range)

13.
let min = 6
let max = 18
let step = 1

let range = []
let s = step || 1;

for(let i = min; i <= max; i+= s){
  range.push(i)
}
console.log(range)

14.
let arry = [1, 2, 3, 4];
let doubleTrouble = []

for(let i = 0; i < arry.length; i++){
  doubleTrouble.push(arry[i] *2)
}
console.log(arry, doubleTrouble)
*/
