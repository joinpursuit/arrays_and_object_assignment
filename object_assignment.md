# Object Exercises

1. Log the cats species.
```js
let cat = {
  genus: 'Felis',
  species: 'Catus'
}
console.log (cat["species"])
```

2. Add a color quality to the cat from the previous question.
```js
let cat = {
  genus: 'Felis',
  species: 'Catus'
}
console.log(cat["color"]);
cat["color"] = "hazel"
console.log(cat["color"])
```

3. How do you check if our cat object has the propery texture?
```js
let cat = {
  genus: 'Felis',
  species: 'Catus'
}
console.log(cat["texture"]) // If it logs undefined, it means the property does not exist inside the object
```

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
```
5. What will this code log?
```js
let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)

// it will log false
```


#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```js
let recipe = {
  name:"poutine",
  servings:2,
  ingredients:["fries", "gravy", "cheese"]
}

for (let key in recipe){
  console.log (key + ": " + recipe[key])
};

```

#### getProps
Write a code block that takes an object variable and logs all the keys as an array.

let keyList = Object.keys(recipe)
console.log(keyList)

#### getValues
Write a code block that takes an object variable and logs all the values as an array.

let valueList = Object.values(recipe)
console.log(valueList)

#### getObjLength
Write a code block the logs the number of properties an object has.

let keyList = Object.keys(recipe)
console.log(keyList.length)


#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

let films = [
  {name: "Up",
  director: "Who Knows",
  watched: true
  },
  {name: "Totoro",
  director:"Studio GHibli",
  watched: true
  },
  {name: "Saw",
  director:"Scary",
  watched: false
  }
]
for (let i= 0; i < films.length; i++){
 if (films[i].watched === true){
  console.log( `You already watched ${films[i].name} directed by ${films[i].director}.`)
} else if (films[i].watched === false){
  console.log( `You still need to watch ${films[i].name} by ${films[i].director}.`)
  }
}


#### characterCount
Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts.

let str = "Serendipity"
let count = {}
for ( let i = 0; i < str.length; i++)
if (!count(str[i])) {
  count(str[i]) =1;
} else {
  count(str[i]) =+ 1;
}
}
console.log (count);
