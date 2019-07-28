//## Question 1

//Given the cat object below:

 let cat = {
   genus: 'Felis',
   species: 'Catus'
}


// a. Log the species of `cat`.
// b. Add a new key 'color' and give it a value.
// c. Write code that logs whether or not `cat` has the property 'texture'.

//a.
  console.log(cat.species);
//b.
  cat.color = 'red'
//c.

// ## Question 2
//
// What will the code below log?  Explain why.
//

// let p1 = {
//   name: 'Joe'
// }
//
// let p2 = {
//   name: 'Joe'
// }
//
// console.log(p1 === p2)
//It is comparing the values oftwo different people. In the real world 2 peopleare never the same.
//it will print out as false

// ## Question 3
//
// Given the object variable `spanishNumbers` below:
//
// ```js
 let spanishNumbers = {
   1: "uno",
   2: "dos",
   3: "tres",
   4: "quatro",
   5: "cinco"
 }
// a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
// b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.
let engNum = [];
let spaNum = [];

for (let keys in spanishNumbers) {
  engNum.push(keys)
}
console.log(engNum);

console.log('----------------');

spaNum =  Object.values (spanishNumbers)

for (let values in spanishNumbers) {
  spaNum.push(values)
}
console.log(spaNum);

//Question 4//Write a code block the logs the number of properties an object has.

let some = {
  1: 'one',
  2: 'two',
  3: 'three'
}

//Object.keys(some)

console.log(some.length)


//5. Loop through the following object and log all of the directors.


let films = [
 {
   name: 'Psycho',
   director: 'Alfred Hitchcock',
   released: 1960
 }, {
   name: 'Citizen Kane',
   director: 'Orson Welles',
   released: 1941
 }, {
   name: 'The Usual Suspects',
   director: 'Bryan Singer',
   released: 1995
 }
]

for (i = 0; i < films.length; i++){
  console.log(films[i].director)
}

//6.You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`


let people = [
    {
        firstName: "Calvin",
        lastName: "Newton"
    },
    {
        firstName: "Garry",
        lastName: "Mckenzie"
    },
    {
        firstName: "Leah",
        lastName: "Rivera"
    },
    {
        firstName: "Sonja",
        lastName: "Moreno"
    },
    {
        firstName: "Noel",
        lastName: "Bowen"
    }
]


//a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.
//b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.
firstN = [];
fullN  = [];

 for (z = 0; z < people.length; z++) (
    firstN.push(people[z].firstName)
 )

console.log(firstN);

for (j = 0; j < people.length; j++) (
   fullN.push(people[j].firstName + ' ' + people[j].lastName)
)
console.log(fullN);




// ## Question 7
//
// Print the second most common letter in the string below:
//
// var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."

// ## Question 8
//
// You are given the object `deposits`, which maps a persons name to an array of deposits that have been made to their account.
//
// a) Write code to to print the name and total amount deposited of the person who received the most money.
//
// b) Create an array called `stolenCents`, iterate over deposits for each person and steal their cents! ... like Office Space or Superman 3. Calculate the decimal part of each value, add it to the `stolenCents` array and round down the value in the original object.
//
// c) How much money did you steal?
//
// ```js

let myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
let countMe = {};

let strSplit = myString.toLowerCase().split('');

for (let ltr of strSplit) {
    if (countMe.hasOwnProperty(ltr)) { //.hasOwnProperty => Checks if object has the key
        countMe[ltr] += 1;
    } else {
        countMe[ltr] = 1; // If key does not exist create one with value 1
    }
}
//console.log(countMe)
let max = 0;
let secondMax = 0;
let maxLtr = '';
let sndMaxLtr = '';
for (let letter of strSplit) {
    if (letter === " " || letter === "'" || letter === "."){
        continue;
    }
    if (countMe[letter] > max) {
        sndMaxLtr = maxLtr;
        maxLtr = letter;
    }
}



let deposits = {
    "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
    "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
    "Davies" : [400.98, 56.98, 300.00],
    "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
    "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
};

let max = '';
let total = 0;
for (let key in deposits) {
    let sum = 0;
    for(num of deposits[key]) {
        sum += num;
    }
    if (sum > total) {
        max = key;
        total = sum;
    }
}

let stolen = [];
for (let key in deposits) {
    for(num of deposits[key]) {
        let hold = num - Math.floor(num);
        stolen.push(hold);
    }
}

for (let key in deposits) {
    let roundDown = [];
    for (num of deposits[key]) {
        num = Math.floor(num);
        roundDown.push(num);
    }
    deposits[key] = roundDown;
}

let stolenTotal = 0;
for (let num of stolen) {
    stolenTotal += num;
}

console.log("8a) ", max);
console.log("8b) ", "Stolen: ", stolen , "\n\nOriginal Object Rounded Down: ", deposits);
console.log("8c) ", stolenTotal);




console.log('------9');

let recipe = {
  name: Smores,
  servings: 2,
  ingredients:'graham crackers','marshmellows', 'Hersheys'
}
