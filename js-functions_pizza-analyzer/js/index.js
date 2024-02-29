console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1,pizzaSize2);
  updatePizzaDisplay(pizza1,pizzaInput1.value);
  updateOutputColor(pizzaInput1.value,pizzaInput2.value);
  
});

pizzaInput2.addEventListener("input", () => {
  let pizzaSize1 = pizzaInput1.value;
  let pizzaSize2 = pizzaInput2.value;
  calculatePizzaGain(pizzaSize1,pizzaSize2);
  updatePizzaDisplay(pizza2,pizzaInput2.value);
  updateOutputColor(pizzaInput1.value,pizzaInput2.value);
  
});


function calculatePizzaGain(diameter1,diameter2){
  let area1 = (diameter1 / 2) **2 *Math.PI ;
  let area2 = (diameter2 / 2) **2 *Math.PI ;
  let pizzaGain = (area2 - area1) / area1 * 100;
  output.textContent= Math.round(pizzaGain) ;
  }

  
  function updatePizzaDisplay (pizzaElement,newSize){
    const width = (newSize / 24) *100 ;
    pizzaElement.style.width = width + "px";
  }


  function updateOutputColor(size1,size2){
    if (size1 > size2){
      outputSection.style.backgroundColor = "var(--red)";

    } else {
      outputSection.style.backgroundColor = "var(--green)";
    }
  }
   


 

  