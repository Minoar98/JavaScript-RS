// Way-01: Create a Map
const mp = new Map([
  ['apple', 200],
  ['kiwi', 400],
  ['orange', 300],
]);

// 'apple' -> 200
// 'kiwi' -> 400
// 'orange' -> 300

// Way-02
mp.set('mango', 1000);

console.log(mp);

// Read the element
console.log(mp.get('apple'))

console.log(typeof mp)

console.log(mp.size)

// Delete an element
mp.delete('apple')

console.log(mp)

// Exist or not
console.log(mp.has('apple'))

// Delete all the elements
// mp.clear();
// console.log(mp)

// Will store any kind of value
mp.set(100, 'CSE');
console.log(mp);

mp.forEach((value, key) => {
  console.log(value, key)
})

console.log(mp.entries())
console.log(mp.keys())
console.log(mp.values())