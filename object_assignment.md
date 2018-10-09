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

colour: 'Black'

3. How do you check if our cat object has the propery texture?

console.log(cat.texture)
//if anything is consoled then there is texture

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

let directors = []
for(i=0; i < films.length; i++) {
  directors.push(films[i].director)
}console.log(directors)

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
flase

#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```


let bbb = {
  name: 'Banana Bread',
  servings: 'People',
  ingredients: ["Banana" , "Bread", "More things"]
}

for (let key in bbb) {
  console.log(key + ": " + bbb[key]);
}

#### getProps
Write a code block that takes an object variable and logs all the keys as an array.

let dinosaur = {
  name: 'Tom',
  type: 'Big',
  colour: 'Green'
}

let arr = (Object.keys(dinosaur));
console.log(arr)

#### getValues
Write a code block that takes an object variable and logs all the values as an array.

let dinosaur = {
  name: 'Tom',
  type: 'Big',
  colour: 'Green'
}

let arr = (Object.values(dinosaur));
console.log(arr)

#### getObjLength
Write a code block the logs the number of properties an object has.

let dinosaur = {
  name: 'Tom',
  type: 'Big',
  colour: 'Green'
}

console.log(Object.keys(dinosaur).length)

//because console.log(dinosuar.length) would only give us an array of 1 we need to specify either the Object.keys or Object.values for the number of properties in the array of the Object

#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins. `

let films = [
  {
    title: "Wonder Woman",
    director: "Patty Jenkins",
    viewed: true
  },
  {
    title: "The Land Before Time",
    director: "Don Bluth",
    viewed: true
  },
  {
    title: "Harry Potter",
    director: "Mike Newell",
    viewed: false
  }
];
 for (let i = 0; i < films.length; i++) {
  if (films[i].viewed === true) {
    console.log(
      "You already watched " +
        films[i].title +
        " directed by " +
        films[i].director
    );
  } else {
    console.log(
      "You still need to watch " +
        films[i].title +
        " directed by " +
        films[i].director
    );
  }
}

#### characterCount
Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts.

let string = 'war who what is it good for';
string = string.split('');
var stringCount ={
  w : 0,
}
for(i=0;i<string.length;i++){
  if(string[i]==="w"){
    stringCount.w +=1
  }
}
console.log(stringCount)
