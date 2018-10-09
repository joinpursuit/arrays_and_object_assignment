// 1.

// let cars = [ "ferrari", "bugatti", "rigatoni"]
// console.log(cars[cars.length-1]);

// 2.

// let cars = [ "ferrari", "bugatti", "rigatoni"]
// cars[0] = "something else"
//
// console.log(cars);

// 3. Add "mango" to the end  array.

// let cars = [ "ferrari", "bugatti", "rigatoni"]
// cars.push("mango");
// console.log(cars);

// 4. Add "blueberry" to the front of the same cars array.
//  Unshift
// To add an element to the beginning of the array use the method: unshift.

// let cars = [ "ferrari", "bugatti", "rigatoni"]
// cars.unshift("blueberry");
// console.log(cars);

// 5. Remove the last element of the fruits array.

// let cars = [ "ferrari", "bugatti", "rigatoni"]
// cars.pop("");
// console.log(cars);

// 6. console.log the length of the fruits array.
// let cars = [ "ferrari", "bugatti", "rigatoni"]
//
// console.log(cars.length);

// 7. Remove the first element of the fruits array.

// let cars = [ "ferrari", "bugatti", "rigatoni"]
// cars.shift("");
// console.log(cars);

 // 8. Join all the elements in the fruits array with a '$'.
 // let cars = [ "ferrari", "bugatti", "rigatoni"]
 //
 // console.log(cars.join("$"));

// 9.Write a `longestArr` code block that takes in two array variables.
// The code block should compare the length of the two arrays and log whichever array is longer
// (aka whichever array has more values in it).
// If the lengths of the two arrays are equal, then log null.

// longestArr = (["red", "blue","green","yellow"],["magenta","cyan","maroon","black","white"]);
// if (longestArr[1] < longestArr[2])[
//   console.log (" There are more colors in the second array")
// ]

// 10.  Write a `middleElement` code block that takes an array varialbe and logs the middle element of that array.
//      If the array has an even number of elements, the function should log "Oops, there's no middle..."
// let animals = (['dog', 'cat', 'bat', 'octopus', 'chinchilla','ferret']);
// let middleElement = Math.floor(animals.length/2);
// if (animals.length % 2 === 0 ){
//   console.log ( "Oops, there is no middle element")
// } else console.log (animals[middleElement]);{
//
// }

// 11. Write a `sumArray` code block that takes as varaible array of numbers and logs the sum of all these numbers.
// let arr = [1, 2, 3, 4, 5, 6];
// sumArray = 0;
// for ( i = 0; i < arr.length; i++) {;
//   sumArray += arr[i];
// }
// console.log(sumArray);

// 12. Write a `range` code block that takes two number variables: min and max.
// The block will log an array with all the numbers, inclusive, between min and max.
// let min = 3
// let max = 10
// let range = []
//  for ( i= min; i <= max; i++){
// range.push(i)
//
//  }
// console.log(range);

// // 13 Write a `rangeWithStep` code block that takes three number variables: min, max and step.
//       The block will log an array with all the numbers, inclusive, between min and max, ,
//       going up in increments equal to step.

// let min = 2
// let max = 15
// let rangeWithStep = []
//    for ( i = min; i <= max; i+= 4){
//
//
//      rangeWithStep.push(i);
//
//
//    }
//    console.log(rangeWithStep)
//

// 14 Write a `doubleTrouble` code block that takes in a varialbe array of numbers.
// The block should log a new array that doubles every number from the original array.

// doubleTrouble([1, 2, 3]);
// returns [2, 4, 6]

// The Array.from() method creates a new, shallow-copied Array instance
// from an array-like or iterable object.
//
// let numbers = [2,9,10,12,3]
// let dblNumbers = Array.from(numbers, b => b *2)
// console.log (dblNumbers)

//15.
//
// let arr = [ 1,3,4,10,20];
// let target = 7 ;
// let results = [];


//       for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//           if (arr[i] + arr[j] === target) {
//             results.push(i,j);
//
//           }
//         }
//       }
// console.log (results) //[  1 ,  2  ]
//
