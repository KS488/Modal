'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsShowModal = document.querySelectorAll('.show-modal');
console.log(btnsShowModal);

const openModal = function () {       
    modal.classList.remove('hidden');// manupilates the css classes // deactivates the hidden style
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden'); // manupilates the css classes //Acctivates the hiden styles
    overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
    btnsShowModal[i].addEventListener('click', openModal);
};

btnCloseModal.addEventListener('click', closeModal);  // as you can see we dont write the closeModal function as closeModal() becouse jaavascript  will run this line automatically  
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' &&!modal.classList.contains('hidden')) {    
         closeModal()          
    };
}) // key down is fired as soon as you press down on the key 