// FUNCTION

// log() di console.log() itu merupakan sebuah fungsi
// Intinya
// input => FUNCTIONS => Output

// Function adalah variabel yang berisi blok logika, Blog Logika tersebut akan dieksekusi ketika variabelnya dipanggil

// fungsi di deklarasi dengan keyword function dan nama fungsinya
// Nama fungsi diikuti tanda kurung (parantheses) tanpa spasi, lalu terdapat sepasang kurung kurawal yang berisi logika dari fungsi tersebut

// contohnya
// function multiply(a, b) {
//   return 3 * 5;
// }

// Dalam kurung membutuhkan informasi tambahan yang disebut dengan parameter
// INGAT DALAM KURUNG ITU PARAMETER BIAR GALUPA HOY OK

// CONTOH FUNCTION SEDERHANA

function greeting() {
  console.log("Good morning");
}

greeting();

// Tetapi jika sebuah fungsi hanya menjalankan baris kode yang sama dirasa kurang fungsional, bukan? Kita dapat membuat fungsi tersebut untuk menerima dan memanfaatkan parameter untuk mengubah perilaku dari fungsinya.

// Untuk nambahin parameter di fungsi, tambah variable didalam tanda kurung fungsi. Tidak perlu keyword var, let, ataupun const. Kita juga bisa menambahkan lebih dari satu parameter dengan memberikan tanda koma antar variabel parameterny. Contohnya fungsi greeting akan kita tambahkan parameter name dan language

// CONTOHNYA

function greetings(name, language) {
  if (language === "English") {
    console.log(`Good Morning ${name}`);
  } else if (language === "Indonesia") {
    console.log(`Selamat Pagi ${name}`);
  } else {
    console.log(`Bonjour ${name}`);
  }
}

greetings("Yonkie", "English");

// Agar fungsi bisa mengembalikan nilai, gunakan keyword return diikuti dengan nilai yang akan dikembalikan. Nilai kembalian tidak hanya number, bisa juga berupa string, boolean, object, array, atau tipe yang lain.

// Seperti ini fungsi greeting jika kita ubah

let greetingMessage = greetings("Yudha", "Indonesia");
console.log(greetingMessage);

// Satu hal lagi, function dapat menghasilkan output atau mengembalikan sebuah nilai. Dengan nilai kembalian, kita dapat membuat function yang berfungsi untuk melakukan perhitungan matematika dan hasilnya dapat kita masukkan ke dalam sebuah variabel. Contohnya seperti ini:

function multiply(a, b) {
  return a * b;
}

let result = multiply(10, 9);
console.log(result);

//EXPRESSION FUNCTION

const menyapa = function (nama, bahasa) {
  if (bahasa === "Indonesia") {
    return "Selamat Pagi " + nama + "!";
  } else if (bahasa === "English") {
    return "Good Morning " + nama + "!";
  } else {
    return "Bonjour " + nama + "!";
  }
};

console.log(menyapa("Ardika", "Indonesia"));
