// CONTOH IMPLEMENTASI IF ELSE

// const isRaining = true;
const isRaining = false;
console.log("Persiapan sebelum melakukan kegiatan");

if (isRaining) {
  console.log("Saya akan membawa payung");
} else {
  console.log("Saya tidak perlu bawa payung");
}

console.log("Berangkat Kegiatan");

// karena variabel isRaining bernilai true maka yang dijalankan yaitu baris pertama (isRaining)

console.log("               ");

let x = 90;

if (x > 70) {
  console.log(x);
} else {
  console.log("Nilai kurang dari 70");
}

// Jika x lebih dari 70 maka cetak nilai x
// tetapi jika x tidak lebih dari 70, maka muncul "Nilai Kurang dari 70"

// Kita juga bisa mengecek beberapa kondisi sekaligus

let language = "English";
// let greeting = null;
let greeting = "Greeting untuk selamat pagi";

if (language === "English") {
  greeting = "Good Morning!";
} else if (language === "French") {
  greeting = "Bonjour";
} else if (language === "Japanase") {
  greeting = "Ohayou Gozaimasu!";
}

console.log(greeting);

// Pengecekan kondisi akan dilakukan dengan statement if yang paling awal. Sehingga, ketika nilainya sudah french betul, maka berenti sampai disitu saja

// Percobaan terenary oprator atau conditional expressions. dengan ini kita bisa menuliskan if-else statement hanya dalam satu baris

// Condition ? true expression : false expression

// const isMember = false;
const isMember = true;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan discount sebesar ${discount * 100}%`);

// Jadi jika isMember berinali true = maka diskon akan 0.1 * 100 = 10%
// Tapi kalau isMember bernilai false = maka diskon akan menjadi 0*100% = 0%
// Persen diluar karena ini nanti bakal jadi string

// ternary ini butuh 3 operand
// 1. kondisi
// 2. Tanda tanya ?
// 3. true expression
// 4. false expression

// TRUTHY DAN FALSY

// Contoh Truthy dan Falsy
console.log("           ");

let name = "";

if (name) {
  console.log(`Halo, ${name}`);
} else {
  console.log("Nama masih kosong");
}

// KUIS IF ELSE

/**
 * Buatlah logika if untuk mengevaluasi nilai score dengan ketentuan:
 *  1. Jika score bernilai 90 atau lebih
 *      - Isi variabel result dengan nilai: 'Selamat! Anda mendapatkan nilai A.'
 *  2. Jika score bernilai 80 hingga 89
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai B.'
 *  3. Jika score bernilai 70 hingga 79
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai C.'
 *  4. Jika score bernilai 60 hingga 69:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai D.'
 *  5. Jika score bernilai di bawah 60:
 *      - Isi variabel result dengan nilai: 'Anda mendapatkan nilai E.'
 *
 *
 *  Note: - Mohon untuk tidak menghapus kode yang sudah ada sebelumnya.
 *        - Anda tidak perlu membuat variabel result dan score secara manual.
 *          Gunakan variabel yang sudah disediakan.
 *
 */

function scoreChecker(score) {
    let result;
  
    if(score >= 90){
      result = "Selamat! Anda mendapatkan nilai A.";
    }
    else if(score >= 80 && score <=89){
        result = "Anda mendapatkan nilai B.";
    }
    else if(score >= 70 && score <=79){
        result = "Anda mendapatkan nilai C.";
    }
    else if(score >= 60 && score <=69){
        result = "Anda mendapatkan nilai D.";
    }
    else if(score <60){
        result = "Anda mendapatkan nilai E.";
    }
  
  
    // Jangan hapus kode ini
    return result;
  }
  
  /**
   * Jangan hapus kode di bawah ini
   */
  module.exports = scoreChecker;