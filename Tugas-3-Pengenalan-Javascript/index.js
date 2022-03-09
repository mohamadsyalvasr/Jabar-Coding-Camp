// Soal 1
var pertama = "saya sangat senang hari ini";
var kedua = "belajar javascript itu keren";

// Jawaban Soal 1
var hasil = pertama.substring(0, 4) + ' ' + pertama.substring(18, 12) + ' ' + kedua.substring(0, 7) + ' ' + kedua.substring(18, 8).toUpperCase();
console.log(hasil);


// Soal 2
var kataPertama = "10";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "6";

// Jawaban Soal 2
var hasil = Number(kataPertama) + (Number(kataKedua) * Number(kataKetiga)) + Number(kataKeempat);
console.log(hasil); 

// Soal 3
var kalimat = 'wah javascript itu keren sekali'; 

//Jawaban Soal 3
var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(14, 4) ; // do your own! 
var kataKetiga = kalimat.substring(18, 15); // do your own! 
var kataKeempat = kalimat.substring(24, 19); // do your own! 
var kataKelima = kalimat.substring(31, 25); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);
