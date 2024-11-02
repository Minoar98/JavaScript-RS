////// is divisible by 10

const num = 98;
num % 2 === 0 ? console.log('even'): console.log("odd");

// way:
 console.log(10 % 2 === 0 ? 'even' : 'odd');

 //////A function takes a number & returns a boolean if a number is divisible by 10

 const isEven  = 10 % 2 ? false : true;
 console.log(isEven);

 // alternative

 let isEven2;
 if(10 % 2){
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

//

const num4 = 23;
num % 2 === 0 ? console.log("Even") : console.log("odd");

console.log(num % 2 === 0 ?'even': 'odd')

const num1 = 100;
num1 % 2 === 0 ? console.log("Even") :console.log("odd");

//alternative
console.log(num1 === 0 ?"even": "odd")

const num2 = 33;  
33 % 2 === 0 ? console.log("Even") : console.log("Odd"); // divisible by 2

//alternative
console.log(33 % 2 === 0 ? "even": "odd")

 

//////A function takes a number & is divisible by 10

 const isEven1  = 22 % 2 ? false : true;// returns a boolean //divisible by 22
 console.log(isEven1);


 const dividedBy10 = (num, x = 10) => {
    return num % x === 0 ? true : false;
}

dividedBy10(20); // true
dividedBy10(15); // false