// Soal 1
// Buatlah fungsi menggunakan arrow function luas dan keliling persegi panjang dengan arrow function lalu gunakan let atau const di dalam soal ini

// Jawaban Soal 1
const luasPersegiPanjang = (p, l) => {
  return p * l;
};

let kelilingPersegiPanjang = (p, l) => {
  return 2 * (p + l);
};

console.log(luasPersegiPanjang(9, 5));
console.log(kelilingPersegiPanjang(18, 5));

// Soal 2
// Ubahlah code di bawah ke dalam arrow function dan object literal es6 yang lebih sederhana

// Jawaban Soal 2
const newFunction = (firstName, lastName) => {
  return {
    firstName,
    lastName,
    fullName: function () {
      console.log(`${firstName} ${lastName}`);
    },
  };
};

newFunction("William", "Imoh").fullName();

// Soal 3
// Gunakan metode destructuring dalam ES6 untuk mendapatkan semua nilai dalam object dengan lebih singkat (1 line saja)

const newObject = {
  firstName: "Muhammad",
  lastName: "Iqbal Mubarok",
  address: "Jalan Ranamanyar",
  hobby: "playing football",
};

// Jawaban Soal 3
const { firstName, lastName, address, hobby } = newObject;

console.log(firstName, lastName, address, hobby);

// Soal 4
// Kombinasikan dua array berikut menggunakan array spreading ES6

const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
// Jawaban Soal 4
const combined = [...west, ...east];
//Driver Code
console.log(combined);

// Soal 5
// sederhanakan string berikut agar menjadi lebih sederhana menggunakan template literals ES6:
const planet = "earth";
const view = "glass";
var before =
  "Lorem " +
  view +
  "dolor sit amet, " +
  "consectetur adipiscing elit," +
  planet;

// Jawaban Soal 5
let after = `Lorem ${view} dolor sit amet, consectetur adipiscing elit, ${planet}`;
console.log(after);
