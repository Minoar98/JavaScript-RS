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

// Constant values (convention)
const MIN_DEPOSIT = 50;
const MAX_WITHDRAW = 1000;

const hideAccountNo = (accNo) => {
  return `${accNo.slice(0, 3)}${"*".repeat(accNo.length - 6)}${accNo.slice(
    -3
  )}`;
};

const showUserInfo = (userInfo) => {
  console.log("User information:");
  console.log("User Name: ", userInfo.name);
  console.log("User A/C No: ", hideAccountNo(userInfo.bankInfo.accountNo));
  console.log("User Balance: ", userInfo.bankInfo.balance);
};

function createAccount(name, accNo, balance = 0) {
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
  // console.log("User information: ", user);
  showUserInfo(user);
}

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

  // Ok for now, but not the best solution
  user = null;
  userInfo = null;
};

const printBalance = (userInfo) => {
  console.log(`Tk. ${userInfo.bankInfo.balance} Balance`);
  console.log(`A/C ${hideAccountNo(userInfo.bankInfo.accountNo)}`);
};

const deposit = (userInfo, amount) => {
  if (amount < 0) {
    console.log("You have entered a invalid amount. Please correct it.");
    return;
  }

  if (amount < MIN_DEPOSIT) {
    console.log("You have to deposit at least 50 Tk");
    return;
  }

  userInfo.bankInfo.balance += amount;

  console.log(`Tk. ${amount} Deposit`);
  // console.log(`Tk. ${userInfo.bankInfo.balance} Balance`);
  // console.log(`A/C ${userInfo.bankInfo.accountNo}`);
  printBalance(userInfo);
};

const withdraw = (userInfo, amount) => {
  if (amount < 0) {
    console.log("You have entered a invalid amount. Please correct it.");
    return;
  }

  if (amount > MAX_WITHDRAW) {
    console.log("You are allowed to withdraw at least 1000 Tk.");
    return;
  }

  if (amount > userInfo.bankInfo.balance) {
    console.log("Insufficient amount. Please try again later.");
    return;
  }

  userInfo.bankInfo.balance -= amount;

  console.log(`Tk. ${amount} Withdrawal`);
  printBalance(userInfo);
};

let user = null;
createAccount("Syed Minaor Hasan", "1740850027450");

console.log();
showUserInfo(user);

console.log();
updateUserInfo(user, "Mr. Syed Minoar Hasan");

console.log();
checkBalance(user);

console.log();
deposit(user, 200);

console.log();
deposit(user, 25);

console.log();
withdraw(user, 100);

console.log();
withdraw(user, -15);

console.log();
withdraw(user, 1500);

console.log();
withdraw(user, 200);

// console.log();
// checkBalance(user);

console.log();
closeAccount(user);

// Do
// 1. Do yourself first
// 2. Check your with my version
// 3. Check one by one function & make it perfect
// 4. Final revision

// H/W
// 1. Error handling in 'deposit' function (-ve case & low insertion)
// 2. Error handling in 'withdraw' function (-ve case & high withdrawal case)
// 3. Make account invisible like: '174*******450' (only 'deposit' & 'withdraw' functions)

// Further thinking
// 1. How to make it for multiple users
// 2. Customize your code accordingly
// TODO: ami kaj kori ni 
// FIXME: KELNKARI KORCI
// DEBUG:
//NOTE: 