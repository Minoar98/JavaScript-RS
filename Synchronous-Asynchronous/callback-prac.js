const display = (sum) => {
  console.log(`The result is : ${sum}`);
};

const calculate = (val1, val2) => {
  const sum = val1 + val2;
  //   if (callback) callback(sum);
  return sum;
};
const result = calculate(4, 5);
display(result);
