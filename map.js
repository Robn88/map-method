  
// /**
//  * To run this file in Gitpod, use the 
//  * command node map.js in the terminal
//  */

// // Using a for loop
// let nums = [1, 2, 3, 4, 5];
// let results = [];

// for (let num of nums) {
//   results.push(num * 2);
// }

// console.log(results);

// // Using map()

// const multByTwo = function (num) {
//   return num * 2;
// }
// const mapResults = nums.map(multByTwo);
// console.log(mapResults);

// // Simplified w/ map()

// // const simplified = nums.map(function (num) { return num * 2});


// // Simplfied w/ map() + arrow function
// const simplified = nums.map( (num) => num * 2);
// console.log("This is simplified:", simplified);

// // With objects:
// const students = [
//   {
//     id: 1,
//     name: 'Mark',
//     profession: 'Developer',
//     skill: 'JavaScript'
//   },
//   {
//     id: 2,
//     name: 'Ariel',
//     profession: 'Developer',
//     skill: 'HTML'
//   },
//   {
//     id: 3,
//     name: 'Jason',
//     profession: 'Designer',
//     skill: 'CSS'
//   },
// ];

// // const studentsWithIds = students.map(student => [student.name, student.id]);
// // console.log(studentsWithIds);

// const studentsWithIds = students.map(student => [student.name, student.id]);
// console.log(studentsWithIds);



//////////////////////////Extra practice

// double a number

let doubleNumbers = [2, 5, 100]

const timesTwo = doubleNumbers.map( doubles => doubles * 2);
console.log(timesTwo);


// convert array of numbers into strings

let arrayOfNums = [13, 25, 46, 87]

const numsToStrings = arrayOfNums.map( nums => nums.toString())
console.log(arrayOfNums);
console.log(numsToStrings);


// capitalize first letters of strings

let uncapitalizedStrings = ['jean-claude', 'barrels of fun', 'cHEESE', 'pomegranate']

const capitalizeThis = uncapitalizedStrings.map( strings => strings.charAt(0).toUpperCase()+ strings.slice(1));

console.log(capitalizeThis);

// return only first names from an array

let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 93, maths: 77, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 87, art: 95},
  }
];

let firstNamesOnly = students.map( info => info.name);

console.log(firstNamesOnly);