// TIPE DATA OBJECT
// Bisa menympan nilai dari beragam tipe data dan membentuk data yang lebih kompleks

// Cara menggunakannya? dengan cara

const users = {};

// Object itu berisi pasangan KEY dan VALUE Dikenal dengan property
// Penulisan KEY dan VALUE

// KEY harus berupa string dan ditulis sebelum titik dua, lalu ikut dengan value-nya

let object = {
  key1: "Contoh1",
  key2: "Contoh2",
  key3: "Contoh3",
};

const user = {
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tatooine",
};

// Untuk mengakses nilai dari properti object, kita dapat memanggil nama object lalu tanda titik.

console.log(`Halo nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user["home world"]}`);

// Selain dari dot operator, kita juga bisa akses properti dari object dengan bracket atau tanda kurung siku

// user["home world"];

// Selanjutnya kita coba memodifikasi object dengan asssignment operator =

const dreamcar = {
  name: "Mercedes Benz G-class",
  manufacturer: "Mercedez Benz",
  maxSpeed: "200mph",
  color: "Light Gray",
};

dreamcar.color = "Metallic red";
dreamcar.maxSpeed = "200Mph";
dreamcar.class = "Luxury SUV";
// Kita juga bisa delete property yang ada
delete dreamcar.maxSpeed;
console.log(dreamcar);

// Kenapa bisa mengubah nilai dari variablenya?

// Yang perlu diperhatikan adalah mengubah nilai berbeda dengan menginisialisasi ulang nilai. Ketika membuat sebuah object, kita tidak terikat dengan properti di dalamnya sehingga kita masih bisa memodifikasi nilainya. Berbeda jika kita menginisialisasi ulang variabel dari object.

// Kita bisa nambahin nilainya dengan tambahkan saja nilainya
