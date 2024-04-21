/*
Start with a copy of your program from Exercise 41. Write a function called make_great() that
modifies the array of magicians by adding the phrase the Great to each magician’s name. Call
show_magicians() to see that the list has actually been modified
*/
var magicianName1 = ["Shaman", "Sajjad", "Shahmeer", "Shoaib"];
function show_magicians(greet) {
    for (var _i = 0, magicianName1_1 = magicianName1; _i < magicianName1_1.length; _i++) {
        var items = magicianName1_1[_i];
        console.log(greet, items);
        '';
    }
}
;
show_magicians("Hello, How are you Mr.");
show_magicians("Hello."); // 2nd time calling
