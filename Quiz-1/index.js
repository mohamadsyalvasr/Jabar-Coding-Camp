// Soal 1

function next_date(tanggal, bulan, tahun) {
  cekTahunKabisat(tahun);

  var namaBulan;

  if (cekTahunKabisat(tahun) == true) {
    if (tanggal == 29 && bulan == 2) {
      (tanggal = 1), (bulan += 1);
    } else if (tanggal == 31 && bulan == 12) {
      (tanggal = 1), (bulan = 1), (tahun += 1);
    } else if (tanggal == 31) {
      (tanggal = 1), (bulan += 1), tahun;
    } else (tanggal += 1), bulan, tahun;
  } else {
    if (tanggal == 28 && bulan == 2) {
      (tanggal = 1), (bulan += 1);
    } else if (tanggal == 31 && bulan == 12) {
      (tanggal = 1), (bulan = 1), (tahun += 1);
    } else if (tanggal == 31) {
      (tanggal = 1), (bulan += 1), tahun;
    } else (tanggal += 1), bulan, tahun;
  }

  switch (bulan) {
    case 1:
      namaBulan = "Januari";
      break;
    case 2:
      namaBulan = "Februari";
      break;
    case 3:
      namaBulan = "Maret";
      break;
    case 4:
      namaBulan = "April";
      break;
    case 5:
      namaBulan = "Mei";
      break;
    case 6:
      namaBulan = "Juni";
      break;
    case 7:
      namaBulan = "Juli";
      break;
    case 8:
      namaBulan = "Agustus";
      break;
    case 9:
      namaBulan = "September";
      break;
    case 10:
      namaBulan = "Oktober";
      break;
    case 11:
      namaBulan = "November";
      break;
    case 12:
      namaBulan = "Desember";
      break;
    default:
      namaBulan = "Input bulan salah";
      break;
  }

  return tanggal + " " + namaBulan + " " + tahun;
}

function cekTahunKabisat(tahun) {
  if ((0 == tahun % 4 && 0 != tahun % 100) || 0 == tahun % 400) {
    return true;
  } else {
    return false;
  }
}

// contoh 1

var tanggal = 29;
var bulan = 2;
var tahun = 2020;

console.log(next_date(tanggal, bulan, tahun)); // output : 1 Maret 2020

// contoh 2

var tanggal = 28;
var bulan = 2;
var tahun = 2021;

console.log(next_date(tanggal, bulan, tahun)); // output : 1 Maret 2021

// contoh 3

var tanggal = 31;
var bulan = 12;
var tahun = 2020;

console.log(next_date(tanggal, bulan, tahun)); // output : 1 Januari 2021
