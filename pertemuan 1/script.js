// cara membuat objek pada javascript

// 1. objek literal
// let mahasiswa1 = {
//   nama: 'khairul',
//   energi: 10,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`hello ${this.nama}, selamat makan`);
//   },
// };

// let mahasiswa2 = {
//   nama: 'habibie',
//   energi: 20,
//   makan: function (porsi) {
//     this.energi = this.energi + porsi;
//     console.log(`hello ${this.nama}, selamat makan`);
//   },
// };

// 2. function declaration
// function Mahasiswa(nama, energi) {
//   let mahasiswa = {};
//   mahasiswa.nama = nama;
//   mahasiswa.energi = energi;

//   mahasiswa.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`hello ${this.nama}, selamat makan!`);
//   };

//   mahasiswa.main = function (jam) {
//     this.energi -= jam;
//     console.log(`hello ${this.nama}, selamat bermain`);
//   };

//   return mahasiswa;
// }

// let khairul = Mahasiswa('khairul', 10);
// let habibie = Mahasiswa('habibie', 20);

// 3. konstaction Declaration
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`hello ${this.nama}, selamat makan!`);
  };

  this.main = function (jam) {
    this.energi -= jam;
    console.log(`hello ${this.nama}, selamat bermain`);
  };
}

let soekarno = new Mahasiswa('soekarno', 10);
let soeharto = new Mahasiswa('soeharto', 20);
