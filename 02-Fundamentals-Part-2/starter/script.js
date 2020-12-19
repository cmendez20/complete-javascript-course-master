'use strict';

////////////////////////////////////////////////////////
// Activating Strict Mode
////////////////////////////////////////////////////////

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;

////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////
// function logger() {
//   console.log('My name is Chris')
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// // capture the juice return statement from the function into a variable
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// // Keep your code DRY - Don't Repeat Yourself
// // Functions are reusable code blocks to be used throughout your applications



////////////////////////////////////////////////////////
// Functions Declarations vs. Expressions
////////////////////////////////////////////////////////

// function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // function expression / and remember, expressions produce values. In fact, functions are a value and can be store in a variable.
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// }

// const age2 = calcAge2(1991);

// console.log(age1, age2);


//////////////////////////////////////////////////////
// Arrow Functions
//////////////////////////////////////////////////////
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntilRetirement(1998, Chris));
// console.log(yearsUntilRetirement(1980, Chris));


//////////////////////////////////////////////////////
// Functions Calling Other Functions
//////////////////////////////////////////////////////

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

//////////////////////////////////////////////////////
// Reviewing Functions
//////////////////////////////////////////////////////

// const calcAge = function(birthYear) {
//   return 2020 - birthYear;
// }

// const yearsUntilRetirement = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// }

// console.log(yearsUntilRetirement(1998, 'Chris'));
// console.log(yearsUntilRetirement(1950, 'Chris'));

/*
    Functions review: 3 different function types
    Function Declaration: function that can be used before it's declared
    Function Expression: essentially a function value stored in a variable
    Arrow Function: great for quick one-line functions, has no this keyword

    Three different ways of writing functions, but they all work in a similar way:
    receive input data, transform data, and then output data.
*/

//////////////////////////////////////////////////////
// Introduction to Arrays
//////////////////////////////////////////////////////

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Tomas', 'Jutes', 'Oven'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Keegan';
// console.log(friends);

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);

// // exercise
// const calcAge = function(birthYear) {
//   return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);




//////////////////////////////////////////////////////
// Basic Array Operations (Methods)
//////////////////////////////////////////////////////

// const friends = ['Tomas', 'Jutes', 'Oven'];

// // add elements
// const newLength = friends.push('Jay');
// console.log(friends);

// console.log(newLength);

// friends.unshift('John'); // returns length of new array, can save into a variable
// console.log(friends);

// // remove elements
// friends.pop(); // removes last element in an array
// const popped = friends.pop(); // returns the removed element
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf('Tomas'));

// console.log(friends.includes('Tomas'));



//////////////////////////////////////////////////////
// Introduction to Objects
//////////////////////////////////////////////////////

// const jonasArray = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven']
// ];

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// };

// we should use arrays for more ordered data and objects for more unstructured data


//////////////////////////////////////////////////////
// Dot vs. Bracket Notation
//////////////////////////////////////////////////////

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schedtmann',
//   age: 2037 - 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven']
// };

// console.log(jonas);

// console.log(jonas.lastName);
// // in dot notation, we have to use the real property name


// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);
// // in bracket notation, we can use computed values

// const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.');

// if(jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.');
// }

// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// // Challenge
// // 'Jonas has 3 friends, and his best friend is called Michael'

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);



//////////////////////////////////////////////////////
// Object Methods
//////////////////////////////////////////////////////

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,
  // need a function expression, a method is a property that is a function value
  // calcAge: function(birthYear) {
  //   return 2037 - birthYear;
  // }

  // calcAge: function () {
  //   // console.log(this);
  //   return 2037 - this.birthYear;
  // }

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    const driverStatement = this.hasDriversLicense ? 'a' : 'no';
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${driverStatement} driver's license`;
  }
};

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);


// console.log(jonas['calcAge'](1991));
console.log(jonas.getSummary());