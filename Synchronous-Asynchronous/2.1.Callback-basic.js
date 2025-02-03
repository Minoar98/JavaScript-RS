const print = () => {
  console.log('print: Using callback');
}

const print2 = (val) => {
  console.log('print2: Using callback ' + val);
}

const log = () => {
  console.log('I am a log function');
}

const helpToPrint = (cb) => {
  console.log(cb);
  if (cb) {
    cb();
  } else {
    console.log('helpToPrint: No callback function');
  }
}

// Passing a callback function via 'print' function
helpToPrint(print);

// Passing no callback function
helpToPrint();

// Passing a callback function & using 'print2' with parameter
helpToPrint(() => {
  print2(10);
});