// [10, 43, 25, 62, 98, 34, 72, 88], Sort ascending & descending order

const numbers = [10, 43, 25, 62, 98, 34, 72, 88];
numbers.sort(function(a, b){return (a - b)})
console.log(numbers);

// desending order

const numbers2  = [10, 43, 25, 62, 98, 34, 72, 88];
numbers2.sort(function(a, b){ return (b - a)});
console.log(numbers2);