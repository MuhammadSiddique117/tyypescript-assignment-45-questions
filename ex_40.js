/*
Write a function called make_album() that builds an Object describing a music album. The
function should take in an artist name and an album title, and it should return a Object containing
these two pieces of information. Use the function to make three dictionaries representing different
albums. Print each return value to show that Objects are storing the album information correctly.
Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make
at least one new function call that includes the number of tracks on an album.
*/
function myAlbum(artisName, albumTitle) {
    return { artisName: artisName, albumTitle: albumTitle };
}
var album1 = myAlbum("Ali", "Rang-e-Mohabat");
var album2 = myAlbum("Madad", "Rosha Andhera");
var album3 = myAlbum("Ayaz", "Mausam-e-Dil");
console.log(album1);
console.log(album2);
console.log(album3);
//Number of tracks
function myAlbum1(artisName, albumTitle, numberOfTracks) {
    return { artisName: artisName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album4 = myAlbum1("Ali", "Rang-e-Mohabat", 30);
var album5 = myAlbum1("Madad", "Rosha Andhera", 50);
var album6 = myAlbum1("Ayaz", "Mausam-e-Dil");
console.log(album4);
console.log(album5);
console.log(album6);
