// OBJECT
// Membuat object

const car = {
  brand: "Honda",
  model: "Sedan",
  color: "White",
  "Jumlah roda": 4,
  2: true,
  engine: {
    vendor: "Mitsubishi",
  },
};

// Bakal automatis keubah menjadi string

// console.log(car);

// 2. Cara mengakses proprerti
console.log(car.brand);
console.log(car["Jumlah roda"]);
console.log(car[2]);

// 3. Cara menghapus
delete car.brand;
console.log(car);
