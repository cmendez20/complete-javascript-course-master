'use strict';

// document query selector grabs the element with the message class.
// Then, the dot operator grabs the text content property on that element

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // The first sceanario is to assume that there is no input. Then, respond accordingly.
    document.querySelector('.message').textContent = '⛔ No number!';
  }
});
