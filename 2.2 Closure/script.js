// lexical scope
// function init() {
// //   let nama = 'khairul'; // local variabel
//   let umur = 24;
//   return function (nama) {
//     // inner function (*closure)
//     console.log(nama); // akses ke parent variabel
//     // console.log(umur); // akses ke parent variabel
//   }
//   // console.dir(tampilNama);
// }
// let panggilNama = init();
// panggilNama('soleh')

// -----2

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`hello ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam('Pagi');
// let selamatSiang = ucapkanSalam('siang');
// let selamatMalam = ucapkanSalam('malam');

// // selamatPagi('khairul');
// // selamatMalam('habibi');

// console.dir(selamatMalam);

// -----3
let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100; // tidak akan berpengaruh

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
