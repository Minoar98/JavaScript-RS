// [-1, 2, -3, 4, -5, 0]

// prepare another array which contents only negative numbers


const ngValue = [-1, 2, -3, 4, -5, 0];
const result = ngValue.filter((value) => {
    return value < 0
})

console.log(result);

const result2 = ngValue.findIndex((value) => {
    return value === 0;
})

console.log(result2);
