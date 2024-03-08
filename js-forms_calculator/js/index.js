console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  const form = new FormData(event.target);
  const formData = Object.fromEntries(form);

  const numberA = parseInt(formData.numberA, 10);
  const numberB = parseInt(formData.numberB, 10);

  if (formData.operator === "addition"){
    result = add(numberA,numberB);
  } else if (formData.operator === "subtraction"){
    result = subtract(numberA,numberB);
  } else if (formData.operator === "multiplication"){
    result = multiply(numberA,numberB);
  } else if (formData.operator === "divison"){
    result = divide(numberA,numberB);
  } else {
    result = null;
  }

  resultOutput.textContent = result;
});

/*

 Divison funktioniert nicht. Warum?

 Wo kommt dieser Vergleichswert her, 
 ob etwas addition oder substraction etc. ist?
 wird da mit der ID oder dem value des radio-
 input feldes verglichen??
 
*/