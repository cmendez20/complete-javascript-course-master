'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      const str = `Oh, and you are a millenial, ${firstName}.`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    add(2, 3);
  }

  printAge();

  return age;
}

const firstName = 'Chris';
calcAge(1991);
