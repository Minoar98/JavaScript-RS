// 1. createNID()

// A new NID for an user is created.
// User information:
// Name: Mizanur Rahman
// Father Name: Fazla Rabbi
// Mother Name: Shimla Rahmann
// DOB: 18-02-1789
// NID No: 123-456-789

// 1. showNIDInfo()

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
const showNIDInfo = (userInfo) => {
  console.log("User information:");
};

//*-------------------------------start- createNID-----------------------------------****//
const createNID = (name, fatherName, motherName, dob, nidNo) => {
  user = {
    Name: name,
    FatherName: fatherName,
    MotherName: motherName,
    DOB: dob,
    NIDNo: nidNo,
  };

  console.log("A new NID for an user is created.");

  //   return showNIDInfo(user);
};

//*-------------------------------start- createNID-----------------------------------****//

let user = null;
createNID(
  "Mizanur Rahman",
  "Fazla Rabbi",
  "Shimla Rahmann",
  "18-02-1789",
  "123-456-789"
);

console.log(user);
