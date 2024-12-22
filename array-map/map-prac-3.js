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
  if (value.marks < 80) {
    // below 80
    return {
      name: value.name,
      marks: value.marks,
      isGotAPlus: false,
    };
  } else {
    // above 80
    return {
      name: value.name,
      marks: value.marks,
      isGotAPlus: true,
    };
  }
}

function func2(value) {
  return {
    name: value.name,
    marks: value.marks,
    isGotAPlus: value.marks >= 80 ? true : false,
  };
}

function func3(value) {
  return {
    name: `${value.name} Islam`,
    marks: value.marks,
    isGotAPlus: value.marks >= 80,
  };
}

// Part-02 er code
function func4(value) {
  return {
    name: value.name,
    marks: value.marks,
    isGotAPlus: value.marks >= 80,
    isFail: value.marks <= 33,
  };
}

const result = arr.map(func4);
console.log(result);

// Part-01
// isGotAPlus - Add an extra property (boolean), based on individual marks

// Output: [
//   {
//     name: "David",
//     marks: 75,
//     isGotAPlus: false,
//   },
//   {
//     name: "Eve",
//     marks: 80,
//     isGotAPlus: true,
//   },
//   {
//     name: "Frank",
//     marks: 87,
//     isGotAPlus: true,
//   },
//   {
//     name: "Grace",
//     marks: 32,
//     isGotAPlus: false,
//   },
//   {
//     name: "Henry",
//     marks: 68,
//     isGotAPlus: false,
//   },
// ];


// Part-02
// isGotAPlus - Add an extra property (boolean), based on individual marks
// isFail - Add an extra property (boolean), based on individual marks below 33

// Output: [
//   {
//     name: "David",
//     marks: 75,
//     isGotAPlus: false,
//     isFail: false,
//   },
//   {
//     name: "Eve",
//     marks: 80,
//     isGotAPlus: true,
//     isFail: false,
//   },
//   {
//     name: "Frank",
//     marks: 87,
//     isGotAPlus: true,
//     isFail: false,
//   },
//   {
//     name: "Grace",
//     marks: 32,
//     isGotAPlus: false,
//     isFail: true,
//   },
//   {
//     name: "Henry",
//     marks: 68,
//     isGotAPlus: false,
//     isFail: false,
//   },
// ];