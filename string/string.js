const fruits = "Banana,Orange,Kiwi, Apple, Mango";
const result = fruits.slice(-12);
console.log(result);

// const mySliceObj = {
//   myStr: "Banana,Orange,Kiwi, Apple ",
//   mySlice: (start, end) => {
//     if (end === undefined) end = mySliceObj.myStr.length;
//     if (start < 0) start = mySliceObj.myStr.length + start;
//     if (end < 0) end = mySliceObj.myStr.length + end;

//     // Two lines of code in a single line (example purpose)
//     // let j = 0,
//     //   k = 0;
//     // if (start) (j += 1), (k += 1);
//     // console.log("J: " + j + " K: ", k);

//     let output = "";
//     for (let i = start; i < end; i++) {
//       output += mySliceObj.myStr[i];
//     }
//     return output;
//   },
// };

// console.log(mySliceObj.mySlice(-12, -8));
