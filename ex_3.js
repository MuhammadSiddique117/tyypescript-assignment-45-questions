/*
 Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase
*/
var personName1 = "muhammadSiddique";
// lowerCase 
console.log(personName1.toLowerCase());
// uperCase
console.log(personName1.toUpperCase());
// titlecase
var firstLetter = personName1.charAt(0).toUpperCase();
var restLetter = personName1.slice(1).toLowerCase();
var titleCase = firstLetter + restLetter;
console.log(titleCase);
