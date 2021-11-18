const form = document.querySelector('form');

const stringToUpperCase = str => str.toUpperCase();

const renderFeedbackMessage = status => {
  let template;
  status === 'success'
    ? (template = '<p class="success">This is your name in all uppercase</p>')
    : (template = '<p class="error">Enter a valid name!</p>');
  document.body.lastElementChild.remove();
  form.insertAdjacentHTML('afterend', template);
};

const validateInput = userInput => {
  const nameRegex = /^[a-zA-Z\s]*$/;
  if (nameRegex.test(userInput)) {
    form.username.value = stringToUpperCase(userInput);
    renderFeedbackMessage('success');
  } else {
    renderFeedbackMessage('error');
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInput(form.username.value);
});
