// # Object Exercises
//
// ## Question 1
console.log("#1 --------------------------");
//
// Given the cat object below:
//
// ```js
let cat = {
   genus: 'Felis',
   species: 'Catus'
};

console.log(cat.species);

cat.color = "calico";
console.log(cat);

console.log(cat.texture);
let catTexture = cat.texture;
console.log(catTexture === undefined)

// a. Log the species of `cat`.
// b. Add a new key 'color' and give it a value.
// c. Write code that logs whether or not `cat` has the property 'texture'.
//

console.log(" ");

// ## Question 2
console.log("#2 --------------------------");
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

// NOTE: This answer was made without running the code first
let answer1 = "This will console.log 'false' becasue objects ONLY === themselves. Despite the fact that both objects contain the same keys and the values for those strings.";

// NOTE2: Checked the code, and I was right!

console.log(" ");

// ## Question 3
console.log("#3 --------------------------");

// Given the object variable `spanishNumbers` below:
//
// ```js
let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"}
// ```
//
let spanNumKeys = []
for(let keys in spanishNumbers) {
  spanNumKeys.push(keys)
}
console.log(spanNumKeys)

let spanNumValues = []
for(let values in spanishNumbers) {
  spanNumValues.push(spanishNumbers[values])
}
console.log(spanNumValues)

console.log(" ")
// a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
// b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.
//
//
// ## Question 4
console.log("#4 --------------------------");

let apple = {
  type: "gala",
  color: "red",
  size: "small",
  tastiness: "pretty good"
}
let applePropArr = []
for(let keys in apple) {
  applePropArr.push(keys)
}
console.log(applePropArr)
let applePropAmount = 0
for(let i = 0; i < applePropArr.length; i++) {
  applePropAmount++
}
console.log(applePropAmount);

// ALEJO EDIT: this can also be accomplished by simply console.log(applePropArr.length)

// Write a code block the logs the number of properties an object has.

console.log(" ")


// ## Question 5
console.log("#5 --------------------------");



// Loop through the following object and log all of the directors.
//
// ``` js
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

for(let i = 0; i < films.length; i++) {
  console.log(films[i].director)
}
//

console.log(" ");
// //logs 'Alfred Hitchcock', 'Orson Welles', 'Bryan Singer'
// ```
//
//
// ## Question 6
console.log("#6 --------------------------");

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
let allFirstNames = []
for(let i = 0; i < people.length; i++) {
  allFirstNames.push(people[i].firstName)
}

console.log(allFirstNames)

let fullNames = []
for(let i = 0; i < people.length; i++) {
  fullNames.push(people[i].firstName + " " + people[i].lastname)
}

console.log(fullNames)

// a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.
// b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.
//
console.log(" ");
//
// ## Question 7
console.log("#7 --------------------------");
//
// Print the second most common letter in the string below:
var string  = "355385",
    counter = {};

for (var i = 0, len = string.length; i < len; i += 1) {
    counter[string[i]] = (counter[string[i]] || 0) + 1;
}

var biggest = -1, number;
for (var key in counter) {
    if (counter[key] > biggest) {
        biggest = counter[key];
        number = key;
    }
}

console.log(number)

//
var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
let counter2 = {};

for (let i = 0, size = myString.length; i < size; i++) {
  counter2[myString[i]] = (counter2[myString[i]] || 0) + 1;
}

let biggest2 = -1, number2;
for (let key in counter2) {
  if (counter2[key] > biggest2) {
    biggest2 = counter2[key];
    number2 = key;
  }
}

console.log(key)
//
// NOTE The code above is copy/pasted from the stackoverflow answer for how to
// find the most frequent character in a string, followed my attempt to at least get
// some of that to work in context to our given string. While it doesn't
// break, it's nowhere close to the answer we need. Below you'll see some of my
// attempts to split the string into an array of single characters, and then sort
// that string into alphabetic order, to make verifying the final answer easier
// for myself outside of my code. But I couldn't figure out how to log each character
// without building variables for all 26 alphabetic characters twice - for both capital
// letters and lower case - and accounting for spaces and puctuation in the sentences.
// It's now past 11, and I'm out of time to work on this lab. I'm sending this now,
// and if I have time in the morning, I'll try to work some more on it, and save
// my work to the repoisitory.
//
// Given the complexity of the questions, and my failure to complete all 11 questions,
// I'm really beginning to worry that I'm falling behind. I feel like the basics are
// starting to slip away, and it leaves me stuck in questions like these,
// where I should be able to recall my library of learned skills to break
// apart the logic needed to find their solution - but I find myself getting stuck
// more and more often. I grasp our lectures, and various components they convey,
// but I'm having more and more trouble using those lessons constructively in
// our labwork.

//
// let stringObj = {myString}
// console.log(stringObj)
// console.log(myString.length)





// let splitter = [];
//
// for(let i = 0; i < myString.length; i++) {
//   splitter.push(myString[i])
// }
//
// splitter.sort()
// console.log(splitter)




// let max = -1;  // Initialize max count
// let result = " ";   // Initialize result
//
// let count = [];
//
//         // Construct character count array from the input
//         // string.
//         let len = splitter.length;
//         for (let i = 0; i < len; i++)
//             count[splitter.charAt(i)]++;
//         // Traversing through the string and maintaining
//         // the count of each character
//         for (let i = 0; i < len; i++) {
//             if (max < count[splitter.charAt(i)]) {
//                 max = count[splitter.charAt(i)];
//                 result = splitter.charAt(i);
//             }
//         }
//
//         return result;


// let counter = 0
// for(let i = 0; i < splitter.length; i++) {
//   if (i === " ") {
//
//   } else if (i === "'") {
//   } else if (i)
// }

// ## Question 8
console.log("#8 --------------------------");
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
//
// ## Question 9
//
console.log("#9 --------------------------");
// * Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
// * Create a loop that logs the recipe information, so it looks like:
//
// ```javascript
// name: Mole
// servings: 2
// ingredients: cinnamon, cumin, cocoa
// ```

let recipe = {
  name: "Tomato Sauce",
  servings: 4,
  ingredients: ["white onion", "garlic", "2 cans San Marzano tomatoes", "tomato paste", "oregano", "red pepper flakes", "butter", "olive oil", "salt", "pepper"]
}

console.log(recipe.ingredients)

for (let key in recipe) {
  console.log()
}

//
//
// ## Question 10
// * Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
// * Create a code block that iterates over the array and logs whether the film was watched or not. Examples:
//
// `You already watched "Wonder Woman" directed by Patty Jenkins`
// `You still need to watch "Wonder Woman" by director Patty Jenkins. `
//
//
// ## Question 11
//
// Given the following exert from the Declaration of Independence, find the most frequent word that is longer than 5 characters.
//
// ```js
// const declarationOfIndependence = `
// When in the Course of human events, it becomes necessary for one people to dissolve the
// political bands which have connected them with another, and to assume among the powers of the
// earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle
// them, a decent respect to the opinions of mankind requires that they should declare the causes
// which impel them to the separation.
//
// We hold these truths to be self-evident, that all men are created equal, that they are endowed by
// their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit
// of Happiness. That to secure these rights, Governments are instituted among Men, deriving
// their just powers from the consent of the governed, That whenever any Form of Government
// becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to
// institute new Government, laying its foundation on such principles and organizing its powers in
// such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence,
// indeed, will dictate that Governments long established should not be changed for light and
// transient causes; and accordingly all experience hath shewn, that mankind are more disposed to
// suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they
// are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same
// Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty,
// to throw off such Government, and to provide new Guards for their future security. Such has
// been the patient sufferance of these Colonies; and such is now the necessity which constrains
// them to alter their former Systems of Government. The history of the present King of Great
// Britain is a history of repeated injuries and usurpations, all having in direct object the
// establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a
// candid world.
// `
// ```
