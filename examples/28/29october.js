//////A function takes a number & is divisible by 10

10 % 2 === 0 ? console.log('even'): console.log("odd");

// way:
 console.log(10 % 2 === 0 ? 'even' : 'odd');

 //////A function takes a number & returns a boolean if a number is divisible by 10

 const isEven  = 10 % 2 ? false : true;
 console.log(isEven);

 // alternative

 let isEven2;
 if(10 %2){
    isEven2 = true;
 }else{
    isEven2 = false;
 }
 // 1. 7, 2.15 3. 20
// under 10 , 18-, 18+
 
function detectingAgeLimit(age){
    if( age < 10) {
        console.log("under 10");
    }else if (age < 18){
         console.log("18-")
    }else{
        console.log("18+")
    }
}
detectingAgeLimit(7);
detectingAgeLimit(15);
detectingAgeLimit(20);