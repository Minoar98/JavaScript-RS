// 1. Use the map method to create an array containing only the title of each product.

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


function func(value) {
  return {
    title: value.title,
  };
}

const result = array.map(func);
console.log(result);