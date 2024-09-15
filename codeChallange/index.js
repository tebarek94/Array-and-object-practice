const BMIForMark = {
    fullName: "Mark Miller",
    height: 1.69, 
    weight: 78,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
};

const BMIForJohn = {
    fullName: "John Smith",
    height: 1.95,
    weight: 92,
    calcBMI: function () {
        this.bmi = this.weight / this.height ** 2;
        return this.bmi;
    }
};

// Calculate BMI for both Mark and John
const markBMI = BMIForMark.calcBMI();
const johnBMI = BMIForJohn.calcBMI();

console.log(`Mark's BMI: ${markBMI}`);
console.log(`John's BMI: ${johnBMI}`);

if (johnBMI > markBMI) {
    console.log(`${BMIForJohn.fullName}'s BMI (${johnBMI}) is higher than ${BMIForMark.fullName}'s BMI (${markBMI})`);
} else if (markBMI > johnBMI) {
    console.log(`${BMIForMark.fullName}'s BMI (${markBMI}) is higher than ${BMIForJohn.fullName}'s BMI (${johnBMI})`);
} else {
    console.log(`${BMIForJohn.fullName} and ${BMIForMark.fullName} have the same BMI (${johnBMI})`);
}
