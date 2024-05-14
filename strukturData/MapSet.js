// SET
// Merupakan kumpulan nilai (set of values)

// Perbedaan set dan struktur data yang lain adalah data pada set tidak berurutan dan juga tidak diindeks, data set bersifat unik dna tidak ada duplikasi

const numberSet = new Set([1, 4, 6, 3, 1]);

numberSet.add(5);
numberSet.add(29);
numberSet.add(99);

numberSet.delete(1);

console.log(numberSet);

// Pada fungsi set maka nilai yang dimasukkan bukan indexnya tetapi nilai itu sendiri