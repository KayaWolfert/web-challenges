console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const errorDisplay = document.querySelector('p');

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    try {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    errorDisplay.innerHTML = "";
    return a / b;

  } catch (error){
    errorDisplay.innerHTML = "Please choose another number than 0";
    console.log("Please choose another number than 0");
  }
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  output.innerText = operations[operation](firstNumber, secondNumber);
});
