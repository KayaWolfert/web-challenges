const peopleInSpace = document.querySelector('[data-js="people-in-space"]');
const nameSection = document.getElementById('names-of-people');
const allButton = document.getElementById('all');
const issButton = document.getElementById('iss');
const tiangongButton = document.getElementById('tiangong');

  async function getPeopleinSpace() {
    const response = await fetch ("http://api.open-notify.org/astros.json");
    const data = await response.json();
    peopleInSpace.textContent = data.number;
    

    issButton.addEventListener("click" , () => {
  
        nameSection.innerHTML = "";
       const peopleOnIss = people.filter((person) =>
       person.craft === "ISS");
       const newPeopleCards = createCard(peopleOnIss);
       nameSection.innerHTML = newPeopleCards;
      
      });

      return data;
  }


  
  getPeopleinSpace();

  async function getNamesOfPeople(){
    const object = await getPeopleinSpace();
    const people = object.people;


    people.forEach((person) => {
        const listItem = createCard(person);
        nameSection.append(listItem);
        
    });
    
 
    

  }

  getNamesOfPeople();

  function createCard(person){
    
   const listItem = document.createElement('li');
   listItem.classList.add('list-item');
   
   listItem.innerHTML = ` <b>Name</b>: ${person.name}  <br>
   <b>Craft</b>:${person.craft}`;
  return listItem;


  }

  createCard(person);


