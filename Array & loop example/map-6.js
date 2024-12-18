// Use map to create a new array of objects where each product has a
// 'discountedPrice' property (10% off the original price + 5% vat),
// also track the extra property named 'discount' & 'vat' with it's own value.

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
  const discountedPrice = value.price - value.price * 0.1 + value.price * 0.05;
  const discount = value.price * 0.1;
  const vat = value.price * 0.05;

  return {
    ...value, // copy
    discountedPrice, // add
    discount, //// add
    vat, // add
  };
}

const result = array.map(discountedPriceFunc);
console.log(result);
