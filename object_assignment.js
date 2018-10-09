// Question 1
// let cat = {
//   genus: 'Felis',
//   species: 'Catus'
// }
// console.log(cat.species);
// ///////////////////////////////////////////////
// Question 2
// let cat = {
//   genus: 'Felis',
//   species: 'Catus',
//   colour: 'grey',
// }
// console.log(cat.colour);
///////////////////////////////////////////////
// Question 3
//console.log(cat.texture) - if the result is undefined, then the texture key doesn't exist.
///////////////////////////////////////////////
// Question 4
// let films = [
//  {
//    name: 'Psycho',
//    director: 'Alfred Hitchcock',
//    released: 1960
//  }, {
//    name: 'Citizen Kane',
//    director: 'Orson Welles',
//    released: 1941
//  }, {
//    name: 'The Usual Suspects',
//    director: 'Bryan Singer',
//    released: 1995
//  }
// ]
//
// for(let i = 0, i < films.length; i++){
//   console.log(films[i].name);
// }
//////////////////////////////////////////////
// Question 5
// False as both objects have same values but are different objects
//////////////////////////////////////////////
// Question 6
// let dish = {
//   name: 'Pasta',
//   servings: 2,
//   ingredients: ['linguine', 'tomato sauce', 'garlic', 'meatballs', 'onions', 'salt and pepper']
// } console.log(dish.['ingredients'])
//
// for(let key in dish){
//   console.log(key)
// }
////////////////////////////////////////////////
// Question 7
// let dish = {
//   name: 'Pasta',
//   servings: 2,
//   ingredients: ['linguine', 'tomato sauce', 'garlic', 'meatballs', 'onions', 'salt and pepper']
// } console.log(dish.['ingredients'])
//
// for(let value in dish){
//   console.log(value)
// }
////////////////////////////////////////////////
// Question 8
// let dish = {
//   name: 'Pasta',
//   servings: 2,
//   ingredients: ['linguine', 'tomato sauce', 'garlic', 'meatballs', 'onions', 'salt and pepper']
// }
// let dishValues = Object.values(dish)
//   console.log(dishValues)
/////////////////////////////////////////////////
// Question 9
// let dish = {
//   name: 'Pasta',
//   servings: 2,
//   ingredients: ['linguine', 'tomato sauce', 'garlic', 'meatballs', 'onions', 'salt and pepper']
// }
// let dishLength = Object.keys(dish).length;
// console.log(dishLength);
//////////////////////////////////////////////////
// Question 10
// let films = [
//   {
//     name: 'Pulp Fiction',
//     director: 'Quentin Tarantino',
//     watched: true
//   },
//   {
//     name: 'Get Out',
//     director: 'Jordan Peele',
//     watched: false
//   },
//   {
//     name: 'High School Musical',
//     director: 'Who cares',
//     watched: false
//   },
//   {name: 'Star Wars Episode 8',
//   director: 'JJ Abrams',
//   watched: true
//   }
// ]
// for(let i = 0; i < films.length; i++){
//   if(films[i].watched === false){
//     console.log('you didn\'t watch ' + films[i].name + ' by ' + films[i].director);
// } else if(films[i].watched === true){
//   console.log('I watched it already')
// } else console.log('Go get Netflix')
// }
//////////////////////////////////////////////////
let var1 = 'pokemoninvasion'
let answer = {};
let word = [];
for(let i = 0; i < var1.length; i++){
  word.push(var1[i])
} for(let i = 0; i < word.length; i++){
  if (!answer[word[i]]) {
    answer[word[i]] = 1;
  } else {
    answer[word[i]] += 1;
  }
}
console.log(answer)
