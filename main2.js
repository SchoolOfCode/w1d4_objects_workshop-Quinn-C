/* 👉 Copy this object into a new linked JavaScript file or script tag within html or a fresh browser console.

let person = {
  name: "Ben",
  likesChocolate: true,
};
👉 Below it write an if statement that will console.log "Ben loves chocolate" if likesChocolate has a value of true else console.log "Ben hates chocolate". 
The condition for the if, and the name Ben should both be read from the object using dot notation.

👉 Change the object's values and re run your code, the name and the boolean should effect how your program runs.*/
//Task2
let person = {
    name: "Ben",
    likesChocolate: true,
};

person.name = "Joan";
person.likesChocolate = false;

if (person.likesChocolate === true) {
    console.log(`${person.name} loves chocolate`);
} else {
    console.log(`${person.name} hates chocolate`);
};