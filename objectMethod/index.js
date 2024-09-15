const jonas = {
    firstName: 'Tbarek',
    lastName: 'Abas',
    birthYears:1991, 
    job: 'Teacher',
    friends: ['Ayele', 'teshome', 'Ali'],
    hasDriverLicense: true,
    // calcAge: function (birthYears) {
    //     return 2037 - birthYears;
    // }
    calcAge: function () {
        console.log(this);
        return 2037 - this.birthYears;
    },
    getName : function () {
        return this.firstName;
    },
    getJob: function () {
        return this.job;
    },
    getSummary: function () {
        // return `${jonas.getName()} is a ${jonas.calcAge()} old ${jonas.getJob()} , and has a `
        return `${this.firstName} is a ${this.calcAge()} years old ${this.hasDriverLicense? 'a':'no'} driver license.`
    }
        


};
console.log(jonas.calcAge());
// console.log(`${jonas.getName()} is a ${jonas.calcAge()} old ${jonas.getJob()} , and has a `)
console.log(jonas.getSummary())
