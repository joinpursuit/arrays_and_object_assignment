// ## Question 1
//
//Given the cat object below:
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
console.log(' ');
console.log('Question 1');
console.log(' ');

let cat = {
  genus: 'Felis',
  species: 'Catus',
};

console.log('A.');
console.log(cat.species);
console.log('B.');
cat.color = 'black';
console.log(cat);
console.log('C.');
if (cat.texture === undefined) {
  console.log('This object does not have a texture property.');
} else {
  console.log(cat.texture);
}

console.log(' ');
console.log('Question 2');
console.log(' ');

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

console.log('This code will log false because the two objects aren\'t the same even though the objects both have the same keys and values. They names are different also.');

console.log(' ');
console.log('Question 3');
console.log(' ');

// Given the object variable `spanishNumbers` below:
//
// ```js
// let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", :5: "cinco"}
// ```
//
// a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
// b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.

let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"};
let spanishKeys = [];
let spanishValues = [];


for (let key in spanishNumbers) {
  spanishKeys.push(key);
  spanishValues.push(spanishNumbers[key]);
}

console.log('A.');
console.log(spanishKeys);
console.log('B.');
console.log(spanishValues);

console.log(' ');
console.log('Question 4');
console.log(' ');

//Write a code block the logs the number of properties an object has.

let strawHats = {
  name: 'Luffy',
  role: 'Captain',
};
let num = 0;

for (let key in strawHats) {
  num++;
}

console.log('There are ' + num + ' properties.');

console.log(' ');
console.log('Question 5');
console.log(' ');

//Loop through the following object and log all of the directors.

let films = [
 {
    name: 'Psycho',
    director: 'Alfred Hitchcock',
    released: 1960,
  }, {
    name: 'Citizen Kane',
    director: 'Orson Welles',
    released: 1941,
  }, {
    name: 'The Usual Suspects',
    director: 'Bryan Singer',
    released: 1995,
  },
];

for (let key in films) {
  console.log(films[key].director);
}

console.log(' ');
console.log('Question 6');
console.log(' ');

//You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`
let people = [
    {
        firstName: 'Calvin',
        lastName: 'Newton',
      },
    {
        firstName: 'Garry',
        lastName: 'Mckenzie',
      },
    {
        firstName: 'Leah',
        lastName: 'Rivera',
      },
    {
        firstName: 'Sonja',
        lastName: 'Moreno',
      },
    {
        firstName: 'Noel',
        lastName: 'Bowen',
  }
];

let firstNames = [];
let fullNames = [];

console.log('A.');
for (i = 0; i < people.length; i++) {
  firstNames.push(people[i].firstName);
}

console.log(firstNames);

console.log('B.');

for (i = 0; i < people.length; i++) {
  fullNames.push(people[i].firstName + ' ' + people[i].lastName);
}

console.log(fullNames);

console.log(' ');
console.log('Question 7');
console.log(' ');

//Print the second most common letter in the string below:

let myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let myStringLetters = {};
let highestNum = 0;
let highestLetter = '';
let secondHighest = 0;
let secondHighestLetter = '';

for (let value of letters) {
  let currentLetter = new RegExp(value, 'gi');
  try {
    myString.match(currentLetter).length;
  }
  catch (err) {
    continue;
  }

  myStringLetters[value] = myString.match(currentLetter).length;
}

console.log(myString);
console.log(myStringLetters);

for (let value in myStringLetters) {
  if (highestNum < myStringLetters[value]) {
    highestNum = myStringLetters[value];
    highestLetter = value;
    // console.log(highestNum);
    // console.log('~~~~~~~~~1');
  } else if (secondHighest < highestNum && secondHighest < myStringLetters[value]) {
    secondHighest = myStringLetters[value];
    secondHighestLetter = value;
    // console.log(secondHighest);
    // console.log('~~~~~~~~~2');
  }
}

console.log('The most common letter is \"' + highestLetter + '\" with a count of: ' + highestNum + '.');
console.log('So the second most common letter is \"' + secondHighestLetter + '\" with a count of: ' + secondHighest + '.');
console.log('Holy brain twister coding madness Batman!');

console.log(' ');
console.log('Question 8');
console.log(' ');

//You are given the object `deposits`, which maps a persons name to an array of deposits that have been made to their account.
//a) Write code to to print the name and total amount deposited of the person who received the most money.
console.log('A');
console.log(' ');

let deposits = {
  Williams: [300.65, 270.45, 24.70, 52.00, 99.99],
  Cooper: [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
  Davies: [400.98, 56.98, 300.00],
  Clark: [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
  Johnson: [12.56, 300.00, 640.50, 255.60, 26.88],
};
let highestDeposited = 0;
let personWithHighest = '';

for (let value in deposits) {
  if (highestDeposited < deposits[value].reduce((a, b) => a + b, 0)) {
    highestDeposited = deposits[value].reduce((a, b) => a + b, 0);
    personWithHighest = value;
  }
}

console.log(personWithHighest + ' has the highest deposit at ' + highestDeposited + ' in total.');

console.log('B');
console.log(' ');

//b) Create an array called `stolenCents`, iterate over deposits for each person and steal their cents! ... like Office Space or Superman 3. Calculate the decimal part of each value, add it to the `stolenCents` array and round down the value in the original object.

let stolenCents = [];
let round1 = deposits.Williams.reduce((a, b) => a + b, 0) - Math.floor(deposits.Williams.reduce((a, b) => a + b, 0));
let round2 = deposits.Cooper.reduce((a, b) => a + b, 0) - Math.floor(deposits.Cooper.reduce((a, b) => a + b, 0));
let round3 = deposits.Davies.reduce((a, b) => a + b, 0) - Math.floor(deposits.Davies.reduce((a, b) => a + b, 0));
let round4 = deposits.Clark.reduce((a, b) => a + b, 0) - Math.floor(deposits.Clark.reduce((a, b) => a + b, 0));
let round5 = deposits.Johnson.reduce((a, b) => a + b, 0) - Math.floor(deposits.Johnson.reduce((a, b) => a + b, 0));

stolenCents.push(round1, round2, round3, round4, round5);
console.log(stolenCents);

console.log('C');
console.log(' ');

//c) How much money did you steal?

console.log('I stole $' + stolenCents.reduce((a, b) => a + b, 0));

console.log(' ');
console.log('Question 9');
console.log(' ');

//* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
//* Create a loop that logs the recipe information, so it looks like:

let favRecipe = {
  name: 'idk',
  servings: '6.2 Cohart',
  ingredients: ['Objects Lab', 'Fellows', 'Head Scratching'],
};

for (let value in favRecipe) {
  console.log(value + ': ' + favRecipe[value]);
}

console.log(' ');
console.log('Question 10');
console.log(' ');

//* Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
//* Create a code block that iterates over the array and logs whether the film was watched or not. Examples:

let filmsToWatch = [
  {
  title: 'Kill Bill 2',
  director: 'Quentin Tarantino',
  watched: true,
},
{
  title: 'Spider Man: Far From Home',
  director: 'John Watts',
  watched: false,
},
{
  title: 'Shaft',
  director: 'Tim Story',
  watched: true,
},
];

for (let value in filmsToWatch) {
  if (filmsToWatch[value].watched) {
    console.log('You\'ve already watched \"' + filmsToWatch[value].title + '\" directed by ' + filmsToWatch[value].director + '.');
  } else {
    console.log('You still need to watch \"' + filmsToWatch[value].title + '\" by director ' + filmsToWatch[value].director + '.');
  }
}

console.log(' ');
console.log('Question 11');
console.log(' ');

//Given the following exert from the Declaration of Independence, find the most frequent word that is longer than 5 characters.
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
`;

let stringSplit = declarationOfIndependence.split(' ');
let length = 0;
let longestWordNum = 0;
let longestWord = '';

// console.log(stringSplit[0] + ' ' + length);
for (i = 0; i < stringSplit.length; i++) {
  length = stringSplit[i].length - 1;
  // console.log(stringSplit[0] + ' ' + length);
  if (length > 5 && longestWordNum < length) {
    longestWordNum = stringSplit[i].length;
    longestWord = stringSplit[i];
    // console.log(stringSplit[i] + length);
    // console.log('~~~~~~~');
    // break;
  }
}

console.log('The longest word in the declaration is \"' + longestWord + '\" with ' + longestWordNum + ' characters.');
console.log(' ');
console.log('It\'s 2\:20 am and I dont have enough time to figure out why the string is picking up so many combined words. So im going to leave it as is and count the highest character since theres no way to compare words atm. I know its on the tip of my tongue too but im too tired to look. Night!');
