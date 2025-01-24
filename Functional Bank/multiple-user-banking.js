// Constant values (convention)
const MIN_DEPOSIT = 50;
const MAX_WITHDRAW = 1000;

const hideAccountNo = (accNo) => {
  return `${accNo.slice(0, 3)}${"*".repeat(accNo.length - 6)}${accNo.slice(
    -3
  )}`;
};

const showUserInfo = (users, userId) => {
  // console.log('=========', users, userId)
  const userInfo = users.find(user => user.id === userId);

  console.log("User information:");
  console.log("User Name: ", userInfo.name);
  console.log("User A/C No: ", hideAccountNo(userInfo.bankInfo.accountNo));
  console.log("User Balance: ", userInfo.bankInfo.balance);
  console.log()
};

function createAccount(name, accNo, balance = 0) {
  // A new user is created
  const user = {
    id: Date.now().toString(),
    name,
    bankInfo: {
      accountNo: accNo,
      balance,
    },
  };

  users.push(user);

  console.log("A new user is created");
  // console.log("User information: ", user);
  showUserInfo(users, users[users.length-1].id);
}

const showAllUsers = (allUser) => {
  console.log('All the users information: ', allUser)
}

const updateUserInfo = (users, userId, updatedName) => {
  const user = users.find(user => user.id === userId);

  user.name = updatedName;
  console.log("User information updated.");
  showUserInfo(users, userId);
};

const checkBalance = (users, userId) => {
  const user = users.find(user => user.id === userId);
  
  console.log(`Your account balance: ${user.bankInfo.balance} Tk.`);
};

const closeAccount = (users, userId) => {
  const userIndex = users.findIndex(user => user.id === userId);
  
  console.log("You have closed your bank account.");
  console.log(`Tk. ${users[userIndex].bankInfo.balance} Withdrawal`);
  
  // users = users.filter(user => user.id !== userId);
  users.splice(userIndex, 1);
};

const printBalance = (users, userId) => {
  const user = users.find(user => user.id === userId);

  console.log(`Tk. ${user.bankInfo.balance} Balance`);
  console.log(`A/C ${hideAccountNo(user.bankInfo.accountNo)}`);
};

const deposit = (users, userId, amount) => {
  if (amount < 0) {
    console.log("You have entered a invalid amount. Please correct it.");
    return;
  }

  if (amount < MIN_DEPOSIT) {
    console.log("You have to deposit at least 50 Tk");
    return;
  }

  const userInfo = users.find(user => user.id === userId);
  userInfo.bankInfo.balance += amount;

  console.log(`Tk. ${amount} Deposit`);
  // console.log(`Tk. ${userInfo.bankInfo.balance} Balance`);
  // console.log(`A/C ${userInfo.bankInfo.accountNo}`);
  printBalance(users, userId);
};

const withdraw = (users, userId, amount) => {
  if (amount < 0) {
    console.log("You have entered a invalid amount. Please correct it.");
    return;
  }

  if (amount > MAX_WITHDRAW) {
    console.log("You are allowed to withdraw at least 1000 Tk.");
    return;
  }

  const userInfo = users.find(user => user.id === userId);
  if (amount > userInfo.bankInfo.balance) {
    console.log("Insufficient amount. Please try again later.");
    return;
  }

  userInfo.bankInfo.balance -= amount;

  console.log(`Tk. ${amount} Withdrawal`);
  printBalance(users, userId);
};

let users = [];
createAccount("Syed Minaor Hasan", "1740850027450");
createAccount("Sakib Al Hasan", "1740850027400", 150);

showAllUsers(users);

console.log();
showUserInfo(users, users[0].id);

console.log();
updateUserInfo(users, users[0].id, "Mr. Syed Minoar Hasan");

showAllUsers(users);

console.log();
checkBalance(users, users[0].id);

console.log();
deposit(users, users[0].id, 200);

console.log();
deposit(users, users[0].id, 25);

console.log();
withdraw(users, users[0].id, 100);

console.log();
withdraw(users, users[0].id, -15);

console.log();
withdraw(users, users[0].id, 1500);

console.log();
withdraw(users, users[0].id, 200);

// // console.log();
// // checkBalance(user);

// H/W
// totalAmountStoredInTheBank(users); // 250

console.log();
closeAccount(users, users[0].id);

showAllUsers(users);
