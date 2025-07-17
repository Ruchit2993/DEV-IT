// const id = Symbol("userId")
 
// const user = {
//   [id]: 23,
//   name: "Uday",
//   age: 21,
// };
// // -------------------------------------- First way to freeze an object ----------------------------------------------
 
// Object.freeze(user);
 
// user[id] = 24;
// console.log(user);
 
// // -------------------------------------- Second way to freeze an object ----------------------------------------------
 
// Object.defineProperties(user, {
//   [id]: {
//     value: 23,
//     writable: false, // <- this is the key difference if  you write true then you can change the value of the symbol property but if you write false then you can't change the value of the symbol property
//   },
//   name: {
//     value: "Uday",
//     writable: true,
//   },
//   age: {
//     value: 21,
//     writable: true,
//   },
// });
 
// user[id] = 24;
// console.log(user);
 
// // ------------------------------------------------ Exsiting Object ------------------------------------------------
 
// // const user = {
// //   [Symbol("userId")]: 23,
// //   name: "Uday",
// //   age: 21,
// // };
// // console.log(user[id]);
// // console.log(user);
// // user[Symbol("userId")] = 24;
// // console.log(user[id]);
// console.log(user);
 
// console.log("388", user[Symbol("userId")]);
// // console.log(Object.keys(user));
 
// /**
//  * The Symbol itself is immutable, but the value stored at that Symbol key is mutable (just like any normal property).
//  *
//  * @Question Why is working?
//  * @answer defult symbol is not enumerable so it is not included in the Object.keys(user)
//  * defult symbol is not configurable so it is not included in the Object.defineProperty(user, "userId", {
//  *   value: 24,
//  *   writable: true,
//  *   enumerable: true,
//  *   configurable: true
//  * })
 
 
//  * Because in JavaScript, Symbol keys behave like private or hidden keys, but their values are still mutable unless you freeze the object.
 
// If you want immutable behavior then you can use
// @way1 Object.freeze(user)
// or
// @way2 Object.defineProperties(user, {
//   [id]: {
//     value: 23,
//     writable: false,
//   },
// });
//  */

const k1 = Symbol("id");
const k2 = Symbol("for symbol");

console.log(k1 === k2); 
console.log(k1);
const obj={
    "name": "Uday",
    "for symbol": 1,
    [k1] : 1,
}

console.log(obj); 