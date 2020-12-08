// let js = 'amazing';
// // if (js === 'amazing') alert('JavaScript is FUN!');

// console.log(40 + 8 + 23 - 10);

// let firstName = 'Jonas';
// let first = 'jonas';
// let firstNamePerson = 'chris';

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 2);

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);
// // console.log(`${firstName} ${lastName}`);

// let x = 10 + 5;
// x += 10;
// console.log(x);

////////////////////////////////////
//  Type Conversion
///////////////////////////////////
/* 
const inputYear = '1991';
console.log(Number(inputYear), (inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Chris'));
console.log(typeof NaN);
// NaN is a number, but it is an invalid one.

console.log(String(23), 23);

////////////////////////////////////
//  Type Coercion
///////////////////////////////////
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);

let n = '1' + 1;
n = n - 1;
console.log(n);

*/

////////////////////////////////////
//  5 Falsy Values: 0, "", undefined, null, NaN
///////////////////////////////////

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if(height) {
//   console.log('Yay! Height is defined!');
// } else {
//   console.log('Height is UNDEFINED');
// }

////////////////////////////////////
//  Equality Operators: == vs. ===
///////////////////////////////////
const age = 19;
if (age === 18) console.log('You just became an adult :D');

////////////////////////////////////
//  The Switch Statement
///////////////////////////////////

const day = 'friday';

switch(day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

////////////////////////////////////
//  Statements and Expressions
///////////////////////////////////

if (23 > 10) {
  const str = '23 is bigger';
}

// expressions produce values and statements translate our actions that we want to perform
const me = 'Chris';
console.log(`I'm ${2037 - 1998} years old ${me}`);