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

const calcAge = function(birthYear) {
  return 2020 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
}

console.log(yearsUntilRetirement(1998, 'Chris'));
console.log(yearsUntilRetirement(1950, 'Chris'));

/*
    Functions review: 3 different function types
    Function Declaration: function that can be used before it's declared
    Function Expression: essentially a function value stored in a variable
    Arrow Function: great for quick one-line functions, has no this keyword

    Three different ways of writing functions, but they all work in a similar way:
    receive input data, transform data, and then output data.
*/