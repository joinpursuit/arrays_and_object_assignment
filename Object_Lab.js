/* Question 1
// Given the cat object below:

 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
a. Log the species of cat.
b. Add a new key 'color' and give it a value.
c. Write code that logs whether or not cat has the property 'texture'.
*/

let cat = {
  genus: 'Felis',
  //texture: 'zzz',
  species: 'Catus'
};
console.log(cat);
console.log(`a. The species of cat is ${cat.species}`);

console.log(`b. Adding a key 'color' to cat ${cat.color = 'gold orange'}
The new cat object is`, cat);

let catKeys = Object.keys(cat);
  if (catKeys.includes('texture')){
    console.log(`Cat has a 'texture' property`);
  } else {
    console.log(`Cat does't have a 'texture' property`);
  }
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');


/* Question 2
What will the code below log? Explain why.
let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)
*/

// This code will log the boolean `false`
// The reason is even p1 and p2 are two objects that have the same pairs of keys/values
// they still two different objects

/* Question 3
Given the object variable spanishNumbers below:

let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", :5: "cinco"}

a. Write a code block that takes an object variable and stores the keys in an array.
Then log the array.
b. Write a code block that takes an object variable and stores the values in an array.
Then log the array.
*/

let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"}

let spanishNumbersKeys = Object.keys(spanishNumbers);
console.log(`The array's keys are : `, spanishNumbersKeys);

let spanishNumbersValues = Object.values(spanishNumbers);
console.log(`The array's values are : `, spanishNumbersValues);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');


/* Question 4
Write a code block that logs the number of properties an object has.
*/

let numOfProperties = spanishNumbersKeys.length;
console.log(`4. The array properties the object
  `, spanishNumbers, ` has is : ${numOfProperties}`)
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');


/* Question 5
Loop through the following object and log all of the directors.

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

//logs 'Alfred Hitchcock', 'Orson Welles', 'Bryan Singer'
*/

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

let directors = [];
for (let i of films){
  directors.push(i.director);
}
console.log(`The directors are : ${directors}`);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');




/* Question 6
You are given an array of objects. Each object in the array contains
exactly 2 keys “firstName” and “lastName”

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
]
a. Create an array of strings called firstNames that contains
only the values for “firstName” from each object.

b. Create an array of strings called fullNames that contains
the values for “firstName” and “lastName” from the object separated by a space.
*/

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
]

let firstNames = [];
let fullNames = [];

for (let person of people){
  firstNames.push(person.firstName);
  let fullName = person.firstName + " " + person.lastName
  fullNames.push(fullName);
}
console.log("First names : ", firstNames);
console.log("Full names : ", fullNames);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');


/* Question 7
Print the second most common letter in the string below:

var myString = "We're flooding people with information.
                We need to feed it through a processor.
                A human must turn information into intelligence or knowledge.
                We've tended to forget that no computer
                will ever ask a new question."
*/

var myString = `We're flooding people with information.
                We need to feed it through a processor.
                A human must turn information into intelligence or knowledge.
                We've tended to forget that no computer
                will ever ask a new question.`;

let lowerMyString = myString.toLowerCase();

let alph = {
   a: 0,
   b: 0,
   c: 0,
   d: 0,
   e: 0,
   f: 0,
   g: 0,
   h: 0,
   i: 0,
   j: 0,
   k: 0,
   l: 0,
   m: 0,
   n: 0,
   o: 0,
   p: 0,
   q: 0,
   r: 0,
   s: 0,
   t: 0,
   u: 0,
   v: 0,
   w: 0,
   x: 0,
   y: 0,
   z: 0
 };

//console.log(lowerMyString.length)
for (let i = 0; i < lowerMyString.length; i++){
  for (let letter in alph){
    if (lowerMyString[i] === letter){
      alph[letter] ++;
    }
  }
}
//console.log(alph);

let alphKeys = Object.keys(alph);
let alphValues = Object.values(alph);

console.log(alphValues);
let max = alphValues[0];
let secondMax = -Infinity;

for (let repet of alphValues){
  if (repet > max){
    max = repet;
  } else if (repet > secondMax){
    secondMax = repet;
  }
}
//console.log(max, secondMax)
let index = alphValues.indexOf(secondMax);
//console.log(index);
let secondMaxChar = alphKeys[index];

console.log(`The second most commun letter in the text is : ${secondMaxChar}`);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');


/* Question 8
You are given the object deposits, which maps a persons name to an array of deposits
that have been made to their account.

a) Write code to to print the name and total amount deposited of the person
who received the most money.

b) Create an array called stolenCents, iterate over deposits for each
person and steal their cents! ... like Office Space or Superman3.
Calculate the decimal part of each value, add it to the stolenCents array
and round down the value in the original object.

c) How much money did you steal?

let deposits = {
 "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
 "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
 "Davies" : [400.98, 56.98, 300.00],
 "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
 "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
}
*/

let deposits = {
 "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
 "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
 "Davies" : [400.98, 56.98, 300.00],
 "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
 "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
}
console.log(`Name and total amount deposited of the person who received the most money`)

let money = Object.values(deposits);
let names = Object.keys(deposits);
let maxAmount = 0;
let arrOfTotals =[];

//console.log(money)
for (let arr of money){
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  arrOfTotals.push(sum);
}
console.log(arrOfTotals);


for (let total of arrOfTotals){
  if (total > maxAmount){
    maxAmount = total;
  }
}

let indexOfMaxTotal = arrOfTotals.indexOf(maxAmount);
let nameOfMaxTotal = names[indexOfMaxTotal];
console.log(`${nameOfMaxTotal} deposited the largest amount of ${maxAmount}`);


console.log('Stealing the cents ');
let stolenCents = [];
let sumAllCents = 0;

for (let arr of money){
  let innerArrRounded = [];
  let innerArrCents = [];
  let sumIndividualCents = 0;

  for (let i = 0; i < arr.length; i++){
    let round = Math.floor(arr[i]);
    let cents = arr[i] - round;
    innerArrRounded.push(round);
    innerArrCents.push(cents);
    sumIndividualCents += cents;
  }
  stolenCents.push(innerArrCents);
  sumAllCents += sumIndividualCents;
}
console.log(stolenCents);
console.log(sumAllCents);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');


/* Question 9
Create an object to hold information on your favorite recipe.
It should have the following properties: name, servings, and ingredients (an array).
Create a loop that logs the recipe information, so it looks like:
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
*/

let recipe = {
  "name": "Mole",
  "servings": 2,
  "ingredients": ["cinnamon", "cumin", "cocoa"]
};

for (let rcp in recipe){
  console.log(rcp);
  console.log(recipe["name"]);
}
