# Object Exercises

1. Log the cats species.
```js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
```




2. Add a color quality to the cat from the previous question.

let cat = {
  genus: 'Felis',
  species: 'Catus',
  color: 'Grey'
}

console.log(cat.color)



3. How do you check if our cat object has the propery texture?


let cat = {
  genus: 'Felis',
  species: 'Catus',
  color: 'Grey'
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


let filmDirec= []
for (i=0; i < films.length; i++){
filmDirec.push(films[i].director)
console.log(filmDirec)
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

false

#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```


let faveRecipe =[
{
name:'frenchToast',
servings:1,
ingredients:['bread','egg','pepper']
}
]

let favIng = [];
for(let i = 0; i < faveRecipe.length; i ++){
  favIng.push(faveRecipe[i].ingredients)
}

console.log(favIng)





#### getProps
Write a code block that takes an object variable and logs all the keys as an array.

let phone = [
  {
    name: ['samsung1', 'samsung2', 'samsung3'],
    model: ['S7','S8','S9'],
    howGud: ["ehh","good","great"]
  }
]

console.log(Object.keys(phone))


#### getValues
Write a code block that takes an object variable and logs all the values as an array.



let phone = [
  {
    name: ['samsung1', 'samsung2', 'samsung3'],
    model: ['S7','S8','S9'],
    howGud: ["ehh","good","great"]
  }
]

console.log(Object.values(phone))





#### getObjLength
Write a code block the logs the number of properties an object has.



let phone =
  {
    name: 'samsung1',
    model: 'S7',
    howGud: "ehh",
  }


let objKeys = Object.keys(phone).length

console.log(objKeys)






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
   watched: false
 }
]


for (i=0; i < films.length; i++){
  if (films[i].watched === true){
    console.log("You already watched " + films[i].name + " directed by " + films[i].director)
   } else {
    console.log("You still need to watch" + films[i].name + " directed by " + films[i].director)
  }
}





#### characterCount
Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts.



counter = {
  count: 0
};
for (let i = 0; i < strVariable.length; i++) {
counter.count++;
}
console.log(counter.count);
