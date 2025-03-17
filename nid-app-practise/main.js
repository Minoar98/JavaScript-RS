import { createNID, showNIDInfo } from "./utils/helper.js";

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
