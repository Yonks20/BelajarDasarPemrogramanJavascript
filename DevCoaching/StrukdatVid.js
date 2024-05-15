// Strukdat

// // 1. Membuat Array

// const days = ["senin", "selasa", "rabu"];

// // 2. Elemen di dalam array diakses atau diubah melalui key (indec)
// days[0] = "Monday";
// console.log(days);

// days[3] = "Kamis";
// console.log(days);

// // Di array terdapat fungsi untuk menambahkan elemen baru
// days.push("Jumat");
// console.log(days);

// // 3. Elemen boleh memeiliki data yang berbeda

// const myArray = ["senin", 2, true];
// console.log(myArray);

// // 4. Jika mau ngecek array atau bukan, tipe data array adalah objek
// console.log(Array.isArray(myArray));

// 5. Looping sepanjang elemen menggunakan for of,, forEach dan lainnya.

const days = ["senin", "Selasa", "Rabu", "Kamis"];

for (const day of days) {
  console.log(day);
}

console.log("           ");

// Menggunakan for each
days.forEach((day) => {
  console.log(day);
});

// 6. Memiliki properti lengrh yang menyimpan jumlah dari elemen.
console.log(days.length);
// ini merupakan jumlah elemen yang ada