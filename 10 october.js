const person = {
    firstName: "Rahim",
    lastName: "Khan"
}

const animal = {
    name: "Tiger",
    eyes: 2,
    legs: 2,
}

// const employee = new Object({
//     name: "Taylor swift",
//     occupation: "Senior Manager" ,
//     exprience : 5,
//     salary: 500000,
//     isPresent: true,
// })
// console.log(employee);

const employee = {
    firstName: "Taylor",
    lastName:"Swift",
    occupation: "Senior Manager" ,
    exprience : 5,
    salary: 500000,
    isPresent: true,
    fullName: function(){
        // console.log(this.firstName + " " + this.lastName)
        console.log(`${this.firstName} ${this.lastName}`)
        // return this.firstName  + " "  + this.lastName;
        return `${this.firstName} ${this.lastName}`
    }
}
employee.age = 30;
console.log(employee.fullName());
console.log(employee.occupation);
console.log(employee.age);
console.log(employee);
employee.introduction= function() {
    return "I am " + this.firstName + " " +  this.lastName +  ". I am " + this.occupation + "."
}
console.log(employee.introduction());

// I am Tailor Swift. I am Senior Manager.





   
