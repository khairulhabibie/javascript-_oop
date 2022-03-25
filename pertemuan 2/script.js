// cara membuat objek pada javascript
// 4. objek.create()
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`hello ${this.nama}, selamat makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`hello ${this.nama}, selamat bermain`);
  },

  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`hei ${this.nama}, selamat tidur!`);
  },
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let khairul = Mahasiswa('khairul', 10);
let habibie = Mahasiswa('habibie', 20);
