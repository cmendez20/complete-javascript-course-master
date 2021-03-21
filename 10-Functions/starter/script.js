'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   // ES5 Way to Set Default Parameters
//   //numPassengers = numPassengers || 1;
//   //price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// // setting a parameter as undefined is the same thing as not setting the parameter, thus, falling back to the default parameter
// createBooking('LH123', undefined, 1000);

const flight = 'LH234';
const chris = {
  name: 'Chris Mendez',
  passport: 23739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 23739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

checkIn(flight, chris);

console.log(flight);
console.log(chris);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(chris);
checkIn(flight, chris);

// Dealing with functions:
// 1) Passing by value
// 2) Passing by reference (JavaScript DOES NOT have passing by reference)
// Only passsing by value
// The reference of objects is a value, an address. Not a reference!
