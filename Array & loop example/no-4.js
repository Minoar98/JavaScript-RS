// 4. [22, 76, 54, 40, 99] is the array. find the minimum value of that array using for & while loop.
 let arr = [22, 76, 54, 40, 99] ;
 let min = 1000;

 for(let i = 0; i < arr.length; i++){
    if(min > arr [i]){
        min = arr[i];
    }
 } 
 console.log(min);

 //  whilew loop
 let z = 0;
 while(z < arr.length) {
    if(min > arr [z]){
        min = arr [z];
    }
    z++;
 }
 console.log(z);