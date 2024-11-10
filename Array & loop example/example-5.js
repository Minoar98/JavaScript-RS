// 5. arr = [10, 20, 5, 30, 40] print all the elements of an array but stop if you find out small element than previous element. (tricky but try to solve of your own using 'break' & use both for & while loop)

const arr = [10, 20, 5, 30, 40];
let prev = -1000;

for(let i = 0; i < arr.length; i+=1){
    if(prev > arr[i]){
        break;
    }
    prev = arr[i];
    console.log(arr[i]);
}
