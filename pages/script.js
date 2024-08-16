/*!
  Form error handling, etc.
*/

const FORM = document.querySelector('form');
// const ERROR = FORM.querySelector('#error');

FORM.addEventListener('submit', (ev) => {
  ev.preventDefault();

  const inputElem = ev.target.elements.name;
  const errorElem = ev.target.elements.error;
  if (inputElem.value.length === 0) {
    errorElem.value = 'Error. The name should not be blank.';
    inputElem.setCustomValidity('Error. The name should not be blank.');
  }

  console.log('Form submit:', ev.target.elements.name.validity, ev);
});
