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

// const name1 = 'Javascript';
// // const name1 = 'Ruchit Pitaliya';
// let count = 0;
// const vowels = 'aeiouAEIOU';
// for (let i = 0; i < name1.length; i++) {
//   if (vowels.includes(name1[i])) {
//     count++;
//   }
// }
// console.log("Vowel Count:", count);

// 4)Swapping two variable Without Using Third Variable.

// let p = 29;
// let l = 30;
// console.log(`Before Swap: p = ${p} andd l = ${l}`);
// p = p + l;
// l = p - l;
// p = p - l;

// // using Destructuring
// [p , l] = [l , p] 
// console.log(`After Swap: p = ${p} andd l = ${l}`);

// 5)Debounce function.
// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer); // Clear previous timer
//     timer = setTimeout(() => {
//       fn.apply(this, args); // Call the function after delay
//     }, delay);
//   };
// }

// function sayHello() {
//   console.log('Hello! Debounced...');
// }

// const debouncedHello = debounce(sayHello, 1000);

// debouncedHello();
// debouncedHello();
// debouncedHello();
// debouncedHello();

// 6)Write a Program Check if an object is Empty.

// way 1
// function isObjectEmpty(obj) {
//   return Object.keys(obj).length === 0;
// }
// const m = {};
// const n = { name: "John" };
// console.log("This the Obj m : ",m," isObjectEmpty : ",isObjectEmpty(m)); 
// console.log("This the Obj n : ",n," isObjectEmpty : ",isObjectEmpty(n)); 

// way 2
// function isObjectEmpty(obj) {
//   return JSON.stringify(obj) === '{}';
// }

// console.log(isObjectEmpty({}));          
// console.log(isObjectEmpty({ name: 'Dev', Age: 22 }));

// way 3
// function isObjectEmpty(obj) {
//   return Object.getOwnPropertyNames(obj).length === 0;
// }
// console.log(isObjectEmpty({}));         // true
// console.log(isObjectEmpty({ x: 1 }));   // false

// 7)Convert an Object to a quareyString.
// way 1
// mkae a big object
const obj = {
  name: "Dev",  
  age: 25, 
  city: "Ahemedabad Thaltej",
  hobbies: ["reading", "coding"], 
  isEmployed: true
}
// const params = new URLSearchParams(obj);
// const QueryString = params.toString();
// console.log(QueryString)

// way 2
// function objectToQueryString(obj) {
//   return Object.entries(obj)
//     .map(([key, value]) => {
//       if (Array.isArray(value)) {
//         return `${key}=${value.join(",")}`;
//       } else if (typeof value === "object" && value !== null) {
//         return `${key}=${JSON.stringify(value)}`;
//       }
//       return `${key}=${encodeURIComponent(value)}`;
//     })
//     .join("&");
// } 
// console.log(objectToQueryString(obj)); // name=John&age=30&city=New%20York&hobbies=reading,traveling&isEmployed=true

// 8)Find the Fectorial.

// way 1
// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result *= i;
//   }
//   return result;
// }
// console.log(factorial(20)); //2432902008176640000

// way 2 
// function factorial(n) {
//   if (n === 0 || n === 1) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(20)); //2432902008176640000

// 9)Check if two arrays are Equal.

// way 1
// function arraysAreEqual(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;

//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) return false;
//   }

//   return true;
// }
// const a = [1, 2, 3];
// const b = [1, 2, 3];
// const c = [3, 2, 1];
// const d = [3, 2, 1, 4];
// const e = ["Apple", "Ball", "Cat", "Dog"];
// const e1 = ["Apple", "Ball", "Cat", "Dog"];
// const e2 = ["Ball", "Apple", "Dog", "Cat"];
// const f = ["Apple", "Ball", "Cats", "Dogs"];
// const g = ["Apple"];
// console.log(arraysAreEqual(a, b)); 
// console.log(arraysAreEqual(a, c)); 
// console.log(arraysAreEqual(a, d)); 
// console.log(arraysAreEqual(e, e1)); 
// console.log(arraysAreEqual(e, e2)); 
// console.log(arraysAreEqual(e, f)); 
// console.log(arraysAreEqual(f, g)); 

// way 2
// function arraysAreEqualUnordered(arr1, arr2) {
//   return arr1.length === arr2.length &&
//     arr1.slice().sort().every((val, i) => val === arr2.slice().sort()[i]);
// }
// console.log(arraysAreEqualUnordered(a, c)); // true
// console.log(arraysAreEqualUnordered(e, e2)); // true

// 10)Get All Unique values from Nested Array ex.[[1,2],[2,3],[3,4],[4,3],[5,5]].

// way 1
// const arr4 = [[1, 2], [2, 3], [3, 4], [4, 3], [5, 5]];
// const result = [];
// for (let subArr of arr4) {
//   for (let valOfArr of subArr) {
//     if (!result.includes(valOfArr)) {
//       result.push(valOfArr);
//     }
//   }
// }
// console.log(result);

// way 2
// const arr5 = [[1, 2], [2, 3], [3, 4], [4, 3], [5, 5]];
// const unique = arr5.flat().filter((val, index, self) => self.indexOf(val) === index);
// console.log(unique);

// 11) Convert String to CamalCase.(Your Full Name).

// way 1
// function toCamelCase(str) {
//   return str
//     .toLowerCase()
//     .split(" ")
//     .map((word, index) =>
//       index === 0
//         ? word
//         : word.charAt(0).toUpperCase() + word.slice(1)
//     )
//     .join("");
// }
// const fullName = "ruchit dipak bhai pitaliya";
// const camelCaseName = toCamelCase(fullName);
// console.log(camelCaseName);

// way 2
// function toCamelCase(str) {
//   let words = str.toLowerCase().split(" ");
//   let result = words[0];

//   for (let i = 1; i < words.length; i++) {
//     result += words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   return result;
// }
// console.log(toCamelCase("ruchit dipak bhai pitaliya")); 


// 12)Make a TextArea And write a Paraghraph in it and also make a button and when user Click btn the whole Paragraph Will Cpoied.

// in html file

// 13)Check If String Has All Unique Char if not then remove dulicate char

// way 1
// function removeDuplicates(str) {
//   let result = "";
//   let seen = new Set();
//   for (let char of str) {
//     if (!seen.has(char)) {
//       result += char;
//       seen.add(char);
//     }
//   }
//   const isUnique = str.length === result.length;
//   return {
//     isUnique,
//     uniqueString: result
//   };
// }
// let input = "programming";
// let { isUnique, uniqueString } = removeDuplicates(input);
// console.log("Is unique?", isUnique);        
// console.log("Without duplicates:", uniqueString); 

// way 2
// function removeDuplicates(str) {
//   let uniqueStr = str
//     .split('')
//     .filter((char, index, arr) => arr.indexOf(char) === index)
//     .join('');

//   return {
//     isUnique: str.length === uniqueStr.length,
//     uniqueString: uniqueStr
//   };
// }

// console.log(removeDuplicates("The quick brown fox jumps over the lazy dog")); 

// way 3
// function removeDuplicates(str) {
//   let result = "";
//   let seen = [];
//   str.split("").forEach(char => {
//     if (!seen.includes(char)) {
//       seen.push(char);
//       result += char;
//     }
//   });
//   return {
//     isUnique: str.length === result.length,
//     uniqueString: result
//   };
// }
// console.log(removeDuplicates("hello"));

// 14)Find The First Non Reapeting Char In String.

// way 1
// function firstNonRepeatingChar(str) {
//   const charCount = new Map();
//   for (let char of str) {
//     charCount.set(char, (charCount.get(char) || 0) + 1);
//   }
//   for (let char of str) {
//     if (charCount.get(char) === 1) {
//       return char;
//     }
//   }
//   return null;
// }
// console.log("first Non Repeating Char of string: aabbccdeef is :  ",firstNonRepeatingChar("aabbccdeef"));

// way 2
// function firstNonRepeatingChar(str) {
//   for (let char of str) {
//     if (str.split(char).length - 1 === 1) {
//       return char;
//     }
//   }
//   return null;
// } 
// console.log("first Non Repeating Char of string: aabbccdeef is :  ",firstNonRepeatingChar("aabbccdeef"));

// 15)Find The Intersection of Two Arrays ex. [[1,2,3],[2,3,4]] / O.P [2,3].

// way 1
// function getIntersection(arr1, arr2) {
//   return arr1.filter(item => arr2.includes(item));
// }
// console.log(getIntersection([1, 2, 3], [2, 3, 4]));

// way 2
// function getIntersection(arr1, arr2) {
//   let result = [];
//   for (let item of arr1) {
//     if (arr2.includes(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(getIntersection([1, 2, 3], [2, 3, 4]));

// 16)Find a Group of Elements by Frequancy (Write Your Own FullName).

// way 1
// function groupByFrequency(str) {
//   let charCount = {};
//   let freqGroup = {};
//   str = str.replace(/\s/g, '').toLowerCase();

//   // Step 1: Count frequency of each character
//   for (let char of str) {
//     charCount[char] = (charCount[char] || 0) + 1;
//   }
//     console.log(charCount);
//     console.log(freqGroup);

//   // Step 2: Group characters by their count
//   for (let char in charCount) {
//     let count = charCount[char];
//     console.log(freqGroup)
//     if (!freqGroup[count]) {
//       freqGroup[count] = [];
//     }
//     freqGroup[count].push(char);
//   }

//   return freqGroup;
// }
// const name = "ruchit pitaliya";
// const result = groupByFrequency(name);
// for (let freq in result) {
//   console.log(`${freq} = [${result[freq].join(', ')}]`);
// }

// way 2
// function groupByFrequency(str) {
//   const charMap = new Map();
//   const freqGroup = new Map();

//   // Remove spaces and lowercase
//   str = str.replace(/\s/g, '').toLowerCase();

//   // Step 1: Count frequency of each character
//   for (let char of str) {
//     charMap.set(char, (charMap.get(char) || 0) + 1);
//   }

//   // Step 2: Reverse map — group by frequency
//   charMap.forEach((count, char) => {
//     if (!freqGroup.has(count)) {
//       freqGroup.set(count, []);
//     }
//     freqGroup.get(count).push(char);
//   });

//   return freqGroup;
// }

// // Example usage
// const name = "ruchit pitaliya";
// const result = groupByFrequency(name);

// // Print
// for (let [count, chars] of result.entries()) {
//   console.log(`${count} = [${chars.join(', ')}]`);
// }

// way 3
// function charFreqPairs(str) {
//   const map = new Map();
//   str = str.replace(/\s/g, '').toLowerCase();
//   for (let char of str) {
//     map.set(char, (map.get(char) || 0) + 1);
//   }
//   return Array.from(map.entries());
// }
// console.log(charFreqPairs("ruchit pitaliya"));

// 17)Find all pair in an Array that sum to a Target Numbers ex. [-1,2,3,3,4,7] / O.P  [[2,4],[3,3],[7,-1]] ...

// way 1 
// function findPairs(arr, target) {
//   let result = [];
//   let used = new Set(); 
//   for (let i = 0; i < arr.length; i++) {
//     if (used.has(i)) continue;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (used.has(j)) continue;
//       if (arr[i] + arr[j] === target) {
//         result.push([arr[i], arr[j]]);
//         used.add(i);
//         used.add(j);
//         break;
//       }
//     }
//   }
// //   console.log(used);
//   arr.forEach((val, i) => {
//     if (!used.has(i)) {
//       result.push(val);
//     }
//   });
//   return result;
// }
// let arr = [-1, 1, 2, 3, 3, 4, 7];
// let target = 6;
// console.log(findPairs(arr, target));
    
// way 2
// function findPairs(arr, target) {
//   const result = [];
//   const used = new Set();
  
//   for (let i = 0; i < arr.length; i++) {
//     if (used.has(i)) continue;
//     let found = false;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (!used.has(j) && arr[i] + arr[j] === target) {
//         result.push([arr[i], arr[j]]);
//         used.add(i).add(j);
//         found = true;
//         break;
//       }
//     }
//     if (!found) result.push(arr[i]);
//   }
  
//   return result;
// }

// console.log(findPairs([-1, 1, 2, 3, 3, 4, 7], 6));


const arr = [-1, 2, 3, 3, 4, 7];
const target = 6;
const resultPair = [];
const used = new Set();

for (let i = 0; i < arr.length; i++) {
  const a = arr[i];
  const b = target - a;
  if (arr.includes(b) && !used.has(a) && !used.has(b)) {
    resultPair.push([a, b]);
    used.add(a);
    used.add(b);
  }
}

console.log(resultPair);

// js visulizer que
// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 0);
// setTimeout(() => {
//   console.log("C");
// }, 3500);
// console.log("D");
// Promise.resolve().then(() => {
//   console.log("E");
// });

