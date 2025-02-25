// 2. Difference -> [2]

const a = [1, 2, 3];
const b = [2, 3, 4];

console.log([...a].filter((x) => !b.includes(x))); // a - b
