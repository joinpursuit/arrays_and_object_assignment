// # Object Exercises
//
// ## Question 1
//
// Given the cat object below:
//
// ```js
//  let cat = {
//    genus: 'Felis',
//    species: 'Catus'
// }
// ```
//
// a. Log the species of `cat`.
// b. Add a new key 'color' and give it a value.
// c. Write code that logs whether or not `cat` has the property 'texture'.

console.log("1.a._____________________________________");

let cat = {
  genus: "Felis",
  species: "Catus"
}

console.log(cat.species);

console.log("1.b._____________________________________");

cat.color = "orange";

console.log(cat);

console.log("1.c._____________________________________");

if (cat.texture === undefined){
  console.log("We don't keep track of texture.")
}

// ## Question 2
//
// What will the code below log?  Explain why.
//
// ```js
// let p1 = {
//   name: 'Joe'
// }
//
// let p2 = {
//   name: 'Joe'
// }
//
// console.log(p1 === p2)
// ```


console.log("This code will log false because when it comes to objects, they only return back true if you are referring to the exact same object. The fact that they have the same value is irrelevant.");


// ## Question 3
//
// Given the object variable `spanishNumbers` below:
//
// ```js
// let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", :5: "cinco"}
// ```
//
// a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
// b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.
//

let spanishNumbers= {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"};



let llaves = [];
let valores = [];

for (i in spanishNumbers){
  llaves.push(i);
  valores.push(spanishNumbers[i]);
}
console.log("3.a._____________________________________");
console.log(llaves);
console.log("3.b._____________________________________");
console.log(valores);



// ## Question 4
//
// Write a code block the logs the number of properties an object has.
console.log("4._____________________________________");

let apple = {color: "red", ripeness: "ripe", type: "Gala"};
let y = 0;

for (x in apple) {
  y++;
}

console.log(y);


// ## Question 5
//
// Loop through the following object and log all of the directors.
//
// ``` js
// let films = [
//  {
//    name: 'Psycho',
//    director: 'Alfred Hitchcock',
//    released: 1960
//  }, {
//    name: 'Citizen Kane',
//    director: 'Orson Welles',
//    released: 1941
//  }, {
//    name: 'The Usual Suspects',
//    director: 'Bryan Singer',
//    released: 1995
//  }
// ]
//
// //logs 'Alfred Hitchcock', 'Orson Welles', 'Bryan Singer'
// ```
console.log("5._____________________________________");


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

for (let d in films) {
  console.log(films[d].director);
}



// ## Question 6
//
// You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`
//
// ```js
// let people = [
//     {
//         "firstName": "Calvin",
//         "lastName": "Newton"
//     },
//     {
//         "firstName": "Garry",
//         "lastName": "Mckenzie"
//     },
//     {
//         "firstName": "Leah",
//         "lastName": "Rivera"
//     },
//     {
//         "firstName": "Sonja",
//         "lastName": "Moreno"
//     },
//     {
//         "firstName": "Noel",
//         "lastName": "Bowen"
//     }
// ]
// ```
// a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.
// b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.

let people = [
    {
        "firstName": "Calvin",
        "lastName": "Newton"
    },
    {
        "firstName": "Garry",
        "lastName": "Mckenzie"
    },
    {
        "firstName": "Leah",
        "lastName": "Rivera"
    },
    {
        "firstName": "Sonja",
        "lastName": "Moreno"
    },
    {
        "firstName": "Noel",
        "lastName": "Bowen"
    }
];

console.log("6.a._____________________________________");

for (firs in people) {
  console.log(people[firs].firstName);
}

console.log("6.b._____________________________________");

for (firsLast in people) {
  console.log(people[firsLast].firstName + " " + people[firsLast].lastName);
}


// ## Question 7
//
// Print the second most common letter in the string below:
//
// var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."

console.log("7._____________________________________");

let myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."

let brokenString = myString.toLowerCase();


let alpha = {a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0};

for (let letter in alpha) {
  for (let letter2 of brokenString){
    if (letter2 === letter){
      alpha[letter] += 1;
    }
  }
}

let biggestLetter = alpha.a;
let secondBiggest = alpha.a;
let theLetter;

for (let key in alpha) {
  if (alpha[key] > biggestLetter) {
    biggestLetter = alpha[key];
  }
}

for (let key2 in alpha) {
  if (alpha[key2] > secondBiggest && alpha[key2] < biggestLetter){
    secondBiggest = alpha[key2];
    theLetter = key2;
  }
}

console.log(`${theLetter} is the second most used letter, it appears ${secondBiggest} times.`);
//
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
// let deposits = {
//  "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
//  "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
//  "Davies" : [400.98, 56.98, 300.00],
//  "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
//  "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
// }
// ```

console.log("8.a._____________________________________");

let sum = 0;


let deposits = {
 "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
 "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
 "Davies" : [400.98, 56.98, 300.00],
 "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
 "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
};

let money = Object.values(deposits);

for (let people of money) {
  for (let i = 0; i < people.length; i++) {
    sum += people[i];
  }
  console.log(sum);
}
