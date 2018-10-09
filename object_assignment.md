# Object Exercises

1. Log the cats species.

```js
let cat = {
   genus: 'Felis',
   species: 'Catus'
}
console.log (cat.species)
```
2. Add a color quality to the cat from the previous question.

cat.color = "Blue"

3. How do you check if our cat object has the property texture?

console.log (Object.keys(cat))


4. Loop through the following object and log all of directors.

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
for (let director in films){
	console.log(films[director].director)}

5. What will this code log?

FALSE


#### Recipe

* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
* Create a loop that logs the recipe information, so it looks like:

`
let jReceipts = [
	{
	name: "Chicken wings",
	servings: "3",
	ingredients: ["Pepper", "Sugar", "Spice"]
	},
	{
	name: "Turkey wings",
	servings: "4",
	ingredients: ["Pepper", "Orange", "Turkey Wings"]
	},
	{
	name: "Buffalo wings",
	servings: "5",
	ingredients: ["Wings of buffalos", "Oranges"]

	}]

for (let showReceipt in jReceipts)
{
	console.log(jReceipts[showReceipt])}
`

#### getProps
Write a code block that takes an object variable and logs all the keys as an array.
#### getValues
Write a code block that takes an object variable and logs all the values as an array.
#### getObjLength
Write a code block the logs the number of properties an object has.

console.log (Object.keys(jReceipts))
console.log (Object.values(jReceipts))
console.log (Object.keys(jReceipts).length)


#### WatchList
Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
Create a code block that iterates over the array and logs whether the film was watched or not. If it was watched, log a string like

`You already watched "Wonder Woman" directed by Patty Jenkins`
and if not, log
`You still need to watch "Wonder Woman" by director Patty Jenkins. `



let movies = [
 {
   name: 'Psycho',
   director: 'Alfred Hitchcock',
   watch: true
 }, {
   name: 'Citizen Kane',
   director: 'Orson Welles',
   watch: false
 }, {
   name: 'The Usual Suspects',
   director: 'Bryan Singer',
   watch: false
 },
]

for (let i = 0; i<=Object.keys(movies).length -1 ; i++){
if (movies[i].watch === true)
console.log(`You have watch ${movies[i].name}`)

else {
	console.log(`You have not watch ${movies[i].name}`)}}



#### characterCount
Write a block of code that takes a string varaible and counts the occurance of each character in the string. Use an object to keep track of the counts.
