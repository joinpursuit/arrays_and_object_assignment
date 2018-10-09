# Object Exercises

1. Log the cats species.
```js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
```
let cat = {
  genus: 'Felis',
  species: 'Catus'
}
console.log(cat.species)

2. Add a color quality to the cat from the previous question.

let cat = {
  genus: 'Felis',
  species: 'Catus',
  color: 'Green'
}

3. How do you check if our cat object has the propery texture?

let cat = {
  genus: 'Felis',
  species: 'Catus',
  color: 'Green'
}
console.log(cat.texture)

4. Loop through the following object and log all of directors.
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

for(let i = 0; i < films.length; i++) {
    console.log(films[i].director);
      }

5. What will this code log? false
```js
let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)

```
false

#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```

let recipes = [
 {
   name: 'Mole',
   servings: 2,
   ingredients: ['cinnamon', 'cumin', 'cocoa']
 }, {
   name: 'Sushi',
   servings: 3,
   ingredients: ['fish', 'rice', 'seaweed']
 }, {
   name: 'Alfredo',
   servings: 5,
   ingredients: ['chicken', 'cream', 'noodles']
 }
]

for(let i = 0; i < recipes.length; i++) {

  }
  console.log(recipes[0])


/*let recipes =
 {
   name: 'Mole',
   servings: 2,
   ingredients: ['cinnamon', ' cumin', ' cocoa']
 }


for (let key in recipes) {
  console.log(key + ": " + recipes[key])

} */



#### getProps
Write a code block that takes an object variable and logs all the keys as an array.

let arr = []

let films =
  {
    name: 'Psycho',
    director: 'Alfred Hitchcock',
    released: 1960
  }
for(let key in films){


arr.push(key)
}
console.log(arr)

#### getValues
Write a code block that takes an object variable and logs all the values as an array.

let arr = []

let films =
  {
    name: 'Psycho',
    director: 'Alfred Hitchcock',
    released: 1960
  }
for(let key in films){


arr.push(films[key])
}
console.log(arr)

#### getObjLength
Write a code block the logs the number of properties an object has.

let arr = []

let films =
  {
    name: 'Psycho',
    director: 'Alfred Hitchcock',
    released: 1960
  }
for(let key in films){

arr.push(films[key])

}
console.log(arr.length)

/*console.log(Object.keys(obj).length);*/

#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins. `
let films = [
 {
   name: 'Psycho',
   director: 'Alfred Hitchcock',
   watched: true
 }, {
   name: 'Citizen Kane',
   director: 'Orson Welles',
   watched: false
 }, {
   name: 'The Usual Suspects',
   director: 'Bryan Singer',
   watched: true
 }


]


  for(i=0;i < films.length;i++){
    if (films[i].watched === true){
    console.log("You already watched "+ films[i].name + " by director "+ films[i].director)
} else {
   console.log("You still need to watch "+ films[i].name+ " by director " + films[i].director)
}
  }

#### characterCount
Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts.

let str = "abbazabba";
let result = {};
for(let i = 0; i < str.length; i++) {
  if(result[str[i]]) {
    result[str[i]]++
  } else {
    result[str[i]] = 1
  }
}

console.log(result)
