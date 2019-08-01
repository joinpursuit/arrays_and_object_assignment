//Given the cat object below:
let cat = {
  genus: 'Felis',
  species: 'Catus',
}

// //a. Log the species of cat.
console.log(cat.species);

// b. Add a new key 'color' and give it a value.
cat.color = 'Black'
console.log(cat);

//c. Write code that logs
// whether or not cat has the property 'texture'.
if (cat.texture === undefined){
    console.log('The object cat does not have a texture property');
}
console.log(cat.texture);

//What will the code below log? Explain why.
let p1 = {
  name: 'Joe'
}

let p2 = {
  name: 'Joe'
}

console.log(p1 === p2)
// This code will log false because
//the properties of two different objects are not equal
//even if they are the same.


//Given the object variable spanishNumbers below:
let spanishNumbers = {
  1: "uno",
  2: "dos",
  3: "tres",
  4: "quatro",
  5: "cinco"
}

//a. Write a code block that takes an object variable and stores the keys in an array. Then log the array.
let spanishKey = []
for (let Key in spanishNumbers){
  spanishKey.push(Key)
}
console.log(spanishKey);
//b. Write a code block that takes an object variable and stores the values in an array. Then log the array.
let spanishValue = []
for (let Key in spanishNumbers){
  spanishValue.push(spanishNumbers[Key])
}
console.log(spanishValue);

// //Write a code block the logs the number of properties an object has.
let counter0 = 0
for (let Key in spanishNumbers){
  counter0 +=1
}
console.log(counter0);

//a. Create an array of strings called firstNames
//that contains only the values for “firstName” from each object.
let people = [
    {
        "firstName": "Calvin",
        "lastName": "Newton"
    },
    {
        "firstName": "Garry",
        "lastName": "Mckenzie"
    },
    {
        "firstName": "Leah",
        "lastName": "Rivera"
    },
    {
        "firstName": "Sonja",
        "lastName": "Moreno"
    },
    {
        "firstName": "Noel",
        "lastName": "Bowen"
    }
]


let firstNames = []

for (let i = 0; i < people.length; i++){
  firstNames.push(people[i].firstName)
}
console.log(firstNames);

//b. Create an array of strings called fullNames
//that contains the values for “firstName” and “lastName” from the object separated by a space.
let fullNames = []

for (let i = 0; i < people.length; i++){
  fullNames.push(people[i].firstName + ' ' + people[i].lastName)
}

console.log(fullNames);





//Print the second most common letter in the string below:
let str = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."
let obj = {}
for (let i = 0; i < str.length; i ++){
  let current_character = str[i]
  if(current_character !== ' ')
    if (obj[current_character] === undefined){
        obj[current_character] = 1
  }else{
    obj[current_character] ++
  }
}
let max
let max_count = 0
let nxt_max
let nxt_max_count = 0
for (let key in obj){
  if (obj[key] > max_count){

    nxt_max = max
    nxt_max_count = max_count

    max_count = obj[key]
    max = key
  } else if (obj[key] > nxt_max_count){
    nxt_max_count = obj[key]
    nxt_max = key
  }
}

console.log(max + ' ' + max_count);
console.log(nxt_max + ' ' + nxt_max_count);

for(let char of str)


//Question 8

var deposits = {
 "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
 "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
 "Davies" : [400.98, 56.98, 300.00],
 "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
 "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
}

//Gives back name and sum of wealthies person
const sumPerPerson =(acc, elem)=>{
  return acc + elem
}



const moneyCounter =(obj)=>{
let totalBankAmount = []
for (name in obj){
    totalBankAmount.push( { [name] : obj[name].reduce(sumPerPerson,0)} )
  }
  return (totalBankAmount);
}

const richestPerson =(arr) =>{
let largest;
let largeCounter = 0
for (let i = 0; i < arr.length; i ++){
  if (Object.values(arr[i])[0] > largeCounter){
    largeCounter = Object.values(arr[i])[0]
    largest = arr[i]
    }
  }
  return largest
}

let result = richestPerson(moneyCounter(deposits))
console.log(result);
