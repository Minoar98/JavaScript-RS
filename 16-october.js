// "BMW" + 14 = "BMW" + "14" = "BMW14"
// 5 + 10 + "BMW" = "15BMW"
// 2 + "55" = "255" string concatenation
// 2 - "55" = -53  normal substraction
// 10 - "BMW"  = 10-NaN = NaN
//"BMW" + 5 + 10 = "BMW" + "5" + 10 = "BMW5" + 10 = "BMW5" +"10" = "BMW510";

// create
let singer = {
    name: "Chester",
    age: 38,
    isPresent: false, 
    "fav-song": "Numb",
    after5yrs: function (){
        return `${this.age + 5} years old`
    }
}
//update
singer["bestSong"] = "In the end";
//delete
// delete singer["age"];
//read
console.log(singer);
console.log(singer.after5yrs())


//"abcd" + "edfg"
//`${var1} ${var2}`
//method-name -> after5yrs

  
// function fullName3(firstName, lastName){
//     console.log(`${firstName} ${lastName}`) ;
//   }
//   fullName3("Akib", "walik");

// 2 arguments return something
function myBestFriend(firstName, lastName){
    return `${firstName} ${lastName}`
}
// const myBestFriend = myBestFriend("walik", "Akib");
// console.log(myBestFriend);


// function myBestFriend(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// const bestFriend = myBestFriend("walik", "Akib");
// console.log(bestFriend);


// function myBestFriend(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// const bestFriend = myBestFriend();
// console.log(myBestFriend("walik","Akib"));


// function myBestFriend(firstName, lastName) {
//     return `${firstName} ${lastName}`;
// }

// const bestFriend = myBestFriend();
// console.log(myBestFriend("walik", "Akib"));
