const peopleInSpace = document.querySelector('[data-js="people-in-space"]');
const nameSection = document.getElementById('names-of-people');


  async function getPeopleinSpace() {
    const response = await fetch ("http://api.open-notify.org/astros.json");
    const data = await response.json();
    console.log("data: ", data);
    peopleInSpace.textContent = data.number;
    return data;
  }

  
  getPeopleinSpace();

  async function getNamesOfPeople(){
    const object = await getPeopleinSpace();
    const people = object.people;
    console.log(people);

    people.forEach(person => {
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

  createCard();
  