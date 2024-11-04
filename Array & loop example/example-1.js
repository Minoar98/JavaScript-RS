//1. arr = [1, 2, 3, 4, 5], print all the odd numbers using for & while loops

 arr = [1, 2, 3, 4, 5] ;

 // for loop 
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 1){
        console.log(arr[i]);
    }
  }

  // while loop
  arr = [1, 2, 3, 4, 5] ;

  let i = 0;
  while(i < arr.length){
    if(arr[i] % 2 === 1){
        console.log(arr[i]);
    }
    i++
  }


