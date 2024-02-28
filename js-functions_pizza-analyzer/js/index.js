console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  // write your code here
});

pizzaInput2.addEventListener("input", () => {
  // write your code here
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(diameter1,diameter2){
  let area1 = (diameter1 / 2) **2 *Math.PI ;
  let area2 = (diameter2 / 2) **2 *Math.PI ;
  let pizzaGain = (area2 - area1) / area1 * 100;

  console.log("size of area 1 is: " +area1);
  console.log("size of area 2 is: " +area2);
  output.textContent= Math.round(pizzaGain) ;
  
  }

  calculatePizzaGain(24,25);

   /* 

4. Set the `textContent` of the output element to that value. 
Use `Math.round(calculatedValue)` to round the pizza gain to
the next whole integer value.

5. Inside both event listeners, save the current values of both 
pizza inputs in two variables `pizzaSize1` and `pizzaSize2`
   > 💡 You can use the queried elements and get their value 
   like this: `pizzaInput.value`
6. Now call the function and pass in the two pizza sizes as 
the arguments.


// Task 2
// define the function updatePizzaDisplay here

// Task 3
// define the function updateOutputColor here


*/


 

  