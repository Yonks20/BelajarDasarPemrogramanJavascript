// Variable scoping. Ada beberapa variable yang bisa diakses untuk seluruh script yang dibuat tapi ad ajuga beberapa yang bisa beberapa tempat aja variablenya

// VARIABEL YANG DAPAT DIAKSES DARI SELURUH SCRIPT DISEBUT DENGAN "GLOBALLY SCOPED"
// YANG HANYA DIAKSES HANYA PADA FUNGSI DISEBUT "LOCALLY SCOPED"

// Variable js pakai fungsi untuk mengelola cakupannya
// variable didefinisiakn diluar fungsi, maka akan bersifat global
// Jika didefinisikan didalam fungsi, maka akan bersifat lokl

// Global Variableee
const a = "a";

function parent() {
  // Local variable, bisa diakses pada parent() dan child(), tapi bisa diakses dari luar fungsi tersebut
}
const b = "b";

function child() {
  // Local variable, dapat diakses hanya pada fungsi child()
  const c = "c";
}

// console.log(a); // Bisa diakses, karena a adalah variabel global

// parent(); // Memanggil fungsi parent

// function parent() {
//   console.log(b); // Bisa diakses, karena b dideklarasikan di dalam parent

//   function child() {
//     console.log(c); // Bisa diakses, karena c dideklarasikan di dalam child
//   }
// }

// console.log(b); // Tidak bisa diakses, ReferenceError: b is not defined
// console.log(c); // Tidak bisa diakses, ReferenceError: c is not defined

// Contoh error

function multiply(num) {
  total = num * num;
  return total;
}

let total = 9;
let number = multiply(20);

console.log(total);


// Perlu kita perhatikan, jika kita lupa menuliskan keyword let, const, atau var pada script ketika membuat sebuah variabel, maka variabel tersebut akan menjadi global.