// # Object Exercises
//1
console.log('\n\n\n\n===========================================\n ## Question 1\n');
/*
console.log(`
Given the cat object below:

'''js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
'''

a. Log the species of 'cat'.
b. Add a new key 'color' and give it a value.
c. Write code that logs whether or not 'cat' has the property 'texture'.
\n\n`);
*/

let cat = {
  genus: 'Felis',
  species: 'Catus',
};

console.log(cat.species);
cat.color = `black`;
console.log(cat.color);
console.log(cat.hasOwnProperty('texture'));

//2
console.log('\n\n\n\n===========================================\n ## Question 2\n');
/*
console.log(`
What will the code below log?  Explain why.

'''js
let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)
'''
\n\n`);
*/

console.log(`false. Because its 2 different objects. For example 2 people can have the same name
  and birthday but still be two different people. 2 car can be exact model but they are still
  2 different cars.`);

//3
console.log('\n\n\n\n===========================================\n ## Question 3\n');
/*
console.log(`Given the object variable 'spanishNumbers' below:

'''js
let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", :5: "cinco"}
'''

a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.
\n\n`);
*/

let spanishNumbers = { 1: 'uno', 2: 'dos', 3: 'tres', 4: 'quatro', 5: 'cinco' };

function objKeys(obj) {
  let objKeys = [];
  for (let key in obj) objKeys.push(key);
  return objKeys;
}

console.log(objKeys(spanishNumbers));

function objValues(obj) {
  let objValue = [];
  for (let val in obj) objValue.push(obj[val]);
  return objValue;
}

console.log(objValues(spanishNumbers));

//4
console.log('\n\n\n\n===========================================\n ## Question 4\n');
/*
console.log(`Write a code block the logs the number of properties an object has.
\n\n`);
*/

console.log(Object.keys(spanishNumbers).length);

//5
console.log('\n\n\n\n===========================================\n ## Question 5\n');
/*
console.log(`Loop through the following object and log all of the directors.

''' js
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
'''
\n\n`);
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
for (let i in films) {
  directors.push(films[i].director);
}
console.log(directors);

//6
console.log('\n\n\n\n===========================================\n ## Question 6\n');
/*
console.log(`You are given an array of objects. Each object in the array contains exactly 2 keys '“firstName”' and '“lastName”'

'''js
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
'''
a. Create an array of strings called 'firstNames' that contains only the values for '“firstName”' from each object.
b. Create an array of strings called 'fullNames' that contains the values for '“firstName”' and '“lastName”' from the object separated by a space.
\n\n`);
*/

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
];

let firstNames = [];
let fullNames = [];
for (i of people) {
  firstNames.push(i.firstName);
  fullNames.push(i.firstName + ` ` + i.lastName);
}

console.log(firstNames);
console.log(fullNames);

//7
console.log('\n\n\n\n===========================================\n ## Question 7\n');
/*
console.log(`Print the second most common letter in the string below:
\n\n`);
*/

var myString = `We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question.`

function noDupeList(ar) {
  let noDuplicates = [];
  for (let i of ar) !(noDuplicates.includes(i)) ? noDuplicates.push(i) : null;
  return noDuplicates;
}

function ithLargestNumb(ar, i = 1) {
  let ar1 = noDupeList(ar).sort(function (a, b) {return b - a;});
  return ar1[i - 1];
}

function ithMostCommonLetter(str, x = 1) {
  let strObj = {};
  for (let i = 0; i < str.length; i++) {
    str[i] !== ` ` && str[i] !== `'` && str[i] !== `.` ?
      strObj[str[i].toUpperCase()] === undefined ?
        strObj[str[i].toUpperCase()] = 1 : strObj[str[i].toUpperCase()] += 1 :
      null;
  }


  return objKeys(strObj)[objValues(strObj).indexOf(ithLargestNumb(objValues(strObj), x))];
}

console.log(ithMostCommonLetter(myString)); // most common
console.log(ithMostCommonLetter(myString, 2)); // 2nd most common

//8
console.log('\n\n\n\n===========================================\n ## Question 8\n');
/*
console.log(`You are given the object 'deposits', which maps a persons name to an array of deposits that have been made to their account.

a) Write code to to print the name and total amount deposited of the person who received the most money.

b) Create an array called 'stolenCents', iterate over deposits for each person and steal their cents! ... like Office Space or Superman 3. Calculate the decimal part of each value, add it to the 'stolenCents' array and round down the value in the original object.

c) How much money did you steal?

'''js
let deposits = {
 "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
 "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
 "Davies" : [400.98, 56.98, 300.00],
 "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
 "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
}
'''
\n\n`);
*/

let deposits = {
 Williams : [300.65, 270.45, 24.70, 52.00, 99.99],
 Cooper :   [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
 Davies :   [400.98, 56.98, 300.00],
 Clark :    [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
 Johnson :  [12.56, 300.00, 640.50, 255.60, 26.88]
}

function sumArray(ar) {
  let sum = 0;
  for (let i of ar) sum += i;
  return sum;
}

function ithMostMoney(ar, i = 1){
  let sA = [];
  for (let i of objValues(ar)) sA.push(sumArray(i));
  return objKeys(ar)[sA.indexOf(ithLargestNumb(sA, i))] + ` $` + ithLargestNumb(sA, i);
}

//a
console.log(ithMostMoney(deposits));
console.log(ithMostMoney(deposits, 2));

function stolenCents(obj) {
  let stolenCents = [];
  for (let i in obj) {
    let keyValue = obj[i];
    for (let j in keyValue) {
      stolenCents.push(Math.round(100 * (keyValue[j] % 1)) / 100);
      keyValue[j] -= (Math.round(100 * (keyValue[j] % 1)) / 100);
    }
    obj[i] = keyValue;
  }

  return stolenCents;
}

//b
console.log(deposits);
console.log(stolenCents(deposits));

//c
console.log(sumArray(stolenCents(deposits)));

//9
console.log('\n\n\n\n===========================================\n ## Question 9\n');
/*
console.log(`* Create an object to hold information on your favorite recipe. It should have the following properties: 'name', 'servings', and 'ingredients' (an array).
* Create a loop that logs the recipe information, so it looks like:

'''javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
'''
\n\n`);
*/

let favoriteRecipe = {};
favoriteRecipe.name = `Mole`;
favoriteRecipe.servings = 2;
favoriteRecipe.ingredients = [`cinnamon`, ` cumin`, ` cocoa`];

for (let i in favoriteRecipe) console.log(`${i}: ${favoriteRecipe[i]}`);

//10
console.log('\n\n\n\n===========================================\n ## Question 10\n');
/*
console.log(`* Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
* Create a code block that iterates over the array and logs whether the film was watched or not. Examples:

'You already watched "Wonder Woman" directed by Patty Jenkins'
'You still need to watch "Wonder Woman" by director Patty Jenkins. '
\n\n`);
*/

films = [
  {
   title: 'Psycho',
   director: 'Alfred Hitchcock',
   watched: false,
  }, {
   title: 'Citizen Kane',
   director: 'Orson Welles',
   watched: false,
  }, {
   title: 'The Usual Suspects',
   director: 'Bryan Singer',
   watched: true,
  }
]

for (let i in films) {
  //console.log(films[i].watched);
  films[i].watched ?
    console.log(`You already watched ${films[i].title} directed by ${films[i].director}.`) :
    console.log(`You still need to watch ${films[i].title} by director ${films[i].director}. `);
}

//11
console.log('\n\n\n\n===========================================\n ## Question 11\n');
/*
console.log(`
Given the following exert from the Declaration of Independence, find the most frequent word that is longer than 5 characters.

'''js
const declarationOfIndependence = '
When in the Course of human events, it becomes necessary for one people to dissolve the
political bands which have connected them with another, and to assume among the powers of the
earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle
them, a decent respect to the opinions of mankind requires that they should declare the causes
which impel them to the separation.

We hold these truths to be self-evident, that all men are created equal, that they are endowed by
their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit
of Happiness. That to secure these rights, Governments are instituted among Men, deriving
their just powers from the consent of the governed, That whenever any Form of Government
becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to
institute new Government, laying its foundation on such principles and organizing its powers in
such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence,
indeed, will dictate that Governments long established should not be changed for light and
transient causes; and accordingly all experience hath shewn, that mankind are more disposed to
suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they
are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same
Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty,
to throw off such Government, and to provide new Guards for their future security. Such has
been the patient sufferance of these Colonies; and such is now the necessity which constrains
them to alter their former Systems of Government. The history of the present King of Great
Britain is a history of repeated injuries and usurpations, all having in direct object the
establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a
candid world.
'
'''
\n\n`);
*/

const declarationOfIndependence = `
When in the Course of human events, it becomes necessary for one people to dissolve the
political bands which have connected them with another, and to assume among the powers of the
earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle
them, a decent respect to the opinions of mankind requires that they should declare the causes
which impel them to the separation.

We hold these truths to be self-evident, that all men are created equal, that they are endowed by
their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit
of Happiness. That to secure these rights, Governments are instituted among Men, deriving
their just powers from the consent of the governed, That whenever any Form of Government
becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to
institute new Government, laying its foundation on such principles and organizing its powers in
such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence,
indeed, will dictate that Governments long established should not be changed for light and
transient causes; and accordingly all experience hath shewn, that mankind are more disposed to
suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they
are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same
Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty,
to throw off such Government, and to provide new Guards for their future security. Such has
been the patient sufferance of these Colonies; and such is now the necessity which constrains
them to alter their former Systems of Government. The history of the present King of Great
Britain is a history of repeated injuries and usurpations, all having in direct object the
establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a
candid world.
`

function ithMostCommonWord(str, x = 1) {
  str = str.toLowerCase();
  str = str.split(` `).join(`\n`).split(`\n`).join(`.`).split(`.`).join(`,`).split(`,`).join(`;`).split(`;`).join(` `);
  let strObj = {};
  let strArr = str.split(` `);
  for (let i = 0; i < strArr.length; i++) {
    let wrd = strArr[i];
    wrd.length > 5 ?
      strObj[strArr[i]] === undefined ? strObj[strArr[i]] = 1 : strObj[strArr[i]] += 1 :
      null;
  }

  return objKeys(strObj)[objValues(strObj).indexOf(ithLargestNumb(objValues(strObj), x))];
}

console.log(ithMostCommonWord(declarationOfIndependence));
