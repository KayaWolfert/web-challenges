import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id:1,
      name: '🍌 banana',
      color: 'yellow',
    },
    {
      id:2,
      name: '🥝 kiwi',
      color: 'green',
    },
    {
      id:3,
      name: '🍊 orange',
      color: 'orange',
    },
    {
      id:4,
      name: '🫐 blueberry',
      color: 'blue',
    },
    {
      id:5,
      name: '🍒 cherry',
      color: 'red',
    },

  ];

  return (
  <>
    {fruits.map((fruit) => {

      return( <div key={fruit.id}>
         <Card id={fruit.id}
         name={fruit.name}
         color = {fruit.color}

         />
         
         </div>

      );
    
    })}
    </>
  );
}

/* 
      {pokemons.map((pokemon) => {
          return (
            <li key={pokemon.id}>
              <PokemonCard
                id={pokemon.id}
                name={pokemon.name}
                types={pokemon.types}
                image={pokemon.image}
              />
            </li>


For now, the `./src/App.js` file uses a `Card` component to render the text
 "banana". This is easy to handle if you only have a single use case.
Most often, however, you have an array of objects and want 
to dynamically render a component (like `Card`) for each of these objects.

## Task

Create an array 'fruits'. 
It should contain at least 5 objects which all have the properties 
'name', 'id', 'color', e.g.:

```
{
  id: 1337,
  name: '🍌 Banana',
  color: 'yellow',
}
```

- Hint: the ids need to be unique.

Use the array method `map` to create a 
Card component for each fruit in your array. Use 
the name of each object as the text of the component and the id as the key prop.

## Bonus

Change the `Card` component so that it receives a `color` prop and set 
the background-color of the Card to this value. Use the color property
 of each fruit object for this prop.

- Hint: check the `./src/components/Card.css` file for 
some cues as to how to handle having the colors change automatically*/