// Soal 1
var nilai;

// Jawaban Soal 1
nilai = 97;

if (nilai >= 85) {
  console.log("Indeksnya A");
} else if (nilai >= 75 && nilai < 85) {
  console.log("Indeksnya B");
} else if (nilai >= 65 && nilai < 75) {
  console.log("Indeksnya C");
} else if (nilai >= 55 && nilai < 65) {
  console.log("Indeksnya D");
} else {
  console.log("Indeksnya E");
}

// Soal 2
var tanggal = 08;
var bulan = 1;
var tahun = 1997;

// Jawaban Soal 2
switch (bulan) {
  case 1:
    console.log(tanggal + " Januari " + tahun);
    break;

  case 2:
    console.log(tanggal + " Februari " + tahun);
    break;

  case 3:
    console.log(tanggal + " Maret " + tahun);
    break;

  case 4:
    console.log(tanggal + " April " + tahun);
    break;

  case 5:
    console.log(tanggal + " Mei " + tahun);
    break;

  case 6:
    console.log(tanggal + " Juni " + tahun);
    break;

  case 7:
    console.log(tanggal + " Juli " + tahun);
    break;

  case 8:
    console.log(tanggal + " Agustus " + tahun);
    break;

  case 9:
    console.log(tanggal + " September " + tahun);
    break;

  case 10:
    console.log(tanggal + " Oktober " + tahun);
    break;

  case 11:
    console.log(tanggal + " November " + tahun);
    break;

  case 12:
    console.log(tanggal + " Desember " + tahun);
    break;

  default:
    console.log("Bulan hanya 1 - 12");
    break;
}

// Soal 3
var n = 7;

// Jawaban Soal 3
var segitiga = "";
for (var i = 0; i < n; i++) {
  for (var j = 0; j <= i; j++) {
    segitiga += "#";
  }
  segitiga += "\n";
}
console.log(segitiga);

// Soal 4
var m = 30;

// Jawaban Soal 4
for (var i = 1; i <= m; i++) {
  if (i % 3 == 2) {
    console.log(i + " - I love programming");
  } else if (i % 3 == 1) {
    console.log(i + " - I love Javascript");
  } else if (i % 3 == 0) {
    console.log(i + " - I love VueJS");

    var garis = "";
    for (var j = 0; j < i / 3; j++) {
      garis += "===";
    }
    console.log(garis);
  }
}
