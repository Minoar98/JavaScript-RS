const arr = [14, 2, 43];
const arr1 = [14, 2, 43];
const arr2 = [14, 2, 43];

//ESC-> Arrow function
const  cmp = (a, b) => a - b;

//vanila js (alternative)
function cmp2(a, b) {
    return a - b;
}

// way 01 - BEST

arr.sort(cmp);
console.log(arr);

// way 02
// ES6 -> Arrow function

arr1.sort((a, b) => a-b);
console.log(arr1)

// way 03
// vanilla JS (alternative)
arr2.sort(function cmp2(a, b) {
    return a - b;
});

console.log(arr2) ;


// math random
 const points1 = [40, 100, 1, 5, 25, 10];
 points1.sort(function() {return 0.5 - Math.random()});

 console.log(points1)

 //// 40, 100
// function(){return 0.5 - Math.random() -> +ve -> 100, 40
// function(){return 0.5 - Math.random() -> -ve -> 40, 100
   
//2nd largest number

const points2 = [40, 100, 1, 5, 25, 10];

points2.sort((a, b) => a - b);
console.log(points2[points2.length-2]) // 2nd largest number
console.log(points2[points2.length-1]) // 1st largest number

const cars = [
    { type: 'Volvo', year: 2016 },
    { type: 'Saab', year: 2001 },
    { type: 'BMW', year: 2010 },
  ];
  
  const cmpYear = (a, b) => a.year - b.year;
  
  cars.sort(function(a, b){
    let x = a.type.toLowerCase(); // bmw
    let y = b.type.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
  console.log(cars);

  const func = (cb) => {
    cb("prince");
  }
  
  const print = (val) => {
    console.log('hello world ', val)
  }
  
  func(print);


  const forEach2 = cb => {
    const arr = [10, 20, 30];
    for (let i = 0; i < arr.length; i++) {
      cb(arr[i], i, arr);
    }
  };
  
  const print1 = (value, index, array) => {
    console.log(value, index, array);
  };
  
  forEach2(print1);


  const cars2 = [
    { type: 'Volvo', year: 2016 },
    { type: 'Saab', year: 2001 },
    { type: 'BMW', year: 2010 },
  ];
  
  console.log(cars2.map((value) => value.type))
  
  
  

  const cars1 = [
    { type: '', year: 2016 },
    { type: 'Saab', year: 2001 },
    { type: 'BMW', year: 2010 },
  ];
  console.log(cars1.filter((value) => value.year > 2005))


  const forEach3 = cb => {
    const arr = [10, 20, 30];
    for (let i = 0; i < arr.length; i++) {
      cb(arr[i], i, arr);
    }
  };
  
  const print3 = (value, index, array) => {
    console.log(value, index, array);
  };
  
  forEach2(print);