// print 1 to 100 random number without the in built function 

// Custom Random Generator using LCG (Linear Congruential Generator)
// way 1

// function customRandom(seed) {
//   // LCG constants (good for 32-bit)
//   let a = 1664525;
//   let c = 1013904223;
//   let m = 2 ** 32;
//   seed = (a * seed + c) % m;
//   return seed;
// }
// let seed = Date.now() % 1000000; // Initial seed based on current time
//   let randomNumber = (seed % 100) + 1; // Scale to 1–100
//   console.log(randomNumber);

// way 2
// console.log(((Date.now() * 9301 + 49297) % 233280) % 100 + 1);

// Remove Duplecate From Array ex. const arr = [1,2,2,3,3,3,4,5,7,7,7] without using Newset() method.

// way 1
// const arr = [1, 2, 2, 3, 3, 3, 4, 5, 7, 7, 7];
// const uniqueArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!uniqueArr.includes(arr[i])) {
//     uniqueArr.push(arr[i]);
//   }
// }
// console.log(uniqueArr);

// way 2
// const arr2 = [1, 2, 2, 3, 3, 3, 4, 5, 7, 7, 7];
// const uniqueArr = arr2.filter((item, index) => arr2.indexOf(item) === index);
// console.log(uniqueArr);

// way 3
// function removeDuplicatesRecursive(arr, unique = [], i = 0) {
//   if (i >= arr.length) return unique;
//   if (!unique.includes(arr[i])) unique.push(arr[i]);
//   return removeDuplicatesRecursive(arr, unique, i + 1);
// }
// const arr3 = [1, 2, 2, 3, 3, 3, 4, 5, 7, 7, 7];
// const result = removeDuplicatesRecursive(arr3);
// console.log(result);

// Count Number of Vowels in string ex. const name = 'Javascript'.

const name1 = 'Javascript';
// const name1 = 'Ruchit Pitaliya';
let count = 0;
const vowels = 'aeiouAEIOU';
for (let i = 0; i < name1.length; i++) {
  if (vowels.includes(name1[i])) {
    count++;
  }
}
console.log("Vowel Count:", count);
