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

// Open Modal Events Listener
openContactModal.addEventListener('click', openModal);

// Close Modal Events Listener
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

// Weather API
const weatherTemp = document.querySelector('#weather-temp');

fetch(
  'https://api.open-meteo.com/v1/forecast?latitude=29.07&longitude=-110.96&current_weather=true',
)
  .then(response => response.json())
  .then(data => {
    const temp = data.current_weather.temperature;
    weatherTemp.textContent = `🌡 ${temp}°C`;
  })
  .catch(error => {
    weatherTemp.textContent = 'N/A';
  });
