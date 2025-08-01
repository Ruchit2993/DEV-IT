
// Wrap setTimeout in Promises to capture results
// const p1 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Hello World 1');
//     }, 3000);
// });
// const p2 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Hello World 2');
//     }, 1000);
// });
// const p3 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('Hello World 3');
//     }, 2000);
// });
// async function getResultsInSequence() {
//     const r1 = await p1;
//     console.log(r1); // 'Hello World 1'
//     const r2 = await p2;
//     console.log(r2); // 'Hello World 2'
//     const r3 = await p3;
//     console.log(r3); // 'Hello World 3'
// }
// getResultsInSequence();

// way 2
// setTimeout(function () {
//   console.log("Hello World 1");
//   setTimeout(function () {
//     console.log("Hello World 2");
//     setTimeout(function () {
//       console.log("Hello World 3");
//     }, 2000);
//   }, 1000);
// }, 3000);


// 2)
// abc = [1,2,3,4]; 
// xyz = abc; 
// xyz[3] = 6; 
// console.log(xyz) 
// console.log(abc)

// 3)
// o/p: [[1,2,3],[4,5,6],[7,8,9],[10]]
// const array = [1,2,3,4,5,6,7,8,9,10]
// const newArray = [array.slice(0,3), array.slice(3,6), array.slice(6,9), array.slice(9)];
// console.log(newArray);


// const result = [];
// for (let i = 0; i < array.length; i += 3) {
//   result.push(array.slice(i, i + 3));
// }
// console.log(result);

//4) 
// o/p: [1,2,3,4,5,6,7]
// const array2 = [1,2,[3,4,[5],6],7] 
// console.log(array2.flat(Infinity));

// QUestion 5
// const obj = {
//   a: "foo",
//   b: function () {
//     console.log(this.a);
//   },
// };
// // const c = obj.b;
// // obj.b();
// // c();
// const c = obj.b.bind(obj);
// c();

// Question 6

const input = "Hello How are you";
const reversed = input
  .split(" ").map((word) => word.split("").reverse().join("")).join(" ");
console.log(reversed);

console.log("Hello How are you".replace(/\S+/g, w => w.split('').reverse().join('')));


// const p1 = setTimeout(function () {
//   return "Hello World 1";
// }, 3000);
// const p2 = setTimeout(function () {
//   return "Hello World 2";
// }, 1000);
// const p3 = setTimeout(function () {
//   return "Hello World 3";
// }, 2000);

