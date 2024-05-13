// Swicth case mirip seperti if else, swithc statement dilakukan untuk pengecekan yang banyak kondisi

// switch (expression) {
//   case value1:
//     // Do Something
//     break;

//   case value2:
//     // Do Something
//     break;
//   // Dan seterusnya

//   default:
//   // do something else
// }

// Expression berisi variabel atau expression yang ingin dievaluasi

// Untuk setiap kondisi yang mungkin terjadi, kita masukkan keyword case diikuti dengan nilai yang valid, kode akan dijalankan setelah titik 2. Break digunakan untuk keluar dari proses switch

// Default memiliki fungsi jika tidak ada nilai yang sama dengan variabel pada swicth maka akan dialihkan kesini

// CONTOH KODE SWICTH DARI IF ELSE SEBELUMNYA

let language = "French";
let greeting = null;

switch (language) {
  case "English":
    greeting = "Good Morning!";
    break;
  case "Japanese":
    greeting = "Ohayou Gozaimasu!";
    break;
  case "French":
    greeting = "Bonjour!";
    break;
  default:
    greeting = "Selamat Pagi!";
}

console.log(greeting);
