for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

for (let j = 1; j <= 5; j++) {
  if (j === 3) {
    console.log("The follower: " + j);
    continue;
  }
  console.log(j);
}

const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

const unionSet = new Set([...a, ...b]);
console.log([...unionSet]);
