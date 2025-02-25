// union set
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

const unionSet = new Set([...a, ...b]);
console.log([...unionSet]);
