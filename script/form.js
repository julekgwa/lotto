'use strict';

const inputs = ['answer', 'id', 'name', 'email', 'surname', 'cell', 'terms'];
const resultContainer = document.getElementById('submitted-container');
const formContainer = document.getElementById('form-container');

function validateForm() {
  let valid = true;
  inputs.forEach((input) => {
    const el = document.getElementById(input);

    if (!el.value || (input === 'terms' && !el.checked)) {
      el.classList.add(input === 'terms' ? 'unchecked' : 'invalid');
      valid = false;
    } else {
      el.classList.remove('invalid', 'unchecked');
    }
  });

  if (valid) {
    console.log('Form submitted');
    resultContainer.style.display = 'block';
    formContainer.style.display = 'none';
  } else {
    resultContainer.style.display = 'none';
    formContainer.style.display = 'block';
  }
}
