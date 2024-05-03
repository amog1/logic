// //  Ramdom decimal 0 too  100 (exclusive)
// let rand1 = Math.random() * 100;
// console.log(rand1);

// // Random integer 0 too 10 (exclusive )
// let rand2 = Math.random() * 10; // 0.00 to 9.99
// rand2 = Math.floor(rand2);
// console.log(rand2);

// // Random int -5 to 5
// let rand3 = Math.random() * 10 + -5;
// rand3 = Math.floor(rand3);
// console.log(rand3);

// Logical operators : &&  (and), || (or), !(not)

// && - Each side must be true
// true && true >> true
// true && false >> false
// false && true >> false
// false && false >> false

// || - Only 1 or both must be true
// true || true >> trie
// true || false >> true
// false || true >> true
// false || false >> false

// let x = 5,
//   y = 10,
//   z = 100;

// let bool1 = x >= 5 || z < 50;
// console.log(bool1);

// let bool2 = x + 5 > y && z == 100;
// console.log(bool1);

// let bool3 = y < 80 || z == 10;
// console.log(bool3); // true

// let bool4 = y < 80 && z == 10;
// console.log(bool4); //false

// Logical Not(!)
// Not reverses the boolean from true to false or false  to true

// let bool4 = !(y < x);
// console.log(bool4); //false

// Dlivery application
// Reject any package with a dimenstion larger than 10 inches

// let length = +prompt("lenght?");
// let width = +prompt("width?");
// let height = +prompt("height?");

// if (length > 10 || width > 10 || height > 10) {
//   console.log("Reject");
// } else {
//   console.log("Accept");
// }

// if (length > 10 && (width > 10) & (height > 10)) {
//   console.log("Reject");
// } else {
//   console.log("Accept");
// }

// if (length <= 10 && (width <= 10) & (height <= 10)) {
//   console.log("Accept");
// } else {
//   console.log("Reject");
// }

// Ex. Grade app

var finalgrade = +prompt("Enter garde");

// A grade is valid if is greater than zero and/or less than 100

if (finalgrade >= 0 <= 100 && finalgrade) {
  console.log(`grade of ${finalgrade} % submited`);
} else {
  console.log(`grade of ${finalgrade} % is not acceptable`);
}
