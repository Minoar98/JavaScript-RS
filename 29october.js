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


const arr = [1, 2, 3, 4, 5];

let i  = 0;
while(i <= arr.length - 1){
    console.log(arr[i]);
    i++;
}

const arr1 = [1, 2, 3, 4, 5];
for (let j = 0 ; j <= arr1.length-1 ; j++){
    console.log(arr1[j])

}

//Use of 'break' in loop

// If I found break, then stop the loop
for (let k = 1; k <= 5; k++) {
    if (k === 3) {
        break;
        console.log("The leader: " + k);
    }
    console.log(k);
}

//use of 'continue' in for loop

// If I found then stop executing the next statements but start from the next element as always.
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("The follower: " + i);
        continue;
    }
    console.log(i);
}