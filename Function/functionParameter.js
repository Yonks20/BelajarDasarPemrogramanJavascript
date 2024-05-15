// Fungsi merupakan suatu blok kode yang dapat meneriam input dan menghasilkan output terntentu. Input ke dalam sebuah fungsi dikirimkan melalui parameter

// Dalam fungsi BAKAL BANYAK KETEMU PARAMETE DAN ARGUMENT/

// PARAMETER
// Merupakan variabel yang didefinisikan sebagai input dari fungsi
//
function multiply(a, b) {
  return a * b;
}

// Argumen merupakan nilai atau expression yang dimasukkan kedalam fungsi
multiply(3, 4);

// Parameter dari fungsi dapat berupa tipe data apa pun, mulai dari string, number, object, bahkan fungsi lainnya

// Jika parameter fngsi adalah sebauh object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya.
// CONTOH

const user = {
  id: 25,
  displayName: "Yudha",
  fullName: "Yonkie Yudha ARdika",
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);

// TAHAPNYA
// 1. BUAT VARIABLE USER DULU
/* 2. BUAT FUNCTION introduce ({elemen yang mau diambil}){
    baru tampilin console.log('${elemen yang mau}')
}

kalo udah baru panggil fungsi dan variablenya
jadi 
introduce(user)
fungsi(variable/objek)
*/

// DEFAULT PARAMETERSS

function rumusExponen(baseNumber, eksponen) {
  const hasil = baseNumber ** eksponen;
  console.log(`${baseNumber}^${eksponen} = ${hasil}`);
}

rumusExponen(2, 9);

// HASIL DIATAS AKAN UNDIFNED JIKA ANGKA LEBIH KECIL

// BISA DITAMBAHKAN DEFAULT PADA PARAMETERNYA
