# Object Exercises

1. Log the cats species.
```js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
};

console.log(cat.species);
```

2. Add a color quality to the cat from the previous question.

```js
let cat = {
  genus: 'Felis',
  species: 'Catus'
};
cat.color = 'yelow';
console.log(cat);
```

3. How do you check if our cat object has the propery texture?

```js
let cat = {
  genus: 'Felis',
  species: 'Catus'
};
;
console.log(cat.texture);
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

let directorsFilms = [];
for(let i = 0; i < films.length; i++){
  directorsFilms.push(films[i].director)
}

console.log(directorsFilms)
```


5. What will this code log?
```js
let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)// Will log False, because each object have different ID.

```


#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```

```js
let favRecipe =  [
{
  name: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
}
]

let arrIngre = [];
for(let i = 0; i < favRecipe.length; i++){
arrIngre.push(favRecipe[i].ingredients);

}
console.log(arrIngre);
```
#### getProps
Write a code block that takes an object variable and logs all the keys as an array.

```js
let students =
{
  names: ["Isa", "Katy", "Lola"],
  cohort: ["Full Stack Wed", "IOS", "Android"],
  ages: [24, 27, 30]
};

let studentsKey = Object.keys(students);

console.log(studentsKey);
```

#### getValues
Write a code block that takes an object variable and logs all the values as an array.

```js
let students =
{
  names: ["Isa", "Katy", "Lola"],
  cohort: ["Full Stack Wed", "IOS", "Android"],
  ages: [24, 27, 30]
};

let studentsKey = Object.values(students);

console.log(studentsKey);
```

#### getObjLength
Write a code block the logs the number of properties an object has.

```js
let students =
{
  names: ["Isa", "Katy", "Lola"],
  cohort: ["Full Stack Wed", "IOS", "Android"],
  ages: [24, 27, 30]
};

let studentsKey = Object.keys(students).length;

console.log(studentsKey);
```

#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins.`

```js
let films = [
{
  title: "The New Legends of Monkey",
  director: "Netflix from Australia.",
  boolean: true,
},
{
  title: "Demon girl",
  director: "from China",
  boolean: false
},
]

if(films[0].boolean === true){
  console.log("You already watched " + films[0].title + " directed by " + films[0].director);

}else if(films[1].boolean === false){
  console.log("You still need to watch " + films[1].title + " directed by " + films[1].director);
};
```

```js
//Another way with a LOOP statement
let films = [
{
  title: "The New Legends of Monkey",
  director: "Netflix from Australia.",
  boolean: true,
},
{
  title: "Demon girl",
  director: "from China",
  boolean: false
},
]

let watchedFilms = [];
for(let i = 0; i < films.length; i++){
  watchedFilms.push(films[i].boolean)
  if(watchedFilms[i] === true){
    console.log("You already watched " + films[0].title + " directed by " + films[0].director);
  }else if(){
    console.log("You still need to watch " + films[1].title + " directed by " + films[1].director);
  }
}
```

#### characterCount
Write a block of code that takes a string variable and counts the occurance of each character in the string. Use an object to keep track of the counts.

```js
let wordsToCount = "Legends"
let counted = {};

for(let i = 0; i < wordsToCount.length; i++){
  if(counted[wordsToCount[i]] === undefined){
    counted[wordsToCount[i]] = 1
  }else{
    counted[wordsToCount[i]] +=1;
  }
}
console.log(counted);
```
