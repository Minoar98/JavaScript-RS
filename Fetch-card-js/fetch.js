const button = document.getElementById("btn");
const clearButton = document.getElementById("clear-btn");
const usersGrid = document.getElementById("users-grid");

// const buttonFn = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.text())
//     .then((result) => {
//       let users = [];
//       users = [...users, ...JSON.parse(result)]; // deep copy
//       console.log("users", users);

//       const user = users[0];
//       const user1 = users[1];

//       usersGrid.innerHTML = `<div class="user-card">
//         <img src="./img/ronaldo.jpeg" alt=${user.name} class="photo" />
//         <div class="info">
//           <p><strong>Name:</strong> ${user.name}</p>
//           <p><strong>Username:</strong> ${user.username}</p>
//           <p><strong>Company:</strong> ${user.company.name}</p>
//           <p><strong>Email:</strong> ${user.email}</p>
//           <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
//           <p><strong>Zipcode:</strong> ${user.address.zipcode}</p>
//           <p><strong>Phone:</strong> ${user.phone}</p>
//           <p><strong>Website:</strong> ${user.website}</p>
//         </div>
//       </div>
//       <div class="user-card">
//         <img src="./img/ronaldo.jpeg" alt=${user1.name} class="photo" />
//         <div class="info">
//           <p><strong>Name:</strong> ${user1.name}</p>
//           <p><strong>Username:</strong> ${user1.username}</p>
//           <p><strong>Company:</strong> ${user1.company.name}</p>
//           <p><strong>Email:</strong> ${user1.email}</p>
//           <p><strong>Address:</strong> ${user1.address.street}, ${user1.address.suite}, ${user1.address.city}</p>
//           <p><strong>Zipcode:</strong> ${user1.address.zipcode}</p>
//           <p><strong>Phone:</strong> ${user1.phone}</p>
//           <p><strong>Website:</strong> ${user1.website}</p>
//         </div>
//       </div>`;
//     })
//     .catch((error) => console.error(error));
// };

// // remove button
// const clearButtonFn = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.text())
//     .then((result) => {
//       let users = [];
//       users = [...users, ...JSON.parse(result)]; // deep copy
//       console.log("users", users);

//       usersGrid.innerHTML = "";
//     })
//     .catch((error) => console.error(error));
// };

// button.addEventListener("click", buttonFn);
// button.addEventListener("click", buttonFn);

// const buttonFn = () => {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => response.text())
//     .then((result) => {
//       let users = [];
//       users = [...users, ...JSON.parse(result)]; // deep copy
//       console.log("users", users);

//       const usersInfo = users
//         .map((user) => {
//           return `<div class="user-card">
//             <img src="./img/ronaldo.jpeg" alt="${user.name}" class="photo" />
//             <div class="info">
//               <p><strong>Name:</strong> ${user.name}</p>
//               <p><strong>Username:</strong> ${user.username}</p>
//               <p><strong>Company:</strong> ${user.company.name}</p>
//               <p><strong>Email:</strong> ${user.email}</p>
//               <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
//               <p><strong>Zipcode:</strong> ${user.address.zipcode}</p>
//               <p><strong>Phone:</strong> ${user.phone}</p>
//               <p><strong>Website:</strong> ${user.website}</p>
//             </div>
//           </div>`;
//         })
//         .join("");
//       usersGrid.innerHTML = usersInfo;
//     })
//     .catch((error) => console.error(error));
// };

const buttonFn = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.text())
    .then((result) => {
      let users = [];
      users = [...users, ...JSON.parse(result)]; // deep copy
      console.log("users", users);
      let usersInfo = "";
      users.forEach((user) => {
        usersInfo += `<div class="user-card">
            <img src="./img/ronaldo.jpeg" alt="${user.name}" class="photo" />
            <div class="info">
              <p><strong>Name:</strong> ${user.name}</p>
              <p><strong>Username:</strong> ${user.username}</p>
              <p><strong>Company:</strong> ${user.company.name}</p>
              <p><strong>Email:</strong> ${user.email}</p>
              <p><strong>Address:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
              <p><strong>Zipcode:</strong> ${user.address.zipcode}</p>
              <p><strong>Phone:</strong> ${user.phone}</p>
              <p><strong>Website:</strong> ${user.website}</p>
            </div>
          </div>`;
      });
      usersGrid.innerHTML = usersInfo;
    })
    .catch((error) => console.error(error));
};

//  remove button
const clearButtonFn = () => {
  usersGrid.innerHTML = "";
};

button.addEventListener("click", buttonFn);
clearButton.addEventListener("click", clearButtonFn);

// {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   }

// <div class="user-card">
//   <img src="./img/ronaldo.jpeg" alt="User Photo" class="photo" />
//   <div class="info">
//     <p><strong>Name:</strong> Lionel Messi</p>
//     <p><strong>Username:</strong> lionelmessi</p>
//     <p><strong>Company:</strong> LM10</p>
//     <p><strong>Email:</strong> messi@example.com</p>
//     <p><strong>Address:</strong> 123 Main St</p>
//     <p><strong>Phone:</strong> (123) 456-7890</p>
//     <p><strong>Website:</strong> lionelmessi.com</p>
//   </div>
// </div>
