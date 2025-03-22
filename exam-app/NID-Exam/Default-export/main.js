// Import (named & default)
import createNID, {
  showNIDInfo,
  updateNID,
  deleteNID,
  calculateAgeBasedOnCurrentYear as calculateAge, // Using alias
} from "./utils/helper.js";

const info = {
  name: "Mizanur Rahman",
  fatherName: "Fazla Rabbi",
  motherName: "Shimla Rahmann",
  dob: "18-02-1989",
  nidNo: "123-456-789",
};

// main object
let userNID = {};
console.log("=============== Create NID =======================");
userNID = createNID(info);

console.log("=============== Show NID For Myself =======================");
showNIDInfo(userNID, "123-456-789");

console.log(
  "=============== Show NID For Third Party like Bank ======================="
);
showNIDInfo(userNID, "123-456-789", true);

console.log(
  "=============== Show NID For Third Party like Passport Office ======================="
);
showNIDInfo(userNID, "123-456-783", true);

console.log("=============== Update NID =======================");
const updatedInfo = {
  fatherName: "Mr. Fazla Rabbi",
  motherName: "Shimla Rahman",
  dob: "19-02-1989",
  nidNo: "123-456-789",
};
userNID = updateNID(userNID, updatedInfo, "123-456-789");

console.log("=============== Update NID (2) =======================");
const updatedInfo2 = {
  motherName: "Shimla Akther",
  nidNo: "123-456-789",
};
userNID = updateNID(userNID, updatedInfo2, "123-456-789");

console.log("=============== Calculate Age =======================");

calculateAge(userNID, "123-456-789");

console.log("=============== Delete NID (Not Found) =======================");
userNID = deleteNID(userNID, "123-456-784");

console.log("=============== Delete NID (2) =======================");
userNID = deleteNID(userNID, "123-456-789");
console.log(userNID);
