// Object representing a person with various properties
const jonas = {
    firstName: 'Tbarek',
    lastName: 'Abas',
    age: 2037 - 1991, // Calculate the age based on the birth year
    job: 'Teacher',
    friends: ['Ayele', 'teshome', 'Ali'] // Array of friends
};

// Output the friends array
console.log(jonas.friends); // ['Ayele', 'teshome', 'Ali']

// Output the entire object
console.log(jonas); // {firstName: 'Tbarek', lastName: 'Abas', age: 46, job: 'Teacher', friends: Array(3)}

// Accessing object properties using dot notation
console.log(jonas.lastName); // 'Abas'

// Accessing object properties using bracket notation
console.log(jonas['lastName']); // 'Abas'
console.log(jonas['job']); // 'Teacher'

// Dynamic property access
const nameKey = 'Name';
console.log(jonas['first' + nameKey]); // 'Tbarek' (firstName)
console.log(jonas['last' + nameKey]); // 'Abas' (lastName)

// Prompt user for a property to access
const interestedIn = prompt("What do you want to know about jonas? Choose between firstName, lastName, age, job, and friends");

// Check if the input property exists and output the corresponding value
if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]); // Output the value of the property if it exists
} else {
    console.log("Not Found"); // Output 'Not Found' if the property does not exist
}

// Adding new properties to the object
jonas.location = 'Portugal'; // Add a location property
jonas['twitter'] = '@tebarek'; // Add a twitter property

// Output the updated object with new properties
console.log(jonas); // {firstName: 'Tbarek', lastName: 'Abas', age: 46, job: 'Teacher', friends: Array(3), location: 'Portugal', twitter: '@tebarek'}

// Challenge output: Display information about the friends
console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);
// Output: 'Tbarek has 3 friends and his best friend is called Ayele'

// Output the third friend in the friends array
console.log(jonas.friends[2]); // 'Ali'
