/*
 Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
and titlecase
*/
const personName1: string = "muhammadSiddique";


// lowerCase 
console.log(personName1.toLowerCase());


// uperCase
console.log(personName1.toUpperCase());


// titlecase
let firstLetter: string = personName1.charAt(0).toUpperCase();
let restLetter: string = personName1.slice(1).toLowerCase();

let titleCase = firstLetter + restLetter;

console.log(titleCase)