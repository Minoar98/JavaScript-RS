// Steps:
// 1. Create a function
// 2. Decide the passing parameters of that function
// 3. Call that function
// 4. Implement the function
// 5. Decide return or not
// 6. Receive the returned value or direct access to that returned value

// Step 1: Create a function (ES6)
const countNegNumber = () => {
    
}

// Step 2: Decide the passing parameters of that function
const countNegNumber = (arr, startIndex, endIndex) => {
    
}

// Step 3: Call that function
const arr = [];
const startIndex = 1, endIndex = 2;
countNegNumber(arr, startIndex, endIndex);

// Step 4: Implement the function
const countNegNumber = () => {
    let count = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] < 0) {
          count++;
          console.log(arr[i]);
        }
    }  
}

// Step 5.1: Decide return or not (return)
const countNegNumber = () => {
    return count;
}

// Step 5.2: Decide return or not (print)
const countNegNumber = () => {
    console.log(count);
}

// Step 6.1: Receive the returned value or direct access to that returned value (receive)
const cnt = countNegNumber(arr, startIndex, endIndex);

// Step 6.2: Receive the returned value or direct access to that returned value (print)
console.log(countNegNumber(arr, startIndex, endIndex));