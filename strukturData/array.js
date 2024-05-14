// Array
// Array bisa menampung tipe data yang banyakk

let contohArray = ["Mobil", 2, 3, true, "Programming"];

console.log(contohArray);
console.log(contohArray[1]);
console.log(contohArray[2]);
console.log(contohArray[3]);
console.log(contohArray[4]);
console.log(contohArray[5]);

console.log("Panjang nilai contohArray adalah " + contohArray.length + ".");

// Sejauh ini kita baru belajar menginisialisasi dan mengakses elemen dari sebuah array. Pastinya Anda bertanya, “Bagaimana kita memanipulasi data pada array tersebut?”

// Untuk menambahkan data bisa pakai metode push()

// contohArray.push("Javascript");
// console.log(contohArray);

// // Untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop()

// contohArray.pop("Javascirpt");
// console.log(contohArray);

// // Untuk manipulasi data juga bisa pakai shift(), dan unshift()
// // shift() digunakan untuk mengeluarkan elemen pertama dari array.
// // unshift() digunakan untuk menambhkan/mengganti elemen di awal array
// contohArray.shift(); //untuk mengeluarkan elemen awal
// contohArray.unshift("Manggo"); //untuk menambahkan elemen awal
// console.log(contohArray);

// // Bagaimana jika inin menghapus data dari arrya? bisa pakai delete (namavariable[]) tetapi delete hanya menghapus dan membiarkannya kosong
// delete contohArray[3];
// console.log(contohArray);

// Untuk menghapus elemen, bisa pakai metode splice()
// contohArray.unshift("Mercedes", "Toyota", "Honda");
contohArray.splice(1, 1); //menghapus dari index 2 sebanyak 1 elemen
console.log(contohArray);

// Selain untuk menghapus elemen pada array, splice() juga dapat digunakan untuk menambahkan elemen pada array tersebut. Caranya dengan memberikan argumen ke-3 (atau selanjutnya, bersifat variadic) sebagai nilai yang akan dimasukan pada index yang diberikan pada argumen pertama.

// Contoh penggunaan splice ();
const month = ["January", "March", "April", "May"];
console.log("before splice: ", month);

month.splice(1, 0, "februari");
console.log("after splice", month);

// Tidak menghapus elemen apa pun dari array (karena deleteCount adalah 0).
// Menambahkan elemen 'February' di posisi indeks 1.

// RUmusnya adalah array.splice(start, deleteCount, item1, item2, ...);

// parameter 1 = start
// 