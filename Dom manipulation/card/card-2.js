const newElement = document.createElement("p");
newElement.innerHTML = 'ABC';

console.log(newElement);
console.dir(newElement);

document.body.appendChild(newElement);

const newElement1 = document.createElement("p");
newElement1.innerHTML = 'Minoar';

const div = document.querySelector('#card-id');
div.appendChild(newElement1);
div.appendChild(newElement);

// 1. Element tag create kora
// 2. tag e content deya
// 3. Body r last e kuno created tag add kora
// 4. j kuno tag er votore created tag add kore

// TODO:
// 1.
// new css id/class defined kora thakbe css file e
// oita 'add' korben newly created tag e

// 2. 
// aro css id/class 'attach' korben kivabe

// 3.
// 2 ta way te

// const numbers = [1, 2, 3, 5];

// const newF = () => {
//   return 10;
// }

// const val = newF();
// console.log(val);

// const obj = {
//   // method
//   newF: () => {
//     return 15;
//   }
// }

// const val2 = obj.newF();
// console.log(val2);