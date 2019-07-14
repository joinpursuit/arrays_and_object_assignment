/*
## Question 1

Given the cat object below:

```js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
```

a. Log the species of `cat`.
b. Add a new key 'color' and give it a value.
c. Write code that logs whether or not `cat` has the property 'texture'.
*/
console.log(" #1 ");
//console.log(" ");

let cat = {
  genus: 'Felis',
  species: 'Catus'
}
//A
console.log(cat.genus);

//B
cat.color = "Black"
console.log(cat);

//C
cat.texture = ""
if ( cat.texture = 1){
  console.log("This cat does not have texture.");
}
else{
  console.log("Yes this cat has texture.");
}

/*
## Question 2

What will the code below log?  Explain why.

```js
let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)
```
*/
console.log(" ");
console.log(" #2 ");

let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)

console.log("The code will log false because, it is trying to make two object be the same. while they may have the same values, they are stored in different memory. cannot make memory location the same. ");
/*
## Question 3

Given the object variable `spanishNumbers` below:

```js
let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", :5: "cinco"}
```

a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.
*/
console.log(" ");
console.log(" #3 ");
let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"}
console.log(spanishNumbers);

let spanishKeys = Object.keys(spanishNumbers)
console.log(spanishKeys);

let spanishValues = Object.values(spanishNumbers)
console.log(spanishValues);
/*
Write a code block the logs the number of properties an object has.
*/
console.log(" ");
console.log( " #4 ");
let apple = {color: 'Yellow',
ripeness: 'ripe',
size: 'small',
qyt: 1}

console.log(apple);
let appleKeys = Object.keys(apple)
console.log("Apple has " + appleKeys.length +" properties.");

/*
## Question 5

Loop through the following object and log all of the directors.

``` js
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
console.log(" ");
console.log(" #5 ");
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

for(let i = 0; i < films.length; i++){
  console.log(films[i].director);
}
/*
## Question 6

You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`

```js
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
```
a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.
b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.
*/
console.log(" ");
console.log(" #6 ");
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
let firstNames = []
for(j = 0; j < people.length; j++){
  firstNames = people[j].firstName;
  console.log(firstNames);
}


let bothNames = []
for(k = 0; k < people.length; k++){
  bothNames = people[k].firstName + ", "+people[k].lastName;
  console.log(bothNames);
}
/*
## Question 7

Print the second most common letter in the string below:

var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
*/
// console.log(" ");
// console.log(" #7 ");
//
// var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
// // E is the most, O, is the second most common letter.
// let search = 0;
