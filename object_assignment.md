# Object Exercises

<!-- 1. Log the cats species.
```js
 let cat = {
   genus: 'Felis',
   species: 'Catus'
} -->

1.
// let cat = {
//   genus: 'Felis',
//   species: 'Catus'
// }
// console.log(cat.species)



```
<!-- 2. Add a color quality to the cat from the previous question. -->

2.
// let cat = {
//   genus: 'Felis',
//   species: 'Catus',
//   color: 'black'
// }
// console.log(Object.cat = 'black')



<!-- 3. How do you check if our cat object has the propery texture? -->

3.
console.log(cat.texture) //will come out as undefined because its not in the object

<!-- 4. Loop through the following object and log all of directors.
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

``` -->

4.

let names = [];
// for(let i = 0; i < films.length; i++){
//   names.push(films[i].director)
// }
// console.log(names);


<!-- 5. What will this code log?
```js
let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)

``` -->

5.

//FALSE


<!-- #### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

```javascript
name: Mole
servings: 2
ingredients: cinnamon, cumin, cocoa
```

//Recipe
let recipe = {
//   name: 'Cookie',
//   servings: 12,
//   ingredients:['milk', 'sugar','chocolate']
// }
// console.log(recipe)


<!-- #### getProps
Write a code block that takes an object variable and logs all the keys as an array. -->

//getProps
//gets all the keys as an array
// let getProps = Object.keys(recipe)
// console.log(getProps)

<!-- #### getValues
Write a code block that takes an object variable and logs all the values as an array. -->

//getValues
//get all the values as an array
// let getValues = Object.values(recipe)
// console.log(getValues)


<!-- #### getObjLength
Write a code block the logs the number of properties an object has. -->

//getObjLength
//get the number of properties an object has
// let getObjLength = Object.keys(recipe).length
// console.log(getObjLength)

<!-- #### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log

`You still need to watch "Wonder Woman" by director Patty Jenkins. ` -->

//Watchlist

// let films = [
//   {
//   name: 'Avengers',
//   director: 'John West',
//   wathced: false
// },
// {
//   name: 'The Nun',
//   director:'Adam Scott',
//   watched: false
// },
// {
//   name: 'Annabelle',
//   director: 'Jane Parker',
//   watched: true
// }
// ]
//
// for (i = 0; i < films.length; i++){
//   if(films[i].watched === true){
//     console.log('You already watch ' + films[i].name + ' directed by ' + films[i].director)
//   }else{
//     console.log('You still need to watch ' + films[i].name + ' directed by ' + films[i].director)
//   }
// }





<!-- #### characterCount
Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts. --> -->


//CharacterCount

// let word = 'pursuits';
// let cut = word.split('');
// // console.log(cut)
// let result = {};
// for (let i = 0; i < cut.length; i++) {
//
//   if(result[cut[i]]){
//     result[cut[i]] += 1
//     console.log(cut[i], true)
//   }else{
//     result[cut[i]] = 1
//     console.log(cut[i], result)
//   }
// }


// for(i = 0; i < word.length(); i++ ){
//   console.log(word.length)
//}
