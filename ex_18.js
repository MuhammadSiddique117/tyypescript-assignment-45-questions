/*
Think of at least five places in the world you’d like to visit.
• Store the locations in an array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been
changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its
order has changed
*/
var myPlace = ["Karachi", "Hyderabad", "larkana", "Lahore", "Quetta", "Sukkur"];
console.log(myPlace);
// making a copy of an array
var copyOfArray = myPlace.slice();
var sortedArray = copyOfArray.sort();
//console.log(sortedArray);
// printing orginal array
//console.log(myPlace)
// reversing orginal array
// first we have make a copy of original array 
var copyOfArray2 = myPlace.slice();
var reverseOrArray = copyOfArray2.reverse();
//console.log(reverseOrArray)
// printing orginal array
//console.log(myPlace)
// reverse the order of original array 
var reverseOrArray2 = myPlace.reverse();
//console.log(reverseOrArray2);
var againReverse = reverseOrArray2.reverse();
//console.log(againReverse);  // same as original array
// sorting original array 
var sortOriArray = myPlace.sort();
console.log(sortOriArray);
var reversesortedArray = sortOriArray.reverse();
console.log(reversesortedArray);
