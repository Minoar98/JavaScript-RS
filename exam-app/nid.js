// 1. createNID()

// A new NID for an user is created.
// User information:
// Name: Mizanur Rahman
// Father Name: Fazla Rabbi
// Mother Name: Shimla Rahmann
// DOB: 18-02-1789
// NID No: 123-456-789

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
console.log("===============Create NID=======================");
userNID = createNID(info);

console.log("===============Show NID For Myself=======================");
showNIDInfo(userNID, info.nidNo);

console.log("===============Show NID For Third Party=======================");
showNIDInfo(userNID, info.nidNo, true);

console.log("===============Show NID For Third Party=======================");
showNIDInfo(userNID, "123-456-783", true);

// 2. showNIDInfo()

// User information:
// Name: Mizanur Rahman
// Father Name: Fazla Rabbi
// Mother Name: Shimla Rahmann
// DOB: 18-02-1789
// NID No: 123-456-789

// 3. showNIDInfo() // Any third parties like bank/passport office etc

// If user is found ->
// The person you have searched is found
// User information:
// Name: Mizanur Rahman
// DOB: 18-02-1989
// NID No: 123-456-789

// If user is not found ->
// The person you have searched is not found
// Please try again later

// 1. updateNID()

// You have updated 3 fields
// User update information:
// Name: Mizanur Rahman
// Father Name: Mr. Fazla Rabbi
// Mother Name: Shimla Rahman
// DOB: 19-02-1989
// NID No: 123-456-789

// N/B: Must mention how many fields you want to update. Update process should be dynamic. NID no must be same

// 5. deleteNID()

// You have deleted a user's NID account
// NID no was 123-456-789

// 6. calculateAge()

// The user is 36 years old

// Instruction:
// - Use arrow function - 3 marks
// - Use default parameter - 3 marks
// - Don't pass not more than 2 parameters in the function - 3 marks
// - Use object destructure - 3 marks
// - Use template literal - 3 marks
// - Reuse already written function - 3 marks

// Overall presentation - 7 marks

// Overall presentation - 7 marks
// const showNIDInfo = (userInfo) => {
//   console.log("User information:");
// };

// //*-------------------------------start- createNID-----------------------------------****//
// const createNID = (name, fatherName, motherName, dob, nidNo) => {
//   user = {
//     Name: name,
//     FatherName: fatherName,
//     MotherName: motherName,
//     DOB: dob,
//     NIDNo: nidNo,
//   };

//   console.log("A new NID for an user is created.");

//   return showNIDInfo(user);
// };

// //*-------------------------------start- createNID-----------------------------------****//

// let user = null;
// createNID(
//   "Mizanur Rahman",
//   "Fazla Rabbi",
//   "Shimla Rahmann",
//   "18-02-1789",
//   "123-456-789"
// );

// console.log(user);
