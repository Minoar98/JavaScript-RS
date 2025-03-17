const createNID = (info) => {
  // using array destructure
  const { name, fatherName, motherName, dob, nidNo } = info;

  // const userNID = {
  //   id: Date.now().toString(), // auto-incremental value
  //   name,
  //   fatherName,
  //   motherName,
  //   dob,
  //   nidNo,
  // };

  // create nid for an user
  const userNID = {
    id: Date.now().toString(),
    ...info,
  };

  console.log("A new NID for an user is created.");
  return userNID;
};

const showNIDInfo = (nidInfo, nidNo, isThirdParty = false) => {
  // using array destructure
  const { name, fatherName, motherName, dob, nidNo } = nidInfo;
  if (!isThirdParty) {
    console.log("User information: ");
    console.log(`Name:${name}`);
    console.log(`Father Name:${fatherName}`);
    console.log(`Mother Name:${motherName}`);
    console.log(`DOB:${dob}`);
    console.log(`Nid No:${nidNo}`);
  } else {
    // user is found
    if (userNidNo === nidNo) {
      console.log("User information:");
      console.log(`Name: ${name}`);
      console.log(`DOB: ${dob}`);
      console.log(`NID No: ${userNidNo}`);
    } else {
      // user is not found
      notFound();
    }
  }
};

export { createNID, showNIDInfo };
