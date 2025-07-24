// // Q1 From a string any word having more than 4 characters reverse them and print the whole string.
 
// function reverseStr(str) {
//   let result = str
//     .split(" ")
//     .map((char) => (char.length >= 4 ? char.split("").reverse().join("") : char))
//     .join(" ");
//   return result;
// }
// console.log(reverseStr("Hello my name is Ruchit Pitaliya"));

// // Q2 arr = ["1","2",["3","4",["5","6",["7","8"["9","10","11"]]]]] so the how can be the output will be the 1 to 11
 
// // const arr = ["1", "2", ["3", "4", ["5", "6", ["7", "8", ["9", "10", "11"]]]]];
// // const flatArr = arr.flat(Infinity);
// // console.log(flatArr);

// const arr = ["1", "2", ["3", "4", ["5", "6", ["7", "8", ["9", "10", "11"]]]]];

// function flattenArray(input) {
//   const stack = input.slice(); 
//   const result = [];

//   while (stack.length) {
//     const item = stack.pop();

//     if (Array.isArray(item)) {
//       for (let i = item.length - 1; i >= 0; i--) {
//         stack.push(item[i]);
//       }
//     } else {
//       result.push(item);
//     }
//   }

//   result.reverse(); 
//   return result;
// }
// console.log(flattenArray(arr));

// // Q3 power of 2 

// function isPowerOfTwo(num) {
//   if (num < 1) return false;

//   while (num > 1) {
//     if (num % 2 !== 0) return false;
//     num = num / 2;
//   }

//   return true;
// }

// console.log(isPowerOfTwo(30));

// // Q4 if ((x==1)&(x==2)&(x==3)){console.log("true");} now which is the value of x that is the condition to make true, Hint: using object

// let x = {
//   i: 1,
//   valueOf: function () {
//     return this.i++;
//   }
// };

// if ((x == 1) & (x == 2) & (x == 3)) {
//   console.log("true");
// }

