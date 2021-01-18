'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function() {
  // do not use a dot for remove, that is only for selecting.
  // here we are only passing in the string name of the class to remove.
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

// There are no paranthesis on the closeModal function b/c we do not want to run the function right away,
// we want to run the function only when the user clicks on the btnClose element.
btnCloseModal.addEventListener('click', closeModal);  
overlay.addEventListener('click', closeModal);