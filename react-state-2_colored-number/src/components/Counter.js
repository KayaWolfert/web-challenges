import { useState } from "react";
import ColoredNumber from "./ColoredNumber";
 

export default function Counter() {
  const [count, setCount] = useState(0);
  
  function AddOne(){
   setCount(count + 1);  
  }

  function SubtractOne(){
    setCount(count - 1);
  }
  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={count} />
      <div className="counter__buttons-container">
        <button
          onClick = {AddOne}
          type="button"
          className="counter__button"
          aria-label="increment count"
        >
          +
        </button>
        <button
          onClick = {SubtractOne}
          type="button"
          className="counter__button"
          aria-label="decrement count"
        >
          -
        </button>
      </div>
    </div>
  );
}

/* 
This challenge provides a `./src/components/Counter.js`component with
 two buttons which shall increment or decrement a count.

This count is then used by the `./src/components/ColoredNumber.js` 
component to display the actual number while its color is depending on the value.

For now, however, clicking the buttons doesn't change anything. 
Let's use state to fix that.

## Task

Refactor the `./src/components/Counter.js` 
component so that it updates the displayed number when clicking a button.

You can use the following hints as guideline:

- Looks like the `Counter` needs a state; 
can you think of an appropriate initial value?
- You need to pass the current count to the `ColoredNumber` 
component as the `value` prop.
- The buttons need to update the state accordingly,
 how can you achieve that? */