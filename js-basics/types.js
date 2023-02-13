// TYPES

console.log(typeof "hello"); // => 'string'
console.log(typeof 42); // => 'number'
console.log(typeof false); // => 'boolean'
console.log(typeof {}); // => 'object'

// Parse a string to integer
const number = Number.parseInt('42', 10);

// Parse a number to string
const string = (42).toString();

const array = [ 'Hello', 'Le', 'Wagon', 42 ];
const object =  { name: 'bob', age: 42 }; // OR { 'name': 'bob', 'age': 42 } (the exact same)


// VARIABLES

const helloString = 'hello'; // constants CAN'T be re-assigned
let zeroNumber = 0; // let variables CAN be re-assigned
zeroNumber =+ 1;
console.log(zeroNumber);


// STRINGS

const firstName = "Paul";
const lastName = 'McCartney';

console.log(firstName.length); // => 4
console.log(firstName[1]); // => 'a'
console.log(firstName.substring(1, 3)); // => 'au'


console.log(firstName.toUpperCase());
// => "PAUL"
console.log(firstName.toLowerCase());
// => "paul"


const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthString.split(',');
console.log(Array.isArray(months)); // => true
console.log(months.length); // => 12

// INTERPOLATION

const message = `Hello, ${firstName} ${lastName}`;
console.log(message); // 'Hello, Paul MacCartney'


// ARRAYS

const fruits = ['apple'];

fruits.push('banana'); // CREATE
const fruit = fruits[0]; // READ
fruits[0] = 'kiwi'; // UPDATE
fruits.splice(1); // DELETE

console.log(fruits); // => ['apple']
console.log(fruit); // => 'apple'

const beatles = ["paul", "john", "ringo", "george"];

beatles.forEach((beatle) => {
  console.log(beatle.toUpperCase());
});

const uppercasedBeatles = beatles.map((beatle) => {
  return beatle.toUpperCase();
});

console.log(uppercasedBeatles); // => ['PAUL', 'JOHN', 'RINGO', 'GEORGE']

const age = 19;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
} // => "You can vote"


// OBJECTS

const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

student.age = 32; // CREATE
student['age'] = 32; // CREATE
const firstName = student.firstName; // READ
student.age = 40; // UPDATE
delete student.age; // DELETE
student.age = undefined; // DELETE

// Iterate over an object
Object.keys(student).forEach((key) => {
  console.log(student[key]);
});

// Object.values(student); // => values
// Object.entries(student); // => [key, value];


// FUNCTIONS

const sentence = 'hello world';

const capitalize = (string) => {
  const firstLetter = string[0].toUpperCase();
  const restOfString = string.substring(1);

  return `${firstLetter}${restOfString}`;
};

capitalize(string); // => "Hello world";
