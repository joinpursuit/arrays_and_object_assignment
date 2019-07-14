
let cat = {};
cat = {
  genus: 'Felis',
  species: 'Catus',
};
console.log(cat);
for (let key in cat) {
  console.log(key, cat[key]);
  cat.color = 'black';
};

if (cat.hasOwnProperty('texture')) {
  console.log('texture' + cat.texture);
}

//2
console.log('2 it would be false === because string values are immutable')

//3
let spanishNumbers = {
  1: 'uno',
  2: 'dos',
  3: 'tres',
  4: 'quatro',
  5: 'cinco',
};
console.log(spanishNumbers);
let spanishKey = Object.keys(spanishNumbers);
let spanishValues = Object.values(spanishNumbers);
console.log(spanishKey);
console.log(spanishValues);
console.log(spanishNumbers[0]);

//4
let car = {};
car = {
  color: 'red',
  engine: 'v8',
  type: 'benz',
};

let carKeys = Object.keys(car);
console.log(carKeys);
let carValues = Object.values(car);

//5
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
  console.log(films[i].director)
}

//6
let people = [
    {
      firstName: 'Calvin',
        lastName: 'Newton',
    },
    {
        firstName: 'Garry',
        lastName: 'Mckenzie',
    },
    {
        firstName: 'Leah',
        lastName: 'Rivera',
    },
    {
        firstName: 'Sonja',
        lastName: 'Moreno',
    },
    {
        firstName: 'Noel',
        lastName: 'Bowen',
    }
]
let fullNames = [];
for(let i = 0; i < people.length; i++) {
  fullNames.push(people[i].firstName + " firstName " + people[i])
}
console.log(fullNames)


//7
//var myString = 'Were flooding people with information'
//'We need to feed it through a processor. A human must turn information into intelligence or knowledge.
 //tended to forget that no computer will ever ask a ne question.'

//8
let deposits = {
  Williams: [300.65, 270.45, 24.70, 52.00, 99.99],
  Cooper: [200.56, 55.00, 600.78, 305.15, 410.76, 35.00],
  Davies: [400.98, 56.98, 300.00],
  Clark: [555.23, 45.67, 99.95, 80.76, 56.99, 46.50, 265.70],
  Johnson: [12.56, 300.00, 640.50, 255.60, 26.88],
};

let sum = 0;
for (let r = 0; r < deposits.length; r++) {
  deposits += sum[r];
}

console.log(sum);
