console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "h4x0r1337";

if (receivedPassword===SUPER_SECRET_PASSWORD){
    console.log("Welcome! You are logged in as Brunhilde1984");
} else {
    console.log("Acces denied");
}



// Part 2: Even / Odd
const number = 9;

if(number % 2 ){
    console.log("odd number");
} else {
    console.log("even number");
}


// Part 3: Hotdogs
const numberOfHotdogs = 99000000;

if (numberOfHotdogs < 5) {
    console.log(numberOfHotdogs * 2);
} else if (numberOfHotdogs < 100) {
    console.log(numberOfHotdogs * 1.5);
} else if (numberOfHotdogs < 1000000){
    console.log(numberOfHotdogs * 1);
} else {
    console.log(numberOfHotdogs * 0.1);
}



// Part 4: Daytime
const currentHour = 19;

const statement = currentHour <= 17 ? "Still need to learn..." : "Partytime!!!" ;

console.log(statement);


// Part 5: Greeting
const name = "Archibald";

const coach = "Roland";

const greeting = "Hello " + ( name === coach ? "coach" :  name )+ "!";

console.log(greeting);

//- use a ternary operator inside the round brackets to complete the `greeting` as follows.
// if the variable `name` is equal to the name of your coach, the `greeting` should read "Hello Coach!"
//- otherwise the string saved in `name` should be used instead, e.g.:
//  ```js
 // const name = "Archibald";
  // logs "Hello Archibald!"
  
 // change the value of `name` to check if the ternary operator works properly.
