// TIPE DATAAA

// pengklasifikasi data berdasar jenis, tipe data ini dari variable
// 1. Undefined
// 2. Number

// Contoh undefined
let x;
console.log(typeof x);

// Contoh number
let y = 100;
console.log(typeof y);

let c = 20.34;
console.log(typeof c);

/*

Di tipe number, bisa melakukan operasi matematika yaotu
1. Penjumlahan
2. Pengurangan
3. Pembagian
4. Perkalian
5. Sisa Hasil Bagi
6. Perpangkatan

*/

// Mari kita contohkan pengggunaan operasi matematika dengan tipe data number

let v = 90;
let b = 20;

console.log(v + b);
console.log(v - b);
console.log(v * b);
console.log(v / b);
console.log(v % b);

console.log("            ");
console.log("            ");

// PERCOBAAN INCEMENT DAN DECREMENT PADA OPERASI ARITMATIKA
// X++ dan ++X
console.log("Percobaan Increment dan Decrement");

let sesudahx = 5;
console.log(sesudahx++);
// Output yang dikeluarkan adalah 5

let sebelumx = 7;
console.log(++sebelumx);
// Output yang dikeluarkan adalah 8

console.log("            ");
// Percobaan BIG INT
console.log("Percobaan BigInt");

const bigNumber = 120931290303298213098123098912380129380891320921309980213829013813290213980n;
const myInt = 12321302199021312930902130921390231902139012390213903201;

console.log(bigNumber);
console.log(myInt);

const bigButSmall = 7n;
console.log(bigButSmall);

// BigInt juga bisa buat operasi aritmatika, bedanya di pembagian akan dibulatkan kebawah tanpa adanya desimal

console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

console.log("            ");

//TIPE DATA STRING
let sayHi = "Hello";
console.log(sayHi);

let tandaPetik = '"What do you want to order?" I asked to her';
console.log(tandaPetik);

// Jika ada 1 petik mau digunakan pakai backslash \ biar tidak ambigu

let backslash = 'I asked her "How\'s ur day today?"';
console.log(backslash);

console.log("            ");

console.log("String Concatenation");
// Pada string jika pakai tanda + maka akan menggabungkan dua teks menjadi satu contohnya
let text1 = "Halo";
let text2 = "Nama saya yonkie";
console.log(text1 + text2);

//STRING INTERPOLATION
console.log("String interpolation");

let inter = "David";
console.log(`Halo nama saya ${inter}`);

console.log("            ");

// TIPE DATA BOOLEAN

console.log("Tipe data Boolean");
let a = true;
let n = false;

console.log(typeof a);
console.log(typeof n);

// Menggunakan Operator Komparasi kurang atau lebih dari

const angka1 = 10;
const angka2 = 20;

let isGreater = angka1 > angka2;
let isLesss = angka1 < angka2;

console.log(isGreater);
console.log(isLesss);

// TIPE DATA NULL
console.log("            ");

console.log("Tipe Data Null");

let contohNull = null;
console.log = contohNull;

// TIPE DATA SYMBOL

const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 == id2);
