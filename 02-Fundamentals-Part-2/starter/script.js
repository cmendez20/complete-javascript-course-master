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
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// function expression / and remember, expressions produce values. In fact, functions are a value and can be store in a variable.
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age1, age2);