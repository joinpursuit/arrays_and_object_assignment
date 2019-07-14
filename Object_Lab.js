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

for (let i of people){
  firstNames.push(i.firstName);
  let fullName = i.firstName + " " + i.lastName
  fullNames.push(fullName);
}
console.log("First names : ", firstNames);
console.log("Full names : ", fullNames);

console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');
