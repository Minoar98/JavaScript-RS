const paymentStatus = true;
const score = 80;

const enroll = (cb) => {
  console.log("Enroll is ongoing...");

  setTimeout(() => {
    if (paymentStatus) {
      cb();
    } else {
      console.log("Enrollment is failed.");
    }
  }, 2000);
};

const progress = (cb) => {
  console.log("Progress is calculating...");

  setTimeout(() => {
    if (score >= 80) {
      cb();
    } else {
      console.log("An issue occurs during progress.");
    }
  }, 3000);
};

const getCertificate = () => {
  console.log("Preparing your certificate.");

  setTimeout(() => {
    console.log("Congz...");
  }, 2000);
};

enroll(() => {
  progress(getCertificate);
});

// callback hell
// A(() => {
//   B(() => {
//     C(() => {
//       D(() => {
//         E(() => {
//           F(() => {});
//         });
//       });
//     });
//   });
// });
