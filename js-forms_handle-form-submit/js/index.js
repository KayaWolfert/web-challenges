console.clear();

const form = document.querySelector('[data-js="form"]');

/* Use JavaScript to react to the form submission.

Log all form data (in object form) into the console in the submit event handler.

Make sure the form is reset and the First Name input is focused after submission.
*/

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    console.log(data);
    event.target.reset();
    
    const formElements = event.target.elements;
    formElements.firstName.focus();
    

});

