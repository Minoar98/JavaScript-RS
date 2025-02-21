// 0 + 1^2 + 2^2 + ..... + n^2 = sum
// do it while loop

const n = 50;
let sum = 0;

let i = 1;
while (i <= n) {
  sum += i ** 2;
  i++;
}

console.log(sum);
