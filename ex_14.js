/*
If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that
includes at least three people you’d like to invite to dinner. Then use your list to print a message to
each person, inviting them to dinner.

*/
var myFriends = ["Nisar", "sajjad", "Miskeen"];
// 1st method
//for(let i = 0; i < myFriends.length;i++){
//console.log(`Mr.${myFriends[i]}! you are invited to attend my birthday part on sunday\n`);
//}
// 2nd method
myFriends.map(function (ms) {
    console.log("Mr. ".concat(ms, "! you are invited to attend my birthday part on sunday\n"));
});
