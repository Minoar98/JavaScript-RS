//as a small as possible. do a single work
//as a small as possible. do a single work
function fullName(){
    console.log("Bangladesh");
  }
  
  
    // no argument . nothing returned
    
    function fullName1(firstName, lastName){
      return `${firstName} ${lastName}`;
    }
    fullName1("Akib", "walik");

  

  
    function fullName2() {
      const firstName = "King";
      const lastName = "Khan";
      console.log(`${firstName} ${lastName}`);
  }
  fullName2()
  // 2 arguments no return
  function myFriend(firstName, lastName){
    console.log(`${firstName} ${lastName}`);
  }
myFriend("Walik","Akib");

// 2 arguments return something
function myBestFriend(firstName, lastName){
    return `${firstName} ${lastName}`
}
myBestFriend("Walik", "Shazid");