// # Object Exercises
//
console.log(`\nquestion #1`);
//
// Given the cat object below:

 let cat = {
   genus: 'Felis',
   species: 'Catus',

}

// a. Log the species of `cat`.
console.log(cat.species);
// b. Add a new key 'color' and give it a value.
cat.color ='black'
// c. Write code that logs whether or not `cat` has the property 'texture'.
if ( cat.hasOwnProperty(cat.texture) ) {
    console.log(true);
} else {
    console.log(false);
}

console.log(`\nquestion #2`);
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
console.log("The code will log 'Joe' ")// wrong int will return false

console.log(`\nQuestion #3`);
//
// Given the object variable `spanishNumbers` below:
//

let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco",}

let spanishNumbersKeys =[];
// a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
for (let key in spanishNumbers){
    spanishNumbersKeys.push(key)
}console.log(spanishNumbersKeys);
// b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.

let spanishNumbersValues = [];
for (let key in spanishNumbers){
    spanishNumbersValues.push(spanishNumbers[key])
}console.log(spanishNumbersValues);
/*
for (ley keyin spanishNumbers){
  spanishNumbersKeys.push(key)
  spanishNumbersValues.push(spanishNumbers[key])
}
*/
console.log(`question #4`);
//
// Write a code block the logs the number of properties an object has.
let spainArray = []
let spain = Object.keys(spanishNumbers);
//console.log(spanishNumbers);
console.log(spain.length);
for (let key in spanishNumbers){
    spainArray.push(key)
} console.log(spainArray.length);


console.log(`Question #5`);
//
// Loop through the following object and log all of the directors.
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
//logs 'Alfred Hitchcock', 'Orson Welles', 'Bryan Singer'
for (i = 0; i< films.length; i++){
    console.log(films[i].director);
}
console.log('---------')

console.log(`\n# Question 6`);
//
// You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`
//
// ```js
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
// ```
// a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.
let firstNames =[]
for (i =0; i < people.length; i++){
  firstNames.push(people[i].firstName);

}console.log(firstNames);
console.log('----------')
// b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.
let fullNames =[];
for (i =0; i < people.length; i++){
  fullNames.push(people[i].firstName +' '+ people[i].lastName);

}console.log(fullNames);

console.log(`\nQuestion #7`);
// Print the second most common letter in the string below:
let obj2 ={}
//iterating over the string. To get individual character
//check  current character to see if it is a key in obj2
// -> if it is not then
//      ->create the key
//     -> and set the value to one. Meaning we have seen the currChar
 var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
// set for loop to loop through the string to check and push character into object
myString =myString.toLowerCase();

for (let i = 0; i< myString.length; i++){
  let currChar = myString[i];
  //console.log(currChar);
  if (currChar !== ' ' && currChar !=='.' && currChar !== "'"){
    if (obj2[currChar] === undefined){
        obj2[currChar] = 1
  } else {
    obj2[currChar]++
  }
}
} console.log(obj2);
/*
code to find the second most common letter in the object and finds the second most common
let mostCommon;
let mostCommonCount = 0;
for (let letter in obj2){
    if (obj2[letter] > mostCommonCount){
      mostCommonCount = obj2[letter];
      mostCommon = letter;
    }
*/

//full code to find the second most commmon character
let mostCommon;
let mostCommonCount = 0;

let secondMost;
let secondMostCount =0;
for (let letter in obj2){
    if (obj2[letter] > mostCommonCount){
      mostCommonCount = obj2[letter];
      mostCommon = letter;

    } else if(obj2[letter] > secondMostCount){
      secondMostCount = obj2[letter]
      secondMost = letter
    }
}
console.log(`The most common character is: ${mostCommon} with a count of ${mostCommonCount}`);
console.log(`The second most common character is ${secondMost} withg a count of ${secondMostCount} `);
/*
alternate still working on
let mostComm;
let mostCommCount = 0;

let secMostComm;
let secMostCommCount = 0;
for (let char in obj) {
  if (obj[char] > mostCommCount) {
    secMostCommCount = mostCommCount
    secMostComm = mostComm

    mostComm = char
    mostCommCount = obj[char]
  } else if (obj[char] > secMostCommCount) {
    //secMostCommCount < mostCommCount) {
    console.log(`${mostComm}: ${mostCommCount} | ${secMostComm}: ${secMostCommCount} `)

    secMostCommCount = obj[char];
    secMostComm = char

    console.log(`=> ${mostComm}: ${mostCommCount} | ${secMostComm}: ${secMostCommCount} `)
  }
}
*/

// let str = myString.split('');
// let arr= [];
// arr.push(str)
// console.log(arr)
// function findDupes (str){
//   let arr =[];

//   str.forEach(function(elem))
// }
console.log(`\nQuestion #8`);
let deposits = {
 "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
 "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
 "Davies" : [400.98, 56.98, 300.00,],
 "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70,],
 "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
}

// You are given the object `deposits`, which maps a persons name to an array of deposits that have been made to their account.
//
// a) Write code to to print the name and total amount deposited of the person who received the most money.
// let max =0
// let maxPerson = ''
// let total=0;
function depoSum (inArr) {
  let total =0;
for (let key in deposits){
  for( let i =0; i < deposits[key].length; i++){
        total += deposits[key][i]

  }
 }
 return total
}
//console.log(depoSum(deposits));

function depObj(array) {
  let depoArr = [];
  for (let key in deposits){

  }
}



// b) Create an array called `stolenCents`, iterate over deposits for each person and steal their cents! ... like Office Space or Superman 3. Calculate the decimal part of each value, add it to the `stolenCents` array and round down the value in the original object.
function steal(stealObj) {
  let cents =[];
  // let decimal=(deposits[key][i]- Math.floor(deposits[key][i])).toFixed(2);
  for (let key in deposits){
    for( let i =0; i < deposits[key].length; i++) {
      let decimal=(deposits[key][i]- Math.floor(deposits[key][i])).toFixed(2);
          //let flr = Math.floor(deposits[key][i]);
          cents.push(Number(decimal))
          deposits[key]-= (deposits[key][i]- Math.floor(deposits[key][i])).toFixed(2);
    }

  }
   return cents;
}
 console.log(steal(deposits));


 // console.log(cents);
//c) How much money did you steal?


//
console.log(`\n# Question 9`);
//
// * Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
// * Create a loop that logs the recipe information, so it looks like:
//
// ```javascript
// name: Mole
// servings: 2
// ingredients: cinnamon, cumin, cocoa
// ```
let favRecipe = {
        name: 'Jerk Chicken',
        servings:  2,
        ingredients:['green onions', 'garlic', 'jalapeño', 'extra-virgin olive oil' , 'brown sugar', 'ground allspice', 'cinnamon', 'bone-in chicken drumsticks and thighs'],
      }

for (let jerk in favRecipe){
      console.log(`${jerk} : ${favRecipe[jerk]}`);
}


console.log(`\n# Question 10`);
// * Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
// * Create a code block that iterates over the array and logs whether the film was watched or not. Examples:
//
// `You already watched "Wonder Woman" directed by Patty Jenkins`
// `You still need to watch "Wonder Woman" by director Patty Jenkins. `
let cinema = [
    {
      title: 'Spider-man: Into the Spiderverse',
      director: ' Peter Ramsey, Bob Persichetti, Rodney Rothman',
      watched:true
    },
    {
      title: 'John wick: 3',
      director: 'Chad Stahelski',
      watched: false
    },
    {
      title: 'Us',
      director:'Jordan Peele',
      watched: true
    },
]
for (let i=0; i< cinema.length; i++){
    if (cinema[i].watched === true){
      console.log(`You already watched ${cinema[i].title} directed by ${cinema[i].director}`);
    } else {
      console.log(`You still need to watch ${cinema[i].title} directed by ${cinema[i].director}`);
    }
}


console.log(`\nQuestion # Question 11`);
//
// Given the following exert from the Declaration of Independence, find the most frequent word that is longer than 5 characters.
//
// ```js
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

// ```
let art = declarationOfIndependence.split(' ');


function myFilter(filArr,callback) {
  let arrResult =[];
  for (let i = 0; i <filArr.length; i++){
    if (callback(filArr[i])){
      arrResult.push(filArr[i])
    }
  }
  return arrResult;
}
 //console.log( myFilter(art, num => num.length > 5));



 function mostWord (array){
   let objDec ={};
   let mostFrequentWord;
   let counter =0;
    for(let i = 0; i < array.length; i++){
        let word = array[i];
        if(objDec[word] === undefined){
            objDec[word] = 1;
        }else{
            objDec[word] +=1;
        }
        if(objDec[word] > counter){
              counter = objDec[word];
              mostFrequentWord = array[i];
        }
     }
   return mostFrequentWord;
 }

console.log(mostWord(myFilter(art, num => num.length > 5)));
