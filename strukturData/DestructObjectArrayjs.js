// Destrcuturing Object & Array
// Iterasi Object dan Array adalah hal yang banyak digunakan dalam mengelola data di JavaScript

// JSON(JavaScript Object Notation) merupakan format data paling popluer yang digunakan dalam transaksi data saat ini

// [
//   {
//     id: 14,
//     title: "Belajar Fundamental Aplikasi Android",
//     author: "Google ATP",
//   },
//   {
//     id: 51,
//     title: "Belajar Fundamental Aplikasi Android untuk Pemula",
//     author: "Google ATP",
//   },
//   {
//     id: 123,
//     title: "Belajar Dasar Pemrograman Web",
//     author: "Google ATP",
//   },
//   {
//     id: 163,
//     title: "Belajar Fundamental Front-End Web Development",
//     author: "Google ATP",
//   },
// ];

// Jika kita lihat pada struktur JSON di atas, kita dapat menyimpulkan struktur tersebut dibangun dari array dan object. Karena kedua hal ini banyak digunakan untuk mengelola data pada JavaScript untuk memudahkan developer, ES6 menambahkan fitur untuk destructuring object dan array.

// Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil

// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// const firstName = profile.firstName;
// const lastName = profile.lastName;
// const age = profile.age;

// console.log(firstName, lastName, age);

// Itulah alasan ES6 menambahkan fitur yang memudahkan kita untuk destructuring object maupun array. Ketika kita ingin memecah struktur data menjadi bagian-bagian yang lebih kecil, kita akan dipermudah untuk mendapatkan data yang diinginkan.

// Penulisan sintaks destructing object pada ES6 pakai object litereal ({}) di sisi kiri dan operator assignment

// jadi guys profile ini merupakan object yang dalemnya ada variabel

// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// const { firstName, lastName, age } = profile;

// console.log(firstName, lastName, age);

// Tanda kurung mempresentasi object yang didestrukrasi
// Terdapat firstName, LastName, dan age yang merupakan variable buat nyimpen object dari profuke

//
// Destructing Assignment
// Melakukan Destructing pada variabel yang sudah dideklarasi

const profil = {
  namaDepan: "Yonkie",
  namaBelakang: "Yudha",
  umur: 22,
};

let namaDepan = "Yudha";
let namaBelakang = "Ardika";

// Menginisialisasi nilai baru dengan destructuring object

({ namaDepan, namaBelakang, isMale = true } = profil);

console.log(namaDepan);
console.log(namaBelakang);
console.log(isMale);

// Default Values
// Saat mendestructuring objek dan menetapkan variabel dangan nama yang bukan perupakan properti dari object. maka varibelnya jadi undifeined

// Assigning to different local variable names

const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18,
};

const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

console.log(localFirstName, localLastName, localAge);

// Bagaimana jika konsepnya destructing ARRAY?

// Contoh destructing pada array

const Favorit = ["G Class", "BMW", "TOYOTA"];
// const [firstCar, secondCar, thirdCar] = Favorit;

// console.log(firstCar);
// console.log(secondCar);
// console.log(thirdCar);

// Kode di atas merupakan contoh proses destructuring array. Di dalam array favorites terdapat 4 (empat) nilai string yang masing-masing nilainya dimasukkan ke variabel lokal firstFood, secondFood, thirdFood, dan fourthFood. Nilai dari array yang dimasukkan ke variabel lokal dipilih berdasarkan posisi di mana ia dideklarasikan pada array.

// Kalau mau ambil elemen ketiga dari array, maka tidak usah report repot

const [, , thirdCar] = Favorit;
console.log(thirdCar);

// Nah ini bakal nyetak yang thirdcar aja

// Destructuring Assignment
// Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung. Contohnya seperti beriku

const motor = ["Honda", "Yamaha", "Suzuki"];
let motorKu = "beat";
let motorDia = "nmax";

[motorKu, motorDia] = motor;

console.log(motorKu);
console.log(motorDia);

// CONTOH VARIABEL PENUKARAN YANG BIASANYA CONTOH CONTOH
var a = 1;
var b = 2;
var temp;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

temp = a;
a = b;
b = temp;

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

/* output
  Sebelum swap
  Nilai a: 1
  Nilai b: 2
  Setelah swap
  Nilai a: 2
  Nilai b: 1
  */

// Dengan array destructuring assignment, kita bisa menukar nilai variabel dengan mudah tanpa membuat variabel tambahan.

let v = 1;
let g = 2;

console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

[a, b] = [b, a]; //menetapkan nilai a dengan nilai b dan nilai b dengan nilai a

console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);

// Bagaimana jika Default Values

const makanan = ["Seafood"];
const [myFood, herFood="Salad"] = makanan;

console.log(myFood);
console.log(herFood);

//Maka myFood nilainya Seafood
// herFood nilainya Salad