//as a small as possible. do a single work
//as a small as possible. do a single work
// function fullName(){
//     console.log("Bangladesh");
//   }
//   fullName();
  
    // no argument . nothing returned
    
    function fullName1(firstName, lastName){
      return `${firstName} ${lastName}`;
    }
    fullName1("Akib", "walik");

  

  
  //   function fullName2() {
  //     const firstName = "King";
  //     const lastName = "Khan";
  //     console.log(`${firstName} ${lastName}`);
  // }
  // fullName2()
  // 2 arguments no return
  function myFriend(firstName, lastName){
    console.log(`${firstName} ${lastName}`);
  }
myFriend("Walik","Akib");

// 2 arguments return something
// function myBestFriend(firstName, lastName){
//     return `${firstName} ${lastName}`
// }
// myBestFriend("Walik", "Shazid");


function myBestFriend(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const bestFriend = myBestFriend();
console.log(myBestFriend("walik", "Akib"));


// function greatJob(office){
//     return "work form" + office + "!"
// }

// const messages = greatJob("home")
// console.log(messages + "5 days in a week");

// 2 arguments no retuern

//
function actorMale(firstName, lastName){
    console.log(`${firstName} ${lastName}`)
}
actorMale("Amir", "Khan");

function bestStriker(firstName, lastName){
   console.log(`${firstName} ${lastName}`)
}
 
bestStriker("luis","Suarez");

function batsMan(){
    const firstName = "Ricky";
    const lastName = "Pointing";
    console.log(`${firstName} ${lastName}`)
}
batsMan();

function fullName(){
  const firstName = "Tasnia";
  const lastName = "Farin";
  console.log(`${firstName} ${lastName}`)
}
fullName()

// 2 argument . return something
function fullName(firstName, lastName){
  return `${firstName} ${lastName}`
}
const fullNameResult = fullName("Tasnia", "Farin")
console.log(fullNameResult);


function fullName4(firstName, lastName){
  return `${firstName} ${lastName}`
}
const fullNameResult1 = fullName4()
console.log(fullName4("samin", "Farin"));