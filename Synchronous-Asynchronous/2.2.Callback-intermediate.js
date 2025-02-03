const calculate = (val1, val2, cb) => {
  const sum = val1 + val2;

  if (cb) {
    cb(sum);
  }
}

const display = (sum) => {
  console.log(`Result: ${sum}`);
}

// Way-01
calculate(4, 5, display)

// Way-02
calculate(3, 5, (sum) => {
  console.log(`Result: ${sum}`);
})