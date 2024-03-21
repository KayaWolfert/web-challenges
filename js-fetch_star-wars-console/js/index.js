console.clear();

const url = "https://swapi.dev/api/people";

async function fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.results);
    console.log(data.results[2].eye_color);
    
}

fetchData();

/*
Have a look at the [`js/index.js`](./js/index.js) file: There is an `url` 
variable and an empty `fetchData()` function.

Inside of the `fetchData()` function, use the `url` variable
 to fetch data from the Star Wars API.

Log the fetched data to the console and play around with it:

- log the entire data object
- log different values of the data object
- Bonus: Can you log the eye color of R2-D2?

The following hints may guide you:

- make sure to wait for all asynchronous operations

async function fetchData() {
  const response = await fetch("/url/to/something");
  const data = await response.json();
  return data;
}
 */
