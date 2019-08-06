

let cat = {
    genus: 'Felis',
    species: 'Catus'
}



// a.Log the species of`cat`.

console.log(cat.species);

// b.Add a new key 'color' and give it a value.

cat.color = "black"
// c.Write code that logs whether or not`cat` has the property 'texture'.

console.log(cat.texture);

// What will the code below log ? Explain why.

// let p1 = {
//     name: 'Joe'
// }

// let p2 = {
//     name: 'Joe'
// }

// console.log(p1 === p2)

// the code returns false. it will only return true if both sides
// refer to the exact same object.


let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"}

//a.Write a code block that takes an object variable and stores 
//the * keys * in an array.Then log the array.

let numKeys = Object.keys(spanishNumbers)
console.log(numKeys);

//b.Write a code block that takes an object variable and stores 
//the * values * in an array.Then log the array.

let numValues = Object.values(spanishNumbers)
console.log(numValues);

// Write a code block the logs the number of properties an object has.

let propNum = 0
for (const key in spanishNumbers) {
   propNum++
}
console.log(propNum);

// Loop through the following object and log all of the directors.

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
for (let i = 0; i < films.length; i++) {
    console.log(films[i].director);
}


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

// a.Create an array of strings called`firstNames` that contains only the values for `“firstName”` from each object.

for (names in people) {
    console.log(people[names].firstName);
}

// b.Create an array of strings called`fullNames` that contains the values for `“firstName”` and`“lastName”` from the object separated by a space.

for (names in people) {
    console.log(people[names].firstName + " " + people[names].lastName);
}