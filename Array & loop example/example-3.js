//3. arr = [1, 2, 3, 4, 5], print all the even numbers using for & while loops (must apply 'continue')

//for loop
    let arr = [1, 2, 3, 4, 5];
    
    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            continue;
        }
        console.log(arr[i]);    
    }


// while loop

    let i = 0;
    while(i < arr.length){
        if(arr[i] % 2 === 0){
            i++
            continue; 
        }
        console.log(arr[i]);
        // i++;
    }

