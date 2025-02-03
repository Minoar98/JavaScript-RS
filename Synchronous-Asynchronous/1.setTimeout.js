const TIME = 2;
const DURATION = 1000;

const log = () => {
  console.log('2: This is cb & calling after 2 sec');
}

// After meeting the duration, calling the callback function
setTimeout(() => {
  console.log('1: This is cb & calling after 2 sec');
}, TIME * DURATION);

// I can call or use anything inside the callback function
setTimeout(() => {
  log();
}, TIME * DURATION);