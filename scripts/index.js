const form = document.querySelector('form');
const errorParagraph = document.querySelector('p');
const nameRegex = /^[a-zA-Z]{2,}$/;

const stringToUpperCase = str => str.toUpperCase();

form.addEventListener('submit', e => {
  e.preventDefault();
  if (nameRegex.test(form.username.value)) {
    form.username.value = stringToUpperCase(form.username.value);
    errorParagraph.textContent = '';
  } else {
    errorParagraph.textContent = 'Please, enter a valid name';
  }
});
