let str = "hello";

let charCount= {};

for (let i = 0; i < str.length; i++){
  if (!charCount[str[i]]){
    charCount[str[i]] = 1
  } else {
    charCount[str[i]] += 1;
  }
}
console.log(charCount)







/* let films = [
  {
    name: 'spiderman',
    director: 'jon watts',
    watched:false
  },
  {
    name: 'superman',
    director: 'tudor giurgiu',
    watched:false
  },
  {
    name:'wonder woman',
    director: 'patty jenkins',
    watched:true
  }
]

for (let i = 0; i < films.length; i++){
  if (films[i].watched === true){
    console.log("you already watched " + films[i].name + " by the director " + films[i].director)
  } else {
    console.log("you still need to watched " + films[i].name + " by director " + films[i].director)
  }
}
*/






// for (let i = 0; i < films.length; i++){
//   titles.push(films[i].name)
// }
//  console.log(titles)
//
// //
// for (i = 0; i < films.length; i++){
// if (films.watched === true){
//   console.log("you already watched" + films.name + " directed by " + films.director)
// } else {
//   console.log("you still need to watch " + films.name + " by director " + films.director)
// }
// }




// let age = [4,0,3,5,6,7];
// let target = 7;
//
// for (let i = 0; i < age.length - 1; i++){
//   for(let j = 1; j < age.length; j++){
//
//
//   if (age[i] + age[j] === target){
//
//
//   console.log(i, j)
// }
// }
// }
//for (let i = 0; i < age.length; i++){
  //if(age[i] + age[i++] == target)
  //  console.log(i);
//}


// let favRecipe = [
//  {
//    name: 'oatmeal',
//    servings: 2,
//    ingredients: oatmeal, water, milk, sugar
//  }
//
//  for (i = 0; i <= favRecipe; i++){
//    console.log(favRecipe[i])
//  }



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
// console.log(films)


// let cat = {
//   genus: 'felis',
//   species: 'catus'
// }
// cat.color= 'black'
// console.log(cat.hasOwnProperty("texture"))
//




// question5
// let longestArr =[[1,2,3],[1,2,3,4]];

// console.






// question4
// let fruits = ["straberry", "bannana"]
//
// fruits.push("mango");   // mango is added to the end
// fruits.unshift("blueberry"); // blueberry is added to the beginning
// fruits.pop(); // mango is removed from the end
// fruits.shift(); // blueberry is removed from the front
//
// console.log(fruits)


// question1

// let arr = ["fist", "second", "last"]
// console.log(arr[arr.length - 1])

// question2
//
// let arr = ["fist", "second", "last"]
//
// arr.shift()
// arr.unshift("something else")
// console.log(arr)

// question 3

// let fruits = ["straberry", "bannana"]
//
// fruits.push("mango");
//
// console.log(fruits);
