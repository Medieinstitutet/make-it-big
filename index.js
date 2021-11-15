const stringToUpperCase = str => str.toUpperCase();
const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  !form.userInput.value
    ? form.userInput.setAttribute('placeholder', 'Ange ditt namn...')
    : (form.userInput.value = stringToUpperCase(form.userInput.value));
});
