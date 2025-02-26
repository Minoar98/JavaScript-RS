const users = [
  {
    id: 1,
    name: "Alice",
    age: 25,
    country: "USA",
    hobbies: ["Reading", "Traveling"],
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
    country: "UK",
    hobbies: ["Cooking", "Cycling"],
  },
  {
    id: 3,
    name: "Charlie",
    age: 22,
    country: "Canada",
    hobbies: ["Gaming", "Drawing"],
  },
];
// 3. Sort ascending order by country
const ascendingOrderByCountry = users.sort((a, b) => {
  if (a.country < b.country) {
    return -1;
  } else if (a.country > b.country) {
    return 1;
  }
  return 0;
});
console.log(ascendingOrderByCountry);
