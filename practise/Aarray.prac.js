// [10, 20, 5, 30, 40] print all the elements of an array but stop if you find out small element than previous element. (tricky but try to solve of your own using 'break' & use both for & while loop)

const arr = [10, 20, 5, 30, 40];
let previous = - 1000;

for (let i = 0; i < arr.length; i+=1 ) {
    if( previous > arr[i]) {
        break;
    } else {
        previous = arr[i]
        console.log(arr[i])
    }
}

// default parameter

function myFunc (num, name = icecream) {
    console.log(num)
    console.log(name)

}
myFunc(1, "adabata")


//  negative number

function negNum (num) {
    return- (-10)
}

console.log(negNum(-10))


const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});

console.log(points)

// 40, 100
// function(){return 0.5 - Math.random() -> +ve -> 100, 40
// function(){return 0.5 - Math.random() 


let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  console.log(number);
});
