/*
Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list
that stores several examples. Use your list to print a series of statements about these items, such as
“I would like to own a Honda motorcycle.”
*/
var myTrans = ["car", "bus", "bike", "train", "aerplane"];
//1st method (loop)
//for(let i = 0; i < myTrans.length; i++){
// console.log(`I would like to own a ${myTrans[i]}`)
//}
// 2nd method
myTrans.map(function (ms) {
    console.log("I would like to own a ".concat(ms));
});
