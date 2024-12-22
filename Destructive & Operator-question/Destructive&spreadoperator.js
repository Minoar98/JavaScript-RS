// 1. Object distructure
// 2. Spread Operator

const product = {
  id: 1,
  title: "Product 1",
  price: 19.99,
  imageUrl: "image1.jpg",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

// Topic-01
// console.log(product.title); // ObjectName.PropertyName,
// For example: aVariableWhereIStoredAllTheProductInformation.storedProductName
const { title, description } = product;
console.log(title, description);
console.log(product.price); // With Proper Name

// Topic-02 - Alias (Rename)
const { imageUrl: img } = product;
console.log(img);

// Topic-03 (new object's property name & external variable name are equal, only then)
const price = 20.99;
const productDuplicate = {
  price,
};
console.log(productDuplicate);

// Topic-04 (Spread Operator) - Only Copy
const newProduct = { ...product };
console.log(newProduct);

// Topic-05 (Spread Operator) - Copy & Add
const newProduct2 = { ...product, category: "Electronics", stock: 100 };
console.log(newProduct2);

// Topic-06 (Spread Operator) - Copy & Update & Add
const newProduct3 = {
  ...product,
  category: "Electronics",
  title: "Product new 3",
};
console.log(newProduct3);

// -------------------------------------------
const newP = {
  title: "P1", // Add
  price: 2,
  title: "P2", // Update
};
