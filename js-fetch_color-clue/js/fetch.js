import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;
  const response = await fetch(colorApiUrl);
  const data = await response.json();
  console.log(data);
  const hexValue = data.name.closest_named_hex;
  const closestName = data.name.value;

  setColorToGuess(hexValue,closestName);
  

  /**
   * async function fetchData() {
  const response = await fetch("/url/to/something");
  const data = await response.json();
  return data;
}
   * 1. Use the `fetch()` function to get data from the Color API.
2. Use the `.json()` method to parse the body of 
the response and convert it into an object.
3. Inspect the parsed object (e.g. by logging it to the console)
 and find the hex value and name of the closest named color.
4. Call the `setColorToGuess()` 
function with the hex value and name of the closest named color.
5. Guess colors! 🎉
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */

  // --v-- your code here --v--

  // --^-- your code here --^--
}

