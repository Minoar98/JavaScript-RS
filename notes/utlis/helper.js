const createNID = (info) => {
  // Using object destructuring
  const { name, fatherName, motherName, dob, nidNo } = info;

  // create nid for an user
  // const userNID = {
  //   id: Date.now().toString(), // auto-incremental value
  //   name,
  //   fatherName,
  //   motherName,
  //   dob,
  //   nidNo,
  // };

  // Alternate
  const userNID = {
    id: Date.now().toString(),
    ...info,
  };

  console.log("A new NID for an user is created.");
  showNIDInfo(userNID, info);

  return userNID;
};

export { createNID };
