const d = new Date();
console.log(d);

const dates = new Date("2025-02-06");
console.log(dates);

// new Date(year, month, day, hours, minutes, seconds);

const d1 = new Date(2018, 0, 24, 10, 33, 30);
console.log(d1);

console.log(d1.toString());
console.log(d1.toString()[3]);

// interview question vvi
const d3 = new Date(); //todays date

console.log(d3.getMonth());

const month = d3.getMonth();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

console.log(months[month]);

const d4 = new Date(2025, 0, 25); // custom date
console.log(months[d4.getMonth()]);
