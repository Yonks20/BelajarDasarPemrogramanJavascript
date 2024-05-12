// OPERATORRR
// Dalam Bahasa pemrograman, operator adalah simbol yang memberi tahu interpreter untuk melakukan operasi seperti matematik  Ada beberapa operator, yaitu

// 1. ASSIGNMENT OPERATOR
/*
Assignment operator digunakan untuk memberikan nilai pada variabel, simbol dari assignment operator adalah sama dengan = 
*/

let x = 1;
let y = 2;

x += y;
x -= y;
x *= y;
x /= y;
x %= y;

console.log(x);

// Pada contoh kode di atas, terdapat expression x += y; Apa artinya? Assignment operator tersebut digunakan sebagai shortcut dari x = x + y. Cara ini juga dapat digunakan pada operator aritmatika lain seperti, perkalian, pengurangan, pembagian, dan lainnya.

// COMPARASION OPERATOR
console.log("              ");
console.log("COMPARASION OPERATOR");

let a = 190;
let b = 290;

console.log(a < b);
console.log(a > b);

console.log("              ");

// CONTOH PENGGUNAAN ==, ===, !== COMPARASION YANG MENJEBAK

let aString = "20";
let bNumber = 20;

console.log(aString == bNumber);
console.log(aString != bNumber);
console.log(aString === bNumber);
console.log(aString !== bNumber);

// LOGICAL OPERATOR
console.log("              ");
console.log("LOGICAL OPERATOR");

// ADA &&, ||, !

let i = 10;
let o = 20;

// GUNAKKAN AND OPERATOR
console.log(i < 15 && o < 25); //Right Condition
console.log(i > 5 && o > 25); //Wrong Condition

// GUNAKAN OR OPERATOR
console.log(i < 15 || o > 10);
console.log(i < 20 || o < 25);
console.log(i > 20 || o > 25); //false condition
