// Define an array of friends
const friendsList = ['Micalel', 'Tebarek', 'Amira'];

// Add new elements to the array
friendsList.push('Abebe'); // Add 'Abebe' to the end
friendsList.push('joy');   // Add 'joy' to the end

// Adding another 'joy' to the end and capturing the new length
const newLength = friendsList.push('joy');
console.log(newLength); // Output the new length of the array

// Add an element to the beginning of the array
friendsList.unshift('jhon');
console.log(friendsList); // Output the array after adding 'jhon'

// Remove elements from the end of the array
friendsList.pop(); // Removes the last element ('joy')
friendsList.pop(); // Removes the last element ('joy')
const popped = friendsList.pop(); // Removes the last element ('Abebe')
console.log(popped); // Output the removed element ('Abebe')
console.log(friendsList); // Output the array after removals

// Remove an element from the beginning of the array
friendsList.shift(); // Removes the first element ('jhon')
console.log(friendsList); // Output the array after removing the first element

// Check the index of 'Tebarek'
console.log(friendsList.indexOf("Tebarek")); // Output the index of 'Tebarek'

// Check if specific elements are in the array
console.log(friendsList.includes("Tebarek")); // true, because 'Tebarek' is in the array
console.log(friendsList.includes("tebarek")); // false, case-sensitive check
console.log(friendsList.includes("23")); // false, '23' is a string
console.log(friendsList.includes(23)); // false, 23 is a number
console.log(friendsList); // Output the final state of the array

// Check if 'Tebarek' is in the array and log a message
if (friendsList.includes("Tebarek")) {
    console.log("You have a friend called Tebarek");
}
