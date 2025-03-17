
const showNIDInfo = (nidInfo, nidNo, isThirdParty = false) => {
  if (!isThirdParty) {
    console.log("User information:");
    console.log(`Name: ${nidInfo.name}`);
    console.log(`Father Name: ${nidInfo.fatherName}`);
    console.log(`Mother Name: ${nidInfo.motherName}`);
    console.log(`DOB: ${nidInfo.dob}`);
    console.log(`NID No: ${nidInfo.nidNo}`);
  } else {
    // user is found
    if (nidInfo.nidNo === nidNo) {
      console.log("User information:");
      console.log(`Name: ${nidInfo.name}`);
      console.log(`DOB: ${nidInfo.dob}`);
      console.log(`NID No: ${nidInfo.nidNo}`);
    } else {
      // user is not found
      console.log("The person you have searched is not found");
      console.log("Please try again later");
    }
  }
};

const createNID = (info) => {
  // create nid for an user
  const userNID = {
    name: info.name,
    fatherName: info.fatherName,
    motherName: info.motherName,
    dob: info.dob,
    nidNo: info.nidNo,
  };

  console.log("A new NID for an user is created.");
  showNIDInfo(userNID, info.nidNo);

  return userNID;
};



const info = {
  name: "Mizanur Rahman",
  fatherName: "Fazla Rabbi",
  motherName: "Shimla Rahmann",
  dob: "18-02-1789",
  nidNo: "123-456-789",
};

// main object

let userNID = {};
console.log("=============== Create NID =======================");
userNID = createNID(info);
console.log("===============show NID for myself =======================");
showNIDInfo(userNID, "123-456-789");
console.log(
  "=============== Show NID For Third Party like Bank ======================="
);
showNIDInfo(userNID, "123-456-789", true);

console.log(
  "=============== Show NID For Third Party like Passport Office ======================="
);
showNIDInfo(userNID, "123-456-783", true);
