'use strict';

// HTML Variables
const openContactModal = document.querySelector('#show-contact');
const closeContactModal = document.querySelector('.close-modal');
const contactModal = document.querySelector('.modal');
const overContactModal = document.querySelector('#modal-content');

// Open Contact Me Modal function
const openModal = function () {
  contactModal.classList.remove('hidden');
};

// Close Contact Me Modal function
const closeModal = function () {
  contactModal.classList.add('hidden');
};

// Open Modal Event Listener
openContactModal.addEventListener('click', openModal);

// Close Modal Event Listener
closeContactModal.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !contactModal.classList.contains('hidden')) {
    closeModal();
  }
});
contactModal.addEventListener('click', function (event) {
  if (event.target === contactModal) {
    closeModal();
  }
});
