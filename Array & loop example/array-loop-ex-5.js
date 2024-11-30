// 6. [-10, 20, -44, 35, 65] is an array. 
// Find 20 in that array.Print If found, print index. if not found then print '20 is not found' message.

// const arr = (arr) => {
//     const target = 20;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             console.log(`Found at ${i}`);
//             break;
//         }
//     }
// }

// const array  = [-10, 20, -44, 35, 65]
// arr(array)

// way2

// const arr = (array) => {
//     const target = 35; flag = false;

//     for (let j = 0; j < arr.length; j++) {
//         if (arr[j] === target) {
//             flag = true;
//             console.log(`Found at ${j}`)
//             break
//     }
// }

// console.log(flag)

//         if(flag === false) {
//             console.log(`{target} is not found`)
// }

// }

// const array  = [-10, 20, -44, 35, 65]
// arr(array)



const find20 = (arr) => {
    const target = 20;
    let flag = false;
for(let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
        flag = true;
        console.log(`Found at ${i}`);
        break;
    }
}

console.log(flag);

if (flag === flase) {
    console.log(`{target} is not found`)
}
}

const arr  = [-10, 20, -44, 35, 65]
find20(arr);