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

// We are basically listening to events everywhere. So, no matter where it happens on the page, we are listening for them. 
// keyup, only happens when we lift our finger up
// keypress, when we press the key
// keydown, when we press down on the key    
document.addEventListener('keydown', function(e) {
  // hey JavaScript, call this function when a keydown event occurs. And when you do, please pass the event object as an argument  
  // console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});