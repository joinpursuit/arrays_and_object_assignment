# Object Exercises

1. Log the cats species.

```js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
console.log(cat.species);
```

2. Add a color quality to the cat from the previous question.

```js
cat.color = 'black';
```

3. How do you check if our cat object has the property texture?

```js
cat.texture;
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

for (let i = 0; i < films.length; i++) {
  console.log(films[i].director);
};

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

```

<!-- false -->


#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (in array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```

```js

let favoriteRecipe = {
  name : 'Tiramisu',
  servings : 9,
  ingredients : ['eggs','sugar','brandy','espresso','ladyfingers','marscapone cheese','salt']
};

for (let key in favoriteRecipe) {
  console.log(`${key}: ${favoriteRecipe[key]}`)
};

```

#### getProps
Write a code block that takes an object variable and logs all the keys as an array.

```js

let keyArray = [];
for (let key in favoriteRecipe) {
  keyArray.push(key);
};

// Or

let keys = Object.keys(favoriteRecipe);

```

#### getValues
Write a code block that takes an object variable and logs all the values as an array.

```js

let valueArray = [];
for (let key in favoriteRecipe) {
  valueArray.push(favoriteRecipe[key]);
};

// Or

let values = Object.values(favoriteRecipe);

```

#### getObjLength
Write a code block the logs the number of properties an object has.

```js

console.log(Object.keys(favoriteRecipe).length);

```

#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins. `

```js

let films = [
  {
    title: 'Numbani',
    director: 'Bastion',
    boolean: false
  },
  {
    title: 'Temple of Nepal',
    director: 'Zenyatta',
    boolean: true
  },
  {
    title: 'Kings Row',
    director: 'Tracer',
    boolean: true
  }
]

for (let i = 0; i < films.length; i++) {
  if(films[i].boolean === false) {
    console.log(`You still need to watch '${films[i].title}' by director ${films[i].director}.`)
  } else {
    console.log(`You already watched '${films[i].title}' directed by ${films[i].director}.`)
  }
}

```

#### characterCount
Write a block of code that takes a string variable and counts the occurrence of each character in the string. Use an object to keep track of the counts.

```js


function characterCount(string) {  

    let counterObj = {};

      for (let i = 0; i < string.length; i++) {
        if (counterObj[string[i]] === undefined) {
          counterObj[string[i]] = 1
        } else {
          counterObj[string[i]]++;
        }
      }
      console.log(counterObj)
    };
    characterCount('jimmy');
