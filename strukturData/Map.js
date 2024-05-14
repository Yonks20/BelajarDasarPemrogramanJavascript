// MAP
// Merupakan tipe data yang menyimpan koleksi data dengan format key-value layaknya object. Yang membedakkannya adalah MAP yang memperbolehkan key dan tupe data apa pun,

const myyMap = new Map();

// Menetapkan nilai dari MAP, pakai arrat multi dimensi seperti ini

const myMap = new Map([
  ["1,", "a string key"],
  [1, "a number key"],
  [true, true],
]);

console.log(myMap);

// outptnya bakal
// Map(3);
// {
//     '1' => 'a String key', 1 => 'a number key', true=>true
// }
/* output
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/

// Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().

// CONTOH MENGGUNAKAN GET SET

const ibuKota = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);

console.log(ibuKota.size);
console.log(ibuKota.get("London"));

ibuKota.set("New Delhi", "India");
console.log(ibuKota.size);

// Bisa juga
