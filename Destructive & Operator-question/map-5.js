// 3. Use map to create a new array of objects where each product has a
//  'discountedPrice' property
// (10% off the original price).

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

function discountedPriceFunc(value) {
  const discountedPrice = value.price - value.price * 0.1;
  return {
    ...value, // copy
    discountedPrice, // add
  };
}

const result = array.map(discountedPriceFunc);
console.log(result);
