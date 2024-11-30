// using filter
const myFunction =(value, index, array) => {
    return value > 18    
};
const numbers = [45, 4, 9, 16, 25];
const over18 = numbers.filter(myFunction);
console.log(over18);

// using map

const number1 = [45, 4, 9, 16, 25];
const numbers2 = number1.map(myFunction1)

function myFunction1(value, index, array){
    return value * 2
}

console.log(numbers2)

// reduce



function myFunction2(total, value, index, array) {
    return total + value;
}

const numbers1 = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction2)
console.log(sum);


///filter

const cars = [
    {type: '', year:2016},
    {type: 'Saab', year:2001 },
    {type: 'BMW', year: 2010 },
];
console.log(cars.filter((value) => value.year >
2005))

console.log(cars.filter((value) => value.type))

// map

const cars1 = [
    {type: 'Volvo', year: 2016},
    {type: 'Saab', year: 2001},
    {type: 'BMW', year: 2010},
]
console.log(cars1.map((value) => value.type))
console.log(cars1.map((value) => value.year))


// foreach

const foreach = cb => {
    const arr = [10, 20, 30];
    for(let i = 0; i < arr.length; i++) {
        cb(arr[i], i, arr)
    }
};

const print = (value, index, array) => {
    console.log(value, index, array)
};

foreach(print);

// for each

const func = (cb) => {
    cb("pMinoar")
};

const print1 = (val) => {
    console.log('hello world', val)
}

func(print1)


//


const cars2 = [
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
  console.log(cars2);