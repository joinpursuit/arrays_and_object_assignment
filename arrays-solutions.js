1)

let array = [2, 4, 8 , 12 , 16];

console.log(array[array.length - 1]);

2)

let array2 = [2, 4, 8 , 12 , 16];

array2[0] = 1111;

console.log(array2);

3)

let array3 = ['strawberry', 'banana'];

let savedArray = array3.push('mango');
console.log(savedArray);
console.log(array3);

4)

let array4 = ['strawberry', 'banana'];

array4.unshift('blueberry');
console.log(array4);

5)

let array5 = ['blueberry', 'strawberry', 'banana'];

array5.pop();
console.log(array5);

6)

let array6 = ['blueberry', 'strawberry', 'banana', 'mango'];

console.log(array6.length);

7)

let array5 = ['blueberry', 'strawberry', 'banana'];

array5.shift();

console.log(array5);

8)

let array5 = ['blueberry', 'strawberry', 'banana'];

console.log(array5.join("$"));

9)


let arrayA = ['blueberry', 'strawberry', 'banana'];
let arrayB = ['New York', 'California', 'Ohio', 'Chicago'];
let longestArr = [arrayA, arrayB];


if (longestArr[0].length > longestArr[1].length) {
  console.log(longestArr[0]);
} else if (longestArr[1].length > longestArr[0].length) {
  console.log(longestArr[1]);
} else {
  console.log("null");
}

10)

let middleElement = ['apple', 'banana', 'grape'];

if (middleElement.length % 2 === 1) {
  console.log(middleElement[Math.floor(middleElement.length / 2)]);
} else {
  console.log("Oops, there's no middle...");
}

11)

sumArray = [1, 2, 3, 4, 5, 6];
totalsumArray = 0;

for (let i = 0; i < sumArray.length; i++) {
  totalsumArray = totalsumArray + sumArray[i];
}

console.log(totalsumArray);

12)

let min = 25;
let max = 30;
let range = [];

for (let i = min; i <= max; i++) {
  range.push(i);
}

console.log(range);

13)

let min = 2;
let max = 11;
let step = 4;
let range = [];

if (step === undefined || step === 0) {
  step = 1;
}

for (let i = min; i <= max; i = i + step) {
    range.push(i);
}

console.log(range);


14)

let doubleTrouble = [2, 5, 6, 9, 11];
let newArray = [];

for (let i = 0; i < doubleTrouble.length; i++) {
  newArray.push((doubleTrouble[i] * 2));
};

  console.log(newArray);

15)

let target = 7;
let array = [3, 4, 8, 15];
let newArray = [];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] + array[j] === target) {
      newArray.push(i,j);
    }
  }
}

if (newArray.length === 0) {
  console.log("No Match");
} else {
   console.log(newArray);
};
