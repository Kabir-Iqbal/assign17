// 17. Shrinking Guest List: 
// You just found out that your new dinner table won’t arrive in time for the dinner, and you have 
// space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can 
// invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you 
// pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
// invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.
let guestlist : string [] = ["Ali", "Ubaid", "Aasim"]
//adding 2 new person in guest list 
guestlist.unshift("Rehan", "Hammad")

console.log("Unfortunely ! my dinner table is arrive and I can invite only two people for dinner ");
// Remove guest from the list 
while (guestlist.length > 2) {
    let removeguestlist : string | undefined = guestlist.pop()
    if (removeguestlist !== undefined) {
        console.log(`${removeguestlist} we can't invite you `);
    }
}
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
guestlist.forEach(guest => {
    console.log(`${guest} you are still invited for dinnner !`);
});
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you 
// actually have an empty list at the end of your program.
guestlist.splice(0,guestlist.length)
//updated guest list 
console.log("Updated Guest list :" , guestlist );

