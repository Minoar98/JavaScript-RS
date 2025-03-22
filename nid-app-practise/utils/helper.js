const createNID = (info) => {
  const { name, fatherName, motherName, dob, nidNo } = info;

  const userNID = {
    id: Date.now().toString(),
    ...info,
  };

  console.log("A new NID for an user is created.");
  return userNID;
};

const notFound = () => {
  console.log("The person you have searched is not found");
  console.log("Please try again later");
};

const showNIDInfo = (nidInfo, nidNo, isThirdParty = false) => {
  const { name, fatherName, motherName, dob, nidNo: userNidNo } = nidInfo;

  if (!isThirdParty) {
    console.log("User information: ");
    console.log(`Name:${name}`);
    console.log(`Father Name:${fatherName}`);
    console.log(`Mother Name:${motherName}`);
    console.log(`DOB:${dob}`);
    console.log(`Nid No:${userNidNo}`);
  } else {
    if (userNidNo === nidNo) {
      console.log("User information:");
      console.log(`Name: ${name}`);
      console.log(`DOB: ${dob}`);
      console.log(`NID No: ${userNidNo}`);
    } else {
      notFound();
    }
  }
};

const updateNID = (userNID, updatedInfo, nidNo) => {
  if (userNID.nidNo === nidNo) {
    let length = 0;
    for (let property in updatedInfo) {
      if (property === "nidNo") continue;
      userNID[property] = updatedInfo[property];
      length++;
    }
    console.log(`You have updated ${length} field(s)`);
    showNIDInfo(userNID, nidNo);
  } else {
    notFound();
  }
  return userNID;
};

const deleteNID = (userNID, nidNo) => {
  if (userNID.nidNo === nidNo) {
    userNID = null;
    console.log("You have deleted a user's NID account");
    console.log(`NID no was ${nidNo}`);
  } else {
    notFound();
  }
  return userNID;
};

const calculateAgeBasedOnCurrentYear = (userNID, nidNo) => {
  const { dob } = userNID;

  // user is found
  if (userNID.nidNo === nidNo) {
    const fdob = dob.split("-");

    let dobStr = "";
    for (let i = fdob.length - 1; i >= 0; i--) {
      dobStr += fdob[i];
      if (i != 0) {
        dobStr += "-";
      }
    }

    const currentYear = new Date().getFullYear(); 
    const dobYear = new Date(dobStr).getFullYear(); 

    console.log(`The user is ${currentYear - dobYear} years old`);
  } else {
    // user is not found
    notFound();
  }
};


export const obj = {
  createNID,
  showNIDInfo,
  updateNID,
  deleteNID,
  calculateAgeBasedOnCurrentYear,
};
