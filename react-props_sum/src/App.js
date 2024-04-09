import React from "react";
import "./styles.css";

export default function App() {
  return <h1> <Sum valueA={1} valueB={4} /></h1>;
}

function Sum({valueA, valueB}){
const sum =  valueA + valueB;
return <h1>{valueA} + {valueB} = {sum} </h1>;
}
/* Look at the `./src/App.js` file: the `App` component returns a default heading element 
which you need to replace with a custom component. Your task is to write a `Sum` component
 which calculates the sum of its two props and renders the result.

- Write the `Sum` component inside of the `src/App.js`.
  - It accepts two props called `valueA` and `valueB` (make sure to destructure them).
  - It returns an HTML element and uses both props to dynamically render something like
   "1 + 2 = 3" (according to the props).
- Inside of the return statement of your `App` component, 
replace the heading with your `Sum` component and pass it both props with values of your choice.*/