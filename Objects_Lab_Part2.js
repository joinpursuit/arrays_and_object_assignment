/* QUESTION 8
You are given the object deposits, which maps a persons name to an array
of deposits that have been made to their account.

a) Write code to to print the name and total amount deposited of the person
who received the most money.

b) Create an array called stolenCents, iterate over deposits for each
person and steal their cents! ... like Office Space or Superman 3.
Calculate the decimal part of each value, add it to the stolenCents array
and round down the value in the original object.

c) How much money did you steal?
*/

let deposits = {
 "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
 "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
 "Davies" : [400.98, 56.98, 300.00],
 "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
 "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
}

function totalArray(arr){
  let total = 0;

  for (let i = 0; i < arr.length; i++){
    total += arr[i];
  };
  return total;
};

function roundedArray(arr){
  let roundedArr = [];

  for (let i = 0; i < arr.length; i++){
    roundedArr[i] = Math.floor(arr[i]);
  };
  return roundedArr;
};

function diffTwoArrays(arr1, arr2){
  let diffArray = [];
  if (arr1.length !== arr2.length){
    console.log("The two arrays are of a different length");
  } else {
    for (let i = 0; i < arr1.length; i++){
      diffArray[i] = arr1[i] - arr2[i];
    };
  };
  return diffArray;
};


console.log("8.a. Total deposits :");
for (let person in deposits){
  let money = deposits[person];
  let total = totalArray(money);
  console.log(person, " has deposited a total of : $", total);
};

console.log("\n8.b. Rounded deposits history :");
let stolenCents = [];
for (let person in deposits){
  let money = deposits[person];
  deposits[person] = roundedArray(money);
  let diff = diffTwoArrays(money, deposits[person]);
  stolenCents.push(diff);
};
console.log(deposits);
//console.log(stolenCents);

console.log("\n8.c. Total money stolen :");
for (let i = 0; i < stolenCents.length; i++){
  stolenCents[i] = totalArray(stolenCents[i]);
};
let totalMoneyStolen = totalArray(stolenCents);
console.log("$ ", totalMoneyStolen);
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');


/* QUESTION 9
Create an object to hold information on your favorite recipe. It should have the following properties: name, servings, and ingredients (an array).
Create a loop that logs the recipe information, so it looks like:
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa

*/
let favRecipe = {
  name: 'Mole',
  servings: 2,
  ingredients: ['cinnamon', 'cumin', 'cocoa']
};

console.log('10. My favorite recipe is :')
for (let line in favRecipe){
  console.log(`${line}: ${favRecipe[line]}`);
}
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');


/* QUESTION 10
Create an array of films, where each film has the following properties:
title, director, and a boolean indicating if you started watching it.

Create a code block that iterates over the array and logs whether the film
was watched or not.

Examples:
You already watched "Wonder Woman"
directed by Patty Jenkins

You still need to watch "Wonder Woman"
by director Patty Jenkins.
*/
console.log("10. Movies :");

let films =[
  { title: 'Movie1',
    director: 'Name1',
    watched: true },
  { title: 'Movie2',
    director: 'Name2',
    watched: false },
  { title: 'Movie3',
    director: 'Name3',
    watched: false },
  { title: 'Movie4',
    director: 'Name4',
    watched: true },
  { title: 'Movie5',
    director: 'Name5',
    watched: true }
  ]

  console.log(films);
  //console.log(films[3]['watched']);

  for (let i = 0; i < films.length; i++){
    if (films[i]['watched']){
      console.log(`You already watched "${films[i]['title']}" directed by ${films[i]['director']}`);
    } else {
      console.log(`You still need to watch "${films[i]['title']}" directed by ${films[i]['director']}`)
    }
  }
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n\n');
