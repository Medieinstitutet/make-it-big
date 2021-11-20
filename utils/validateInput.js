import { stringToUpperCase } from '../utils/stringToUpperCase.js';
import { renderFeedbackMessage } from '../utils/renderFeedbackMessage.js';

const form = document.querySelector('form');

export const validateInput = userInput => {
  const nameRegex = /^[a-z\s]+$/gi;
  if (nameRegex.test(userInput)) {
    form.username.value = stringToUpperCase(userInput);
    renderFeedbackMessage('success', form);
  } else {
    renderFeedbackMessage('error', form);
  }
};
