import { validateInput } from './validateInput.js';

const form = document.querySelector('form');

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInput(form.username.value);
});

console.log('testing GIT after renaming Javascript course root folder');
