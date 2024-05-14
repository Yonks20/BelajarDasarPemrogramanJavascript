// Spread Operator
// Spread digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen.
// Spread operator dituliskan dengan tiga titik(...) mari kita lihat contoh kode berikut

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

// Sama seperti kita menulisakn ini
// console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

// Selain array, spread operator juga bisa digunakan untuk object literals. Hal ini dapat menggabungkan object dengan kode yang lebih ringkas

const objek1 = { firstName: "Yonkie", age: 22 };
const objek2 = { lastName: "Yudha", gender: "Male" };

const objekGabung = { ...objek1, ...objek2 };
console.log(objekGabung);
