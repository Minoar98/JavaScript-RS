//Print 1 to 10 using for loop.

for (let i = 1; i <= 10; i++){
//    console.log(i);
}

//Print all the odd numbers which is divisible by 5 till 50 using while loop.
let i = 1;
while(i <=50){
    if(i % 5 === 0 && i % 2 === 1){
        console.log(i);
    }
    i++;
}


let j = 1;
while(j <=50){
    if(j % 5 ===0 ) {
        if(j % 2 === 1){
            console.log(j)
        }
        // console.log(j);
    }
    j++;
}

const heightOfMyFriends = [5.5, 4, 5, 6, 3.4];
let k = 0;
while(k < heightOfMyFriends.length){
    console.log(heightOfMyFriends[k]);
    k++;
}


