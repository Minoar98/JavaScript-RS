// Create Account

function createAccount(account) {
  const users = [
    {
      id: Date.now().toString(),
      name: "SYED MINAOR HASN",
      bankInfo: {
        accountNo: "1740850027450",
        balance: "$1000",
      },
    },
    // {
    //   id: Date.now().toString(),
    //   name: "Rezoan Shakil Prince",
    //   bankInfo: {
    //     accountNo: "1711050007520",
    //     balance: "$2000000000000",
    //   },
    // },
  ];

  console.log("A new user is created.");
  console.log(users);
  return account;
}
// Now call the function
createAccount(account);
