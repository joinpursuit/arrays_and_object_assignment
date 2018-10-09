# Object Exercises

1. Log the cats species.
```js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
}
```
```
console.log(cat['species']);
```
2. Add a color quality to the cat from the previous question.
```
let cat = {
   genus: 'Felis',
   species: 'Catus'

}
cat.color = 'Grey'
console.log(cat);
```
3. How do you check if our cat object has the propery texture?
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
```
let director = []
for (i = 0; i < films.length; i++){
  director.push(films[i].director)
}
console.log(director);
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
```
false
```


#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
```
let recipe = {
  name: 'Chicken Alfredo',
  serving: 2,
  ingredients: 'Chicken, Pasta, Alfredo sauce',
}
```
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```
```
let recipe = {
  name: 'Chicken Alfredo',
  serving: 2,
  ingredients: 'Chicken, Pasta, Alfredo sauce',
}
for (let i in recipe){
  console.log(i + ': ' + recipe[i])
}
```

#### getProps
Write a code block that takes an object variable and logs all the keys as an array.
```
let recipe ={
  name: 'Chicken Alfredo',
  serving: 2,
  ingredients: 'Chicken, Pasta, Alfredo sauce',
}

  console.log(Object.keys(recipe));

```


#### getValues
Write a code block that takes an object variable and logs all the values as an array.
```
let recipe ={
  name: 'Chicken Alfredo',
  serving: 2,
  ingredients: 'Chicken, Pasta, Alfredo sauce',
}

  console.log(Object.values(recipe));
```
#### getObjLength
Write a code block the logs the number of properties an object has.
```
let recipe ={
  name: 'Chicken Alfredo',
  serving: 2,
  ingredients: 'Chicken, Pasta, Alfredo sauce',
}

  console.log(Object.values(recipe).length);
```

#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins. `
```
let films = [{
  name: 'Moana',
  director: 'Ron Celemtents',
  watched: true,
},{
  name: 'Coco',
  director: 'Lee Unkrich',
  watched: true
},{
  name: 'Venom',
  director: 'Ruben Fleischer',
  watched: false
},{
  name: 'Infinity War',
  director: 'Anthony Russo',
  watched: true
}]
 for (i = 0; i < films.length; i++)
 if (films[i]['watched']){
   console.log('\n'+'You already watched '+ films[i]['name']+ ' directed by ' + films[i]['director'])
 } else {
   console.log('\n'+'You still have not watched ' + films[i]['name'] + ' directed by ' + films[i]['director'])
 }
 ```

#### characterCount
Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts.
```
let str = 'supercalifragilisticipialidosious'
let arr = str.split('')
let result = {};

for (let i = 0; i < arr.length; i++){
if (!result[arr[i]]){
result[arr[i]] = 1;
} else {
result[arr[i]] += 1;
}
}
console.log(result);

```
