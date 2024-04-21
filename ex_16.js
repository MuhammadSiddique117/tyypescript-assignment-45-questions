/*
You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list
*/
var myFriends = ["Nisar", "sajjad", "Miskeen"];
console.log(myFriends);
console.log("we have 3 more friends to invite on my birthday party\n");
// adding three more friends
//add at beginning
myFriends.unshift("Ali Gohar", "Naseer", "Ashiq");
//  ["Ali Gohar", "Naseer" Ashiq "Nisar", "sajjad", "Miskeen"];
console.log(myFriends);
// adding at middle
myFriends.splice(2, 0, "Shaman");
console.log(myFriends);
// add at last
myFriends.push("Ali Hassan");
console.log(myFriends);
// print all friends along with message
for (var i = 0; i < myFriends.length; i++) {
    console.log("Mr. ".concat(myFriends[i], " you are invited to attend my birthday party"));
}
