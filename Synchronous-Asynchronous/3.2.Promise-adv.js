const paymentStatus = true;
const score = 80;

const enroll = () => {
  console.log("Enroll is ongoing...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (paymentStatus) {
        resolve();
      } else {
        reject(new Error("Enrollment is failed."));
      }
    }, 2000);
  });
};

const progress = () => {
  console.log("Progress is calculating...");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (score >= 80) {
        resolve();
      } else {
        reject(new Error("An issue occurs during progress."));
      }
    }, 3000);
  });
};

const getCertificate = () => {
  console.log("Preparing your certificate.");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Congz...");
    }, 2000);
  });
};

enroll()
  .then(progress)
  .then(getCertificate)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });
