// intersection  set
// const a = new Set([1, 2, 3]);
// const b = new Set([2, 3, 4]);
// console.log([...a].filter(x => b.has(x)))

const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

const intersection = [...a].filter((x) => b.has(x));
console.log(intersection);


/// difference

