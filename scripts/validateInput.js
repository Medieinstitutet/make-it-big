import { nameRegex } from './nameRegex.js';
import { stringToUpperCase } from '../utils/stringToUpperCase.js';
import { renderFeedbackMessage } from './renderFeedbackMessage.js';

const form = document.querySelector('form');

export const validateInput = userInput => {
  if (nameRegex.test(userInput)) {
    form.username.value = stringToUpperCase(userInput);
    renderFeedbackMessage('success', form);
  } else {
    renderFeedbackMessage('error', form);
  }
};
