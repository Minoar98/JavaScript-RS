//


const arr = [
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


function func(value) {
  const isGotAPlus = value.marks >= 80
  const isFail = value.marks <= 33

  return {
    ...value, // Copy
    name:`${value.name} Islam`, // update,
    isGotAPlus, // add
    isFail //add
  };
}

const result = arr.map(func);
console.log(result);