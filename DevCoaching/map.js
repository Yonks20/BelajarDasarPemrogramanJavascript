// Menyimpan nilai pada map dengan method set()

// const myMap = new Map();
// myMap.set(key, value);
// myMap.set(key, value);

// const cara2 = new Map([
//   ["cara2", 3],
//   ["cara3", 4],
// ]);

const stockOfFruits = new Map([
  ["melon", 2],
  ["semangka", 3],
  ["pepaya", 4],
]);

// Kalau mau mengubah bisa pakai set
stockOfFruits.set("melon", 5);

console.log(stockOfFruits);
const stockOfMelon = stockOfFruits.get("melon");
console.log(stockOfMelon);
