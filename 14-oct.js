const player = {
    firstName: "Lionel",
    lastName: "Messi",
    isPresent: true,
    lastTenGoals: [1, 2, 3, 0, 1, 2, 3, 1, 2, 0],
    ballonDior: 8,
    fullName: function(){
        console.log(`${this.firstName} ${this.lastName}`)
        return `${this.firstName} ${this.lastName}`    
    },
    // "goals": 10,
    goals: 10,
    "last-five-goals": [4, 3, 0, 2, 1]
}

// console.log(player["last-five-goals"])
// console.log(player["goals"]);
// console.log(player["firstName"]);

// CRUD-OPERATION
// C= CREATE, R= READ, U=UPDATE, D=DELETE, 


delete player.lastTenGoals
// console.log(player);

delete player["last-five-goals"]
// console.log(player);

delete player.isPresent

player.goals = 20;
console.log(player);
