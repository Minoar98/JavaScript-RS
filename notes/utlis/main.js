// Importing the createNID function
import { createNID } from "./helper.js";

// Defining the user info object
const info = {
  name: "Mizanur Rahman",
  fatherName: "Fazla Rabbi",
  motherName: "Shimla Rahmann",
  dob: "18 - 02 - 1789",
  nidNo: "123 - 456 - 789",
};

// main object
let userNID = {};
console.log("=================Create NID =======================");
userNID = createNID(info);
