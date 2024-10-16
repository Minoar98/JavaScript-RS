// const person = {
//     firstName:"Tamim",
//     lastName:"Iqbal",
//     age: 20,
//     occupation:"student",
//     favouriteColor:"blue",
//     battingStyle:0, 

// }

// console.log(person.firstName+lastName);

function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
    // return `${firstName} ${lastName}`; // string literal
  }
  
  console.log(fullName('Tamim', 'Iqbal'));


  const person = {
    firstName: 'Tamim',
    lastName: 'Iqbal',
    age: 20,
    occupation: 'student',
    favouriteColor: 'blue',
    battingStyle: false,
    totalOfLast10ODIRuns: 3000,
    last10ODIRuns: [10, 5, 7, 6, 3],
    address: {
      street: '123 Main Street',
      city: 'New York',
      country: 'USA',
    },
  };
  
  // console.log('Full name: ' + person.firstName + ' ' + person.lastName);
  console.log(
    `Full name: ${person.firstName} ${
      person.lastName
    } and after 5 years, his age will be ${person.age + 5} years old`
  );


//   person.battingStyle = false
// !person.battingStyle = true;

// if (true) {
//   console.log('Left hand batsman');
// } else {
//   console.log('Right hand batsman');
// }