let count = 0;
let intervalId = setInterval(() => {
  count++;
  console.log(`Interval ID: ${intervalId} & count: ${count}`);

  if (count === 5) {
    clearInterval(intervalId);
    console.log(`Stopped & Interval ID: ${intervalId}`);
  }
}, 5000);
