import { createNID } from "/utils/helper.js";

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
userNID = createNID();
