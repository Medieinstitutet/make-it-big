export const renderFeedbackMessage = (status, element) => {
  const template =
    status === 'success'
      ? '<p class="success">This is your name in all uppercase</p>'
      : '<p class="error">Enter a valid name!</p>';
  document.body.lastElementChild.remove();
  element.insertAdjacentHTML('afterend', template);
};
