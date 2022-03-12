// Soal 1
var daftarHewan = ["2. Komodo", "5. Buaya", "3. Cicak", "4. Ular", "1. Tokek"];

// Jawaban Soal 1
daftarHewan.sort();
for (let i = 0; i < daftarHewan.length; i++) {
  console.log(daftarHewan[i]);
}

// Jawaban Soal 2
function introduce(data) {
  return (
    "Nama saya " +
    data["name"] +
    ", umur saya " +
    data["age"] +
    " tahun, alamat saya di " +
    data["address"] +
    ", dan saya punya hobby yaitu " +
    data["hobby"] +
    ""
  );
}
// Soal 2
var data = {
  name: "John",
  age: 30,
  address: "Jalan Pelesiran",
  hobby: "Gaming",
};

var perkenalan = introduce(data);
console.log(perkenalan);

// Soal 3
var hitung_1 = hitung_huruf_vokal("Mohamad");

var hitung_2 = hitung_huruf_vokal("Syalva");

console.log(hitung_1, hitung_2); // 3 2

// Jawaban Soal 3
function hitung_huruf_vokal(data) {
  return data.match(/[aeiou]/gi).length;
}

// Soal 4
console.log(hitung(0)); // -2
console.log(hitung(1)); // 0
console.log(hitung(2)); // 2
console.log(hitung(3)); // 4
console.log(hitung(5)); // 8

// Jawaban Soal 4
function hitung(data) {
  return data;
}
