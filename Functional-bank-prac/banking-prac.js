// createAccount(); // Create
// showUserInfo(); // Read
// updateUserInfo(); // Update

// checkBalance(); // Read
// deposit(); // Update
// withdraw(); // Update
// checkBalance(); // Read

// closeAccount(); // Delete

// Output Sequence...:

// A new user is created.
// User information: (print full informations)

// User information: (print full informations)

// User information updated.
// User information: (print full informations)

// Your account balance: X Tk.

// Tk. X Deposit
// Tk. X Balance
// A/C: XXX

// Tk. X Withdrawal
// Tk. X Balance
// A/C: XXX

// Your account balance: X Tk.

// You have closed your bank account.
// Tk. X Withdrawal

// Demo User
// {
//     id: Date.now().toString(),
//     name: "SYED MINOAR HASAN",
//     bankInfo: {
//       accountNo: "1740850027450",
//       balance: 0,
//     },
//   }

/*---------------------- Create showUserInfo start--------------------------*/
const showUserInfo = (userInfo) => {
  console.log("User information: ", userInfo);
};
/*---------------------- Create showUserInfo end---------------------------*/

/*---------------------- Create Account start---------------------------*/

function createAccount(name, accNo, balance) {
  // A new user is created
  user = {
    id: Date.now().toString(),
    name,
    bankInfo: {
      accountNo: accNo,
      balance,
    },
  };

  console.log("A new user is created");
  showUserInfo(user);
}
/*---------------------- Create Account start---------------------------*/

const updateUserInfo = (userInfo, updatedName) => {
  userInfo.name = updatedName;
  console.log("User information updated.");
  showUserInfo(userInfo);
};

const checkBalance = (userInfo) => {
  console.log(`Your account balance: ${userInfo.bankInfo.balance} Tk.`);
};

const closeAccount = (userInfo) => {
  console.log("You have closed your bank account.");
  console.log(`Tk. ${userInfo.bankInfo.balance} Withdrawal`);

  user = null;
  userInfo = null;
};

const printBalance = (userInfo) => {
  console.log(`Tk. ${userInfo.bankInfo.balance} Balance`);
  console.log(`A/C ${userInfo.bankInfo.accountNo}`);
};

const deposit = (userInfo, amount) => {
  userInfo.bankInfo.balance += amount;

  console.log(`Tk. ${amount} Deposit`);
  printBalance(userInfo);
};

const withdraw = (userInfo, amount) => {
  userInfo.bankInfo.balance -= amount;

  console.log(`Tk. ${amount} Withdrawal`);
  printBalance(userInfo);
};

let user = null;
createAccount("Syed Minaor Hasan", "1740850027450", 0);

console.log();
showUserInfo(user);

console.log();
updateUserInfo(user, "Mr. Syed Minoar Hasan");

console.log();
deposit(user, 200);

console.log();
withdraw(user, 100);

console.log();
closeAccount(user);
