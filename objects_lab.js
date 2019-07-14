/* JOSEPH P. PASAOA
*/



console.log("1. Answer questions based on the given object");
//
let cat = {
  genus: "Felis",
  species: "Catus"
}
console.log(cat.species);
cat["color"] = "yellow";
console.log(cat);
cat.texture === undefined
  ? console.log("The texture property does not exist")
  : console.log("The texture property does exist");
//
console.log("\n\n");



console.log("2. What will the code given log?  Explain why.");
//
console.log("It will log 'false' because the comparison is between qualities of two different objects: p1 and p2.");
//
console.log("\n\n");



console.log("3a. Given the object variable write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.");
console.log("3b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.");
//
let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"};
//
// KEYS CODE BLOCK
let spanishNumbersKeys = [];
for (let key in spanishNumbers) {
  spanishNumbersKeys.push(key);
}
console.log(spanishNumbersKeys);
//
// VALUES CODE BLOCK
let spanishNumbersValues = [];
for (let key in spanishNumbers) {
  spanishNumbersValues.push(spanishNumbers[key]);
}
console.log(spanishNumbersValues);
//
console.log("\n\n");



console.log("4. Write a code block the logs the number of properties an object has.");
//
let fourElementsBurn = {earth: "no", fire: "yes", wind: "no", water: "no"};
console.log(fourElementsBurn);
let arrOfProperties = [];
for (let key in fourElementsBurn) {
  arrOfProperties.push(key);
}
console.log(`The object has ${arrOfProperties.length} properties.`);
//
console.log("\n\n");



console.log("5. Loop through the given object and log all of the directors.");
//
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
//
let arrOfDirectors = [];
for (let i = 0; i < films.length; i++) {
  arrOfDirectors.push(films[i].director);
}
console.log(arrOfDirectors);
//
console.log("\n\n");



console.log('6. You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”');
console.log('a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.');
console.log('b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.');
//
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
for (let key in people) {
  firstNames.push(people[key].firstName);
  fullNames.push(`${people[key].firstName} ${people[key].lastName}`);
}
console.log(firstNames);
console.log(fullNames);
//
console.log("\n\n");



console.log("7. Print the second most common letter in the given string");
//
const myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
//
let ltrFreqs = {a:0,b:0,c:0,d:0,e:0,f:0,g:0,h:0,i:0,j:0,k:0,l:0,m:0,n:0,o:0,p:0,q:0,r:0,s:0,t:0,u:0,v:0,w:0,x:0,y:0,z:0};
let myStringLowered = myString.toLowerCase();
let largestFreqs = [];
let largestFreqsLtr = [];
for (let i in ltrFreqs) {
  for (let stringLetter of myStringLowered) {
    if (stringLetter === i) {
      ltrFreqs[i] += 1;
    }
  }
  if (ltrFreqs[i] > largestFreqs[0] || largestFreqs[0] === undefined) {
    largestFreqs.unshift(ltrFreqs[i]);
    largestFreqsLtr.unshift(i);
  } else if (ltrFreqs[i] > largestFreqs[1] && largestFreqs[1]) {
    largestFreqs.unshift(largestFreqs[0]);
    largestFreqsLtr.unshift(largestFreqsLtr[0])
    largestFreqs[1] = ltrFreqs[i];
    largestFreqsLtr[1] = i;
  }
}
// console.log(ltrFreqs); // DEBUG
// console.log(largestFreqsLtr); // DEBUG
// console.log(largestFreqs); // DEBUG
console.log(`The second most common letter is ${largestFreqsLtr[1]}.`);
//
console.log("\n\n");



console.log("8. You are given the object `deposits`, which maps a persons name to an array of deposits that have been made to their account.");
console.log('a) Write code to to print the name and total amount deposited of the person who received the most money.');
//
let deposits = {
  "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
  "Cooper" :   [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
  "Davies" :   [400.98, 56.98, 300.00],
  "Clark" :    [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
  "Johnson" :  [12.56, 300.00, 640.50, 255.60, 26.88]
}
//
let totalsDepositedRanked = [];
let whoDeposited = [];
for (let key in deposits) {
  let depositsSum = deposits[key][0];
  for (let i = 1; i < deposits[key].length; i++) {
    depositsSum += deposits[key][i];
  }
  console.log(depositsSum); // DEBUG
  if (depositsSum > totalsDepositedRanked[0] || totalsDepositedRanked[0] === undefined) {
    totalsDepositedRanked.unshift(depositsSum);
    whoDeposited.unshift(key);
  } else if (depositsSum > totalsDepositedRanked[1] && totalsDepositedRanked[1]) {
    totalsDepositedRanked.unshift(totalsDepositedRanked[0]);
    whoDeposited.unshift(whoDeposited[0]);
    totalsDepositedRanked[1] = depositsSum;
    whoDeposited[1] = key;
  }
}
// console.log(totalsDepositedRanked); // DEBUG
// console.log(whoDeposited); // DEBUG
console.log(`${whoDeposited[0]} received the most money in the total of \$${totalsDepositedRanked[0].toFixed(2)}.\n`) // WHY is addition resulting in repeating decimal places??
//

console.log('b) Create an array called `stolenCents`, iterate over deposits for each person and steal their cents! ... like Office Space or Superman 3. Calculate the decimal part of each value, add it to the `stolenCents` array and round down the value in the original object.');
//
/*
let stolenCents = [];
for (let key in deposits) {
  let partDepositsSum = 0;
  let partStolen = 0;
  for (let i = 0; i < deposits[key].length; i++) {
    // partDepositsSum += Math.floor(deposits[key]);
    // partStolen += deposits[key] - Math.floor(deposits[key]);
    console.log(deposits[key]);
  }
  console.log(partDepositsSum);
}


*/
console.log('c) How much money did you steal?');



/*
## Question 9

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```


## Question 10
* Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
* Create a code block that iterates over the array and logs whether the film was watched or not. Examples:

`You already watched "Wonder Woman" directed by Patty Jenkins`
`You still need to watch "Wonder Woman" by director Patty Jenkins. `


## Question 11

Given the following exert from the Declaration of Independence, find the most frequent word that is longer than 5 characters.

```js
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
```
*/
