//Use of 'break' in loop

// If I found break, then stop the loop
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
        console.log("The leader: " + i);
    }
    console.log(i);
}

// while loop

let i  = 1;
while(i <=5){
    if(i === 3) {
        break;
        console.log("The leader: " + i);
    } i++
    console.log(i)
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

// while loop
let j = 1;
while(j <= 5){
    if(j === 3){
        console.log("The follower: " + j)
        continue;
    } j++
    console.log(j)
}


const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);

// How JS compiler detect the length of an array
for (var k = 0; cars[i] !== undefined; k++) {}
console.log(k+1);

//Print all the odd numbers which is divisible by 5 till 50 using while loop.
let i1 = 1;
while(i1 <=50){
    if(i1 % 5 === 0 && i % 2 === 1){
        console.log(i1);
    }
    i1++;
}


let j1 = 1;
while(j1 <=50){
    if(j1 % 5 ===0 ) {
        if(j1 % 2 === 1){
            console.log(j1)
        }
    }
    j1++;
}