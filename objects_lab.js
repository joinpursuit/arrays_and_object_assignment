//Given the cat object below:


 let cat = {
   genus: 'Felis',
   species: 'Catus',
   color: 'Brown'
}


//a. Log the species of `cat`.
console.log(cat.species);
//b. Add a new key 'color' and give it a value.
//c. Write code that logs whether or not `cat` has the property 'texture'.
cat.texture ? console.log("cat has property texture") : console.log("cat does not have property texture");

//What will the code below log?  Explain why.


let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)
//It logs false because all objects are considered different even if they have identical key values

//Given the object variable `spanishNumbers` below:


let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"}

//a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.
let arr = Object.keys(spanishNumbers);
console.log(arr);
//b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.
let array = Object.values(spanishNumbers);
console.log(array)

//Write a code block the logs the number of properties an object has.
let count = 0;
let obj = Object.keys(spanishNumbers);
for(i = 0; i < obj.length;i++){
  count++;
}
console.log(count);

//Loop through the following object and log all of the directors.


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
for(i = 0; i < films.length;i++){
  console.log(films[i].director)
}

//You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`


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

//a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.
let firstNames = [];
for(i = 0 ; i < people.length;i++){
  firstNames.push(people[i].firstName);
}
console.log(firstNames);

//b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the object separated by a space.
let fullNames = [];
for(i = 0 ; i < people.length;i++){
  fullNames.push(people[i].firstName + " " + people[i].lastName);
}
console.log(fullNames)
