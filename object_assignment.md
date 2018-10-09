# Object Exercises

1. Log the cats species.
```js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
```
console.log(cat.species);


2. Add a color quality to the cat from the previous question.

cat.colorQuality = "Good Color";

3. How do you check if our cat object has the propery texture?

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

```
for (var i =0; i < films.length; i++){
  console.log(films[i].directors);
}



5. What will this code log?
```js
let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)

```

It will log false


#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```

let recipe = {
  name: "breakfast",
  servings: 1,
  ingredients:["milk", "cereal"]
}
for(let key in recipe){
   console.log(key + ": " + recipe[key]);
 };



#### getProps
Write a code block that takes an object variable and logs all the keys as an array.

let recipe = {
  name: "breakfast",
  servings: 1,
  ingredients:["milk", "cereal"]
}

let keyArr = [];

for(let key in recipe){
  keyArr.push(key)

}
console.log(keyArr)


#### getValues
Write a code block that takes an object variable and logs all the values as an array.

let recipe = {
  name: "breakfast",
  servings: 1,
  ingredients:["milk", "cereal"]
}
let valArr =[];
for (let key in recipe){
valArr.push(recipe[key])
}
console.log(valArr)

#### getObjLength
Write a code block the logs the number of properties an object has.

let recipe = {
  name: "breakfast",
  servings: 1,
  ingredients:["milk", "cereal"],
  heelo: "adfsf",
  asdf:"erwerw",
  asdwf: "werwe"
}
let counter = 0;
for(let key in recipe){
  counter += 1

}
console.log(counter);


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
   watched: true,
 }, {
   name: 'Citizen Kane',
   director: 'Orson Welles',
   watched: false,
 }, {
   name: 'The Usual Suspects',
   director: 'Bryan Singer',
   watched: false,
 }
]
for(let i = 0; i < films.length; i++) {
   if(films[i].watched === true){
     console.log(films[i])
     console.log(`You watched ${films[i].name}`)


   }else if(films[i].watched ===false){
     console.log(films[i])
     console.log(`You haven't watched ${films[i].name} yet`)

   }
}

#### characterCount
Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts.


let stri = "the super awesome sentence";
let dachosenletter = "e";
let counter = 0;

for (var i =0; i <strin.length; i++){
  if(dachosenletter ===strin[i]){
    counter++
  }
}
console.log(`the letter ${dachosenletter} appears ${counter} times in the string`)
