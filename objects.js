// 1a. Log the species of `cat`.

 let cat = {
   genus: 'Felis',
   species: 'Catus'
};

console.log(cat.species);

// 1b. Add a new key 'color' and give it a value.

cat.color = 'blue';

console.log(cat.color);

//.1c. Write code that logs whether or not `cat` has the property 'texture'.

if('texture' in cat) {
	console.log('The key texture is in cat');
}
else{
	console.log('Texture is missing from cat');
}

//2. What will the code below log?  Explain why.

// ```js
// let p1 = {
//   name: 'Joe'
// }

// let p2 = {
//   name: 'Joe'
// }

// console.log(p1 === p2)

//The code here will log a false. The reason for this is because the two objects are stored in separate parts of memory, and even if they
// may have the same key value pairs, because they are stored in separate parts of memory, they are not the same.

//3a. Write a code block that takes an object variable and stores the *keys* in an array.  Then log the array.

let spanishNumbers = {1: "uno", 2: "dos", 3: "tres", 4: "quatro", 5: "cinco"};

let spanishKeys = Object.keys(spanishNumbers);
console.log(spanishKeys)

//3b. Write a code block that takes an object variable and stores the *values* in an array.  Then log the array.

let spanishValues = Object.values(spanishNumbers);
console.log(spanishValues);


//4. Write a code block the logs the number of properties an object has.

let numOfProps = Object.keys(spanishNumbers).length;

console.log(numOfProps);

// 5.Loop through the following object and log all of the directors.

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


for(let i = 0; i < films.length; i++){
	console.log(films[i].director);
}


//6. You are given an array of objects. Each object in the array contains exactly 2 keys `“firstName”` and `“lastName”`
//a. Create an array of strings called `firstNames` that contains only the values for `“firstName”` from each object.

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

let firstNames = [];

 for(let i = 0; i < people.length; i++){
 	firstNames.push(people[i].firstName)
};

console.log(firstNames);


//b. Create an array of strings called `fullNames` that contains the values for `“firstName”` and `“lastName”` from the \
//object separated by a space.
let fullNames = [];

for(let i = 0; i < people.length; i++){
	fullNames.push(people[i].firstName + ' ' + people[i].lastName);
}

console.log(fullNames);

//7. Print the second most common letter in the string below:

var myString = "We're flooding people with information. We need to feed it through a processor. A human must turn information into intelligence or knowledge. We've tended to forget that no computer will ever ask a new question."

let letters = [];

let myStringArray = myString.toLowerCase().split('');

for(let i = 0; i < myStringArray.length; i++){
	let foundValue = false;
	let indexAt = -1;
	for(let j = 0; j < letters.length; j++){
		if(myStringArray[i] === letters[j].letter) {
			foundValue = true;
			indexAt = j;
		}
	}
	if(foundValue === true) {
		letters[indexAt].occurrence += 1;
	}
	else{
		letters.push({'letter': myStringArray[i], 'occurrence': 1});
	}
}

let largest = -1;
let secondLargest = -1;

if(letters[0].occurrence > letters[1].occurrence) {
	largest = 0;
	secondLargest = 1;
}
else {
	largest = 1;
	secondLargest = 0;
}


for(let i = 2; i < letters.length; i++) {
	if(letters[i].letter === ' '){

	}
	else{
		if(letters[i].occurrence > letters[secondLargest].occurrence){
			if(letters[i].occurrence > letters[largest].occurrence){
				secondLargest = largest;
				largest = i;
			}
			else{
				secondLargest = i;
			}
		}	
	}
}




console.log(letters[secondLargest].letter);

//8.You are given the object `deposits`, which maps a persons name to an array of deposits that have been made to their account.

//a) Write code to to print the name and total amount deposited of the person who received the most money.

let deposits = {
 "Williams" : [300.65, 270.45, 24.70, 52.00, 99.99],
 "Cooper" : [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
 "Davies" : [400.98, 56.98, 300.00],
 "Clark" : [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
 "Johnson" : [12.56, 300.00, 640.50, 255.60, 26.88]
}

let bankNames = Object.keys(deposits);
let amounts = Object.values(deposits);
let arrayOfPeople = [];

for(let i = 0; i < bankNames.length; i++) {
	arrayOfPeople.push({'person': bankNames[i], 'amount': amounts[i]});
}


for(let i = 0; i < arrayOfPeople.length; i ++){
	let total = 0;
	for(let j = 0; j < arrayOfPeople[i].amount.length; j++){
		total += arrayOfPeople[i].amount[j];
	}
	arrayOfPeople[i].total = total;
}

let most = 0;

for(let i = 1; i < arrayOfPeople.length; i++){
	if(arrayOfPeople[most].total < arrayOfPeople[i].total){
		most = i;
	}
}

console.log(arrayOfPeople[most].person + ' has the most money');

//b) Create an array called `stolenCents`, iterate over deposits for each person and steal their cents! ... like Office Space or Superman 3. Calculate the decimal part of each value, add it to the `stolenCents` array and round down the value in the original object.

let stolenCents = []
for(let i = 0; i < arrayOfPeople.length; i ++){
	let newTotal = 0;
	for(let j = 0; j < arrayOfPeople[i].amount.length; j++){
		stolenCents.push(arrayOfPeople[i].amount[j] - Math.floor(arrayOfPeople[i].amount[j]));

		newTotal += Math.floor(arrayOfPeople[i].amount[j]);
	}
	arrayOfPeople[i].newTotal = newTotal;
}

console.log(stolenCents);

console.log(arrayOfPeople);

//c) How much money did you steal?

let myMoney = 0;

for(let i = 0; i < stolenCents.length; i++){
	myMoney += stolenCents[i];
}

console.log(myMoney);

//* Create an object to hold information on your favorite recipe. It should have the following properties: `name`, `servings`, and `ingredients` (an array).
//* Create a loop that logs the recipe information, so it looks like:

let bestFood = {'name': 'lemonade', 'servings': 128, 'ingredients': ['lemons', 'water', 'sugar', 'cucumber']};

for(let thing in bestFood){
	console.log(thing + ' : ' + bestFood[thing]);
}

// Create an array of films, where each film has the following properties: title, director, and a boolean indicating if you started watching it.
//* Create a code block that iterates over the array and logs whether the film was watched or not. Examples:

let filmstudy = [{'title': 'Avatar', 'director': 'James Cameron', 'watched': true},
 {'title': 'Dark Knight', 'director': 'Christoper Nolan', 'watched': false} ];

 for(let i = 0; i < filmstudy.length; i++){
 	if(filmstudy[i].watched === true){
 		console.log('You already watched ' + filmstudy[i].title + ' by ' + filmstudy[i].director);
 	}
 	else{
 		console.log('You still need to watch ' + filmstudy[i].title + ' by ' + filmstudy[i].director);
 	}
 }

 //Given the following exert from the Declaration of Independence, find the most frequent word that is longer than 5 characters.

const declarationOfIndependence = `
When in the Course of human events, it becomes necessary for one people to dissolve the
political bands which have connected them with another, and to assume among the powers of the
earth, the separate and equal station to which the Laws of Nature and of Nature's God entitle
them, a decent respect to the opinions of mankind requires that they should declare the causes
which impel them to the separation.

We hold these truths to be self-evident, that all men are created equal, that they are endowed by
their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit
of Happiness. That to secure these rights, Governments are instituted among Men, deriving
their just powers from the consent of the governed, That whenever any Form of Government
becomes destructive of these ends, it is the Right of the People to alter or to abolish it, and to
institute new Government, laying its foundation on such principles and organizing its powers in
such form, as to them shall seem most likely to effect their Safety and Happiness. Prudence,
indeed, will dictate that Governments long established should not be changed for light and
transient causes; and accordingly all experience hath shewn, that mankind are more disposed to
suffer, while evils are sufferable, than to right themselves by abolishing the forms to which they
are accustomed. But when a long train of abuses and usurpations, pursuing invariably the same
Object evinces a design to reduce them under absolute Despotism, it is their right, it is their duty,
to throw off such Government, and to provide new Guards for their future security. Such has
been the patient sufferance of these Colonies; and such is now the necessity which constrains
them to alter their former Systems of Government. The history of the present King of Great
Britain is a history of repeated injuries and usurpations, all having in direct object the
establishment of an absolute Tyranny over these States. To prove this, let Facts be submitted to a
candid world.
`

let decArray = declarationOfIndependence.split(' ');
let goodWords = [];
let wordsAndCount = [];

for(let i = 0; i < decArray.length; i++){
	if(decArray[i].length > 5){
		goodWords.push(decArray[i]);
	}
}


for(let i = 0; i < goodWords.length; i++){
	let foundValue = false;
	let indexAt = -1;
	for(let j = 0; j < wordsAndCount.length; j++){
		if(goodWords[i] === wordsAndCount[j].word) {
			foundValue = true;
			indexAt = j;
		}
	}
	if(foundValue === true) {
		wordsAndCount[indexAt].occurrence += 1;
	}
	else{
		wordsAndCount.push({'word': goodWords[i], 'occurrence': 1});
	}
}

console.log(wordsAndCount);

let mostest = 0;

for(let i = 1; i < wordsAndCount.length; i++){
	if(wordsAndCount[mostest].occurrence < wordsAndCount[i].occurrence){
		mostest = i;
	}
}

console.log('The most popular word is ' + wordsAndCount[mostest].word + ' at ' + wordsAndCount[mostest].occurrence);












