// 5. Use map to create a new array of objects if after adding & calculting
// 'discountedPrice' property (10% off the original price),
// for below $15 (discountedPrice), add '(cheap)' tag in that specific product title.

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
  // let title = value.title
  // if (discountedPrice < 15) {
  //   title += '(cheap)';
  // }

  // Alternatively,
  // let title = ''
  // if (discountedPrice < 15) {
  //   title = `${value.title}(cheap)`;
  // }

  // return {
  //   id: value.id,
  //   title: `${value.title}${discountedPrice < 15 ? '(cheap)': ''}`,
  //   price: value.price,
  //   imageUrl: value.imageUrl,
  //   description: value.description,
  //   discountedPrice: discountedPrice
  // };

  return {
    ...value, // Copy
    discountedPrice, // Add
    title: `${value.title}${discountedPrice < 15 ? "(cheap)" : ""}`, // Update
  };
}

const result = array.map(discountedPriceFunc);
console.log(result);
