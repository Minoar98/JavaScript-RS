const crateNID = (info) => {
  // using array destructure
  const { name, fatherName, motherName, dob, nidNo } = info;
};

const userNID = {
  id: Date.now().toString(),
  ...info,
};

console.log("A new NID for an user is created.");
return userNID;

export { crateNID };
