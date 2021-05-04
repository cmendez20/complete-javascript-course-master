/*

Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

*/

/* 
const calcAverageHumanAge = function (agesDog) {
  // CONVERT DOG AGE TO HUMAN AGE
  const agesHuman = agesDog.map(function (age) {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });

  // FILTER OUT DOGS THAT ARE LESS THAN 18 HUMAN YEARS OLD
  const agesHumanAdultDogs = agesHuman.filter(age => age >= 18);

  // CALCULATE AVG AGE OF HUMAN AGE ADULT DOGS (44)
  const avgHumanAge = Math.trunc(
    agesHumanAdultDogs.reduce((acc, age, i, arr) => acc + age / arr.length, 0)
  );

  return avgHumanAge;

  // console.log(agesHuman);
  // console.log(agesHumanAdultDogs);
  // console.log(avgHumanAge);
};

*/

/*
/// CODING CHALLENGE 03
Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
as an arrow function, and using chaining!
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
*/

const calcAverageHumanAge = agesDog =>
  agesDog
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge >= 18)
    .reduce((acc, adultAge, i, arr) => acc + adultAge / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
