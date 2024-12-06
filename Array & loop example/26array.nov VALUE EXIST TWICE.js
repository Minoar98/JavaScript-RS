// [-10, 20, -44, 33, 51, 40, 20, -33, 51, -39] is an array. Print which value exist twice.

const loopingWayBreakForTheFirstTime = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log('Duplicate: ' + arr[j]);
        flag = true;
      }
    }

    if (flag === true) {
      break;
    }
  }
}

const loopingWay = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log('Duplicate: ' + arr[j]);
      }
    }
  }
}

// Efficient: 1
const oneLoopWayUsingArray = (arr) => {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    if (duplicates.includes(arr[i]) === false) {
      duplicates.push(arr[i]);
    } else {
      console.log('Duplicate: ' + arr[i]);
      break;
    }
  }
}

// Efficient: 2
const oneLoopWayUsingObject = (arr) => {
  const duplicates = {};
  for (let i = 0; i < arr.length; i++) {
    if (duplicates[arr[i]] === undefined) {
      duplicates[arr[i]] = true;
    } else {
      console.log('Duplicate: ' + arr[i]);
      break;
    }
  }
}

const arr = [-10, 20, -44, 33, 51, 40, 20, -33, 51, -39];
const arr2 = [1, 2, 3, 1];

// oneLoopWayUsingObject(arr2);

// Worst case

const arr3 = [155, 15, 5];
const arr3Map = arr3.map((value) => value + 5);

// console.log(arr3.length)
// console.log(arr3Map.length)

// console.log()

// console.log(arr3)
// console.log(arr3Map)

const arr4 = [155, 10, 5];
const arr4Filter = arr4.filter((value) => value % 2 === 1);

// console.log(arr4.length)
// console.log(arr4Filter.length)

// console.log()

// console.log(arr4)
// console.log(arr4Filter)


const array =[1, 2, 3, 1];
let sum = array.reduce((sm, value) => {
    return sm + value
}, 100)

console.log(sum);
