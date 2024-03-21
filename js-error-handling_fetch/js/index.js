console.clear();

const userElement = document.querySelector(".user");
const errorDisplay = document.querySelector(".error");

async function getUser(url) {
  try { 
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error ("User can't be found");
    }
  
  const json = await response.json();
  errorDisplay.innerHTML = "";
  return json.data;
  
} catch(error) {
 errorDisplay.textContent = error.message;
 userElement.innerHTML = "";
}

}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
   
    userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
    `;
  })
);

/*
This application fetches information from the https://reqres.in 
API, but some buttons are trying to retrieve information from
 problematic URLs.

Handle the corresponding exceptions in the JS code and
display an error message in the `.error` element accordingly.

Don't forget to clear the error if the fetch operation 
is successful! */