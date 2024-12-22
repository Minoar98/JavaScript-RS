// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39,  -16, 204, -43, 32, 75, 80, 42, 33, -91, 33]
// [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39,  -16, 204, -43, 32, 75, 80, 42, 33, -91, 33] is an array.
//  Print the sum of odd indexed numbers but must start from index 4 & end till 12.

// ---------- Possible Conditions (a.k.a variations) ----------
// startIndex, lastIndex
// 4, 12 -> 5, 11
// 4, 11 -> 5, 11
// 5, 12 -> 5, 11
// 5, 11 -> 5, 11

const oddNumber =(array, startIndex, lastIndex) =>{
    startIndex = startIndex % 2 ? startIndex : startIndex + 1;
    lastIndex = lastIndex % 2 ? lastIndex : lastIndex - 1;

    let sum = 0;
    for (let i = startIndex; i <= lastIndex; i += 2) {
        sum += array[i];
    }
    
    return sum;
}

const array = [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39,  -16, 204, -43, 32, 75, 80, 42, 33, -91, 33];
let startIndex, lastIndex;

// TestCase: 1
// Sample Input: [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39,  -16, 204, -43, 32, 75, 80, 42, 33, -91, 33], startIndex = 4, lastIndex = 12
// Sample Output: 172

startIndex = 4;
lastIndex = 12;
const output1 = oddNumber(array, startIndex, lastIndex);
console.log("Output 1: ", output1);

// TestCase: 2
// Sample Input: [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39,  -16, 204, -43, 32, 75, 80, 42, 33, -91, 33], startIndex = 4, lastIndex = 11
// Sample Output: 172

startIndex = 4;
lastIndex = 11;
const output2 = oddNumber(array, startIndex, lastIndex);
console.log("Output 2: ", output2);

// TestCase: 3
// Sample Input: [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39,  -16, 204, -43, 32, 75, 80, 42, 33, -91, 33], startIndex = 5, lastIndex = 12
// Sample Output: 172

startIndex = 5;
lastIndex = 12;
const output3 = oddNumber(array, startIndex, lastIndex);
console.log("Output 3: ", output3);

// TestCase: 4
// Sample Input: [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39,  -16, 204, -43, 32, 75, 80, 42, 33, -91, 33], startIndex = 5, lastIndex = 11
// Sample Output: 172

startIndex = 5;
lastIndex = 11;
const output4 = oddNumber(array, startIndex, lastIndex);
console.log("Output 4: ", output4);

// TestCase: 5
// Sample Input: [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39,  -16, 204, -43, 32, 75, 80, 42, 33, -91, 33], startIndex = -5, lastIndex = 11
// Sample Output: You have entered a wrong index number

startIndex = -5;
lastIndex = 21;

if (startIndex < 0 || startIndex >= array.length || lastIndex < 0 || lastIndex >= array.length || startIndex > lastIndex) {
    console.log("Output 5: You have entered a wrong index number");
} else {
    const output5 = oddNumber(array, startIndex, lastIndex);
    console.log("Output 5: ", output5);
}

// TestCase: 6
// Sample Input: [-10, 20, -44, 35, 65, 40, 22, -33, 51, -39,  -16, 204, -43, 32, 75, 80, 42, 33, -91, 33], startIndex = 5, lastIndex = -11
// Sample Output: You have entered a wrong index number

startIndex = 5;
lastIndex = -11;

if (startIndex < 0 || startIndex >= array.length || lastIndex < 0 || lastIndex >= array.length || startIndex > lastIndex) {
    console.log("Output 6: You have entered a wrong index number");
} else {
    const output6 = oddNumber(array, startIndex, lastIndex);
    console.log("Output 6: ", output6);
}


startIndex = -5;
lastIndex = -911;