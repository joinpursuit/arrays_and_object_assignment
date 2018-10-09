# Object Exercises

1. Log the cats species.


//------------//


let cat = {


  name: 'Larry',


  genus: 'Felis',


  species: 'Catus',

}


console.log(cat.species)


//-------------//


2. Add a color quality to the cat from the previous question.


//---------//


let cat = {

  name: 'Larry',


  color: 'White and Black',


  genus: 'Felis',


  species: 'Catus',


}


console.log(cat.color)


//-------------//


3. How do you check if our cat object has the propery texture?


//---------//


let cat = {


  name: 'Larry',


  color: 'White and Black',

  genus: 'Felis',


  species: 'Catus',


}


console.log(cat.texture);


//-----------//



4. Loop through the following object and log all of directors.



//--------//


let directors = [];



for(let i = 0 ; i <films.length ; i++) {



  directors.push(films[i].director);


}


 console.log(directors)


//----------//



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
//----------//


False


//--------//


#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:


//-------------//
```
let favRecipe = {
  name: "pp&j",
  servings: 4,
  ingredients:['sliced white bread','peanut butter', 'yummy jam jelly']
}

// let key = Objects.value

  for(let key in favRecipe)

{  console.log(key + ": "  + favRecipe[key])};

```

//----------//


#### getProps
Write a code block that takes an object variable and logs all the keys as an array.


//-------------------//
```

let favRecipe = {
  name: "pp&j",
  servings: 4,
  ingredients:['sliced white bread','peanut butter', 'yummy jam jelly']
}

 let favRecipeKeys = Object.keys(favRecipe);
 console.log(favRecipeKeys)


 ```
//------//


#### getValues
Write a code block that takes an object variable and logs all the values as an array.



//---------//

```

let favRecipe = {
  name: "pp&j",
  servings: 4,
  ingredients:['sliced white bread','peanut butter', 'yummy jam jelly']
}

 let favRecipeValues = Object.values(favRecipe);
 console.log(favRecipeValues)

 ```
//-------//


#### getObjLength
Write a code block the logs the number of properties an object has.


//-----------//

```

let favRecipe = {
  name: "pp&j",
  servings: 4,
  ingredients:['sliced white bread','peanut butter', 'yummy jam jelly']
}

 let favRecipeKeys = Object.keys(favRecipe);
 console.log(favRecipeKeys.length);

```

 //-----------//


#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins. `

```
//------------//

let films = [
  {
    name: 'Black Panther',
    director: 'Ryan Coogler',
    watched: true
  },

  {
    name: 'Solo: A Star Wars Story',
    director: 'Ron Howard',
    watched: false
  },

  {
    name: 'Toy Story',
    director: 'John Lasseter',
    watched: true
  },
]

for (let i = 0; i < films.length; i++) {

  if (films[i]['watched'] === true) {

    console.log("You already watched " + films[i]['name'] + " by " + films[i]['director'] + ".") ;

  }
  else {
    console.log("You still need to watch " + films[i]['name'] + " by " + films[i]['director']+ ".");
  }
}

 ```

//--------------//


#### characterCount
Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts.


//--------------//
```

let str = "kittens cute";
let result = {};
let char = str.split("");


 for(let i = 0; i < char.length; i++) {

if(result[char[i]]) {
result[char[i]] += 1
  console.log(char[i], true)
} else {
result[char[i]] = 1
//result[char[i]]
console.log(char[i], result)
}

}
console.log(result)

```

//----------//
