

const friends = ["Tebarek", 'abas', "ayele"];
console.log(friends)
console.log(friends[0]);
console.log(friends[friends.length - 1]);
// other array declaration method

// const years = new Array(1334, 123, 1345, 24);
// reinsert array

friends[2] = "Abebe";
console.log(friends);
//this is illegal
// friends = ["Bob", "joy"];
const firstName = "Jonas";
const jonas = [firstName, 'Schmetmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);

// Exercise
const calAge = function (birthyear) {
    return 2037 - birthyear;
}
const years = [1990, 1994, 2002, 2014];
const ageForFirstEle = calAge(years[0]);
const ageForFirstEle2 = calAge(years[1]);
const ageForFirstEle3 = calAge(years[2]);
console.log(ageForFirstEle, ageForFirstEle2, ageForFirstEle3);
const age = [calAge(years[0]), calAge(years[1]), calAge(years[2])];
console.log(age)