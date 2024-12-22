// Use map to create an array of formatted price strings.
// Output: ['$19.99', '$14.99', '$24.99']

const array = [
  {
    id: 1,
    title: "Product 1",
    price: 19.99,
    imageUrl: "image1.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Product 2",
    price: 14.99,
    imageUrl: "image2.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Product 3",
    price: 24.99,
    imageUrl: "image3.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

/// object destructive

const { imageUrl: img } = array[0]; // Alias (Rename)
const { imageUrl: img1 } = array[1]; // Alias (Rename)
const { imageUrl: img2 } = array[2];
console.log(img);
console.log(img1);
console.log(img2);

console.log(`$${array[0].price}`);
console.log(`$${array[1].price}`);
console.log(`$${array[2].price}`)
