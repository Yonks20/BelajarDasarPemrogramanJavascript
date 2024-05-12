// Menuliskan program utama JavaScript

console.log("Hello World");

// Ini adalah contoh komen

/* 
Ini contoh buat komen panjangggg
*/

let lastName;
lastName = "Yudha";
console.log(lastName);

// Outputnya bakal Yudha
// Ada cara lain yaitu langsung aja

let firstName = "Yonkie";
console.log(firstName);

// Contoh
// let fullName = let lastName;
// Error karena let lastName adalah sebuah statement untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.

let fullName = (lastName = "Ardika");
console.log(fullName);
// Merupakan expression jadi kode gaerror

let FullName = "Yudha" + lastName;
console.log(FullName);

// Nah kita coba penggunaan variable lainnya yaitu const

const z = 200;
console.log(z);
// z = 2;
// console.log(z);

// Apa yang terjadi?
// Gabisa jalan karena constant variable
/* TypeError: Assignment to constant variable. */
