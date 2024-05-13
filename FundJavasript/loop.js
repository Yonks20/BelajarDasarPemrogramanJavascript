// Loop

// looping dan For Loop
// "for" merupakan salah satu cara yang banyak digunakan

// for(inisialisasi variabel; test kondisi; perubahan nilai variabel){
//     //do something
// }

// CONTOH SIMPEL FOR LOOP

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log("              ");
// Jika i sama dengan 0
// dan dikasi kondisi i itu kurang dari 5
// Jika benar maka 0 akan ditambah sama 1, sampe bernilai 4, karena batasnya 5

// Outputnya akan 0,1, 2, 3, 4

// CONTOH FOR OF LOOP

// for (arrayItem of myArray){
//     //do something
// }

let nama = ["Yudha", "Yonkie", "Ardika"];

for (const arrayItem of nama) {
  console.log(arrayItem);
}

console.log("               ");
console.log("Ini contoh While");

// WHILE AND DO WHILE

// WHILE
let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

console.log("               ");
console.log("Ini contoh Do while");

// DO WHILE
let y = 1;

do {
  console.log(y);
  y++;
} while (y > 10);

let firstName = "yonkie";
let lastName = "yudha";
let age = 20;
isMarried = false;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isMarried);

/**
 * Jangan hapus kode di bawah ini
 */

module.exports = {
  firstName,
  lastName,
  age,
  isMarried,
};

function scoreChecker(score) {
  let result = 90;

  if (score >= 90) {
    result = "Selamat! Anda mendapat 'nilai A'";
  } else {
    result = "Maaf anda kurang beruntung";
  }

  return result;
}

module.exports = scoreChecker;
