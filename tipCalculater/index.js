// Function to calculate the tip based on the bill amount
const calcTip = function (bill) {
    // If the bill is between 15 and 300 (inclusive), calculate a 15% tip
    // Otherwise, calculate a 20% tip
    return bill >= 15 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

// An array of bill amounts
const bills = [125, 555, 44];

// Calculate tips for each bill using the calcTip function
const tips = [
    calcTip(bills[0]), // Tip for the first bill
    calcTip(bills[1]), // Tip for the second bill
    calcTip(bills[2])  // Tip for the third bill
];

// Output the original bills array
console.log(bills); // [125, 555, 44]

// Output the calculated tips for each bill
console.log(tips); // [18.75, 111, 8.8]

// Calculate the total amount for each bill (bill + tip)
const total = [
    bills[0] + tips[0], // Total for the first bill
    bills[1] + tips[1], // Total for the second bill
    bills[2] + tips[2]  // Total for the third bill
];

// Output the total amounts
console.log(total); // [143.75, 666, 52.8]
