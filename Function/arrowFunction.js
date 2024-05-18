// ARRAOW FUNCTION EXPRESSION mirip seperti regular function
// Fungsi didefinisikan menggunakan tanda panah/fat arrow (=>) tentunya penulisan arrow function ini akan lebih singkat

// REGULAR FUNCTION dapat berupa function declaration dan function expression
// ARROW FUNCTION hanya berupa expression function saja

// REGULAR FUNCTION
// Function declaration
function sayHello(greet) {
  console.log(`${greet}!`);
}

// Function Expression
const sayName = function (name) {
  console.log(`Nama saya ${name}`);
};

// ARROW FUNCTION
const sayHelloo = (greets) => {
  console.log(`${greets}!`);
};

const sayNama = (nama) => {
  console.log(`Nama saya ${nama}`);
};

// Pada arrow function kita tidak perlu menuliskan keyword function setiap membuat fungsi. Kita tetap menuliskan parameter di dalam tanda kurung lalu diikuti dengan tanda panah (=>) sebelum kurung kurawal.

// Jika punya satu parameter =

const namaSaya = (saya) => {
  console.log(`Nama saya ${saya}`);
};
namaSaya("Yudha");

// KALAU GA BUTUH PARAMETER JUGA BISA =
const sayhai = () => {
  console.log("Selamat Pagi Semuanya!");
};

sayhai();

// Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal. Tentunya ini akan menghemat baris kode yang kita tulis.

const sayHi = (hi) => console.log(`Nama saya ${hi}`);
sayHi("Layka");

// Tidak perlu lagi pakai return
const perkalian = (a, b) => a * b;
console.log(perkalian(3, 5));
