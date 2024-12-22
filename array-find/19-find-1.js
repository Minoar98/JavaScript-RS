const people = [
  {
    name: "David",
    marks: 75,
  },
  {
    name: "Eve",
    marks: 80,
  },
  {
    name: "Frank",
    marks: 87,
  },
  {
    name: "Grace",
    marks: 32,
  },
  {
    name: "Henry",
    marks: 68,
  },
];

function func(person) {
  return person.marks === 80;
}

const result = people.find(func);
console.log(result.name);

// alternatice way to fetch the name
const personName = people.find(func).name;
console.log('Name: ', personName);