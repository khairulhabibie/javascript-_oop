// 2.1 Excetion Contect, Hoisting, Scope

// var nama = 'khairul';
// console.log(nama);

// creation phase pada Global Context
//   nama variabel = undefined
//   nama function = fn()
//   hoisting
//   window = global object
//   this = window

// exection phase

// var nama = 'khairul';
// var umur = 24;

// console.log(sayHello());

// function sayHello() {
//   return `halo nama saya ${nama}, saya ${umur} tahun`;
// }

// function membuat local executionn context
// yang didalamnya terdapat creation dan execution phase
// window
// argument
// hoisting

// next
// var nama = 'khairul habibie';
// var username = '@khairulhabibie';
// function cetakURL(username) {
//   var instagramURL = 'http://instagram.com/';
//   return instagramURL + username;
// }
// console.log(cetakURL(username));

// next
// function a() {
//   console.log('ini a');
//   function b() {
//     console.log('ini b');
//     function c() {
//       console.log('ini c');
//     }
//     c();
//   }
//   b();
// }
// a();

// next
// var nama = 'khairul habibie';
// var username = '@khairulhabibie';
// function cetakURL() {
//   console.log(arguments)
//   var instagramURL = 'http://instagram.com/';
//   return instagramURL + username;
// }
// console.log(cetakURL('@erafisika'));

// next
function satu(){
  var nama = 'khairul';
  console.log(nama);
}

function dua(){
  console.log(nama);
}

console.log(nama);
var nama = 'habibie';
satu();
dua('amri');
console.log(nama);