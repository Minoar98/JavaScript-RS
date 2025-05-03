// promise
const status = true; // or false
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (status) resolve("Task 1");
    else reject(new Error("Error message"));
  });
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

//
const paymentStatus = true;
const marks = 90;
// Use 'Promise' so it's an asynchronous function
const enroll = () => {
  console.log("Enrollment is processing...................");

  // Either 'resolve' nor 'reject'. No console.log use in 'Promise'
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentStatus) resolve();
      else reject(new Error("Enrollment process is failed"));
    }, 2000);
  });
};

// const progress = ()=>{
//   console.log("Course on progress...");
// }

// return new Promise((resolve, reject) => {

// setTimeout(() => {
// if (mark >= 80) resolve();
// else
// reject(
// new Error(
// 'You could not achieve enough marks for getting the
// certificate'
// )
// );
// }, 3000);
// });
// };

let customer = "Customer 1";
const processOrder = (customer, orderTime) => {
  console.log(
    `Move to kitchen and describe the order to chief for ${customer}`
  );
  // Asynchronous function
  setTimeout(() => {
    console.log(`The food is ready and served to the ${customer}`);
  }, orderTime);
  console.log(
    `Complete the order for ${customer} and ${customer} needs to wait
${orderTime} seconds`
  );
};
console.log(`Take order from ${customer}`);
processOrder(customer, 5000);
console.log(`Waiter is free for taking next order from any customer`);
customer = "customer 2";
console.log(`Take order from ${customer}`);
processOrder(customer, 3000);
console.log(`Waiter is free for taking next order from any customer`);
