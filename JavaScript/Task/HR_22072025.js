// loop of 1 to 100 find even in the first iteration an in the second iteration odd

// let evenNumbers = [];
// let oddNumbers = [];

// for (let i = 1; i <= 50; i++) {
//   evenNumbers.push(i * 2);     
//   oddNumbers.push(i * 2 - 1);  
// }

// console.log("Even Numbers:", evenNumbers.join(", "));
// console.log("Odd Numbers:", oddNumbers.join(", "));

// in loop of 1 to 1000 how many times 9 in there

// let count = 0;

// for (let i = 1; i <= 1000; i++) {
//   let str = i.toString();
//   for (let char of str) {
//     if (char === '9') {
//       count++;
//     }
//   }
// }

// console.log("Total number of 9s from 1 to 1000:", count);

// let count2 = 0;

// for (let i = 1; i <= 50; i++) {
//   let num =  i;
//   while (num > 0) {
//     let digit = num % 10;
//     if (digit === 9) count2++;
//     num = Math.floor(num / 10);
//   }
// }

// console.log("Total 9s:", count2);

// in loop of 1 to 1000 how many times 10 in there and print that number

// let count3 = 0;
// let matchingNumbers = [];

// for (let i = 1; i <= 1000; i++) {
//   if (i.toString().includes("10")) {
//     count3++;
//     matchingNumbers.push(i);
//   }
// }

// console.log("Total numbers containing '10':", count3);
// console.log("Numbers:", matchingNumbers.join(", "));

// squre root 


// function squreroot(n) {
//   let i = 1;
//   let ans = -1;

//   while (i * i <= n) {
//     ans = (i * i === n) * i + (i * i !== n) * ans;
//     i++;
//   }

//   console.log(ans === -1 ? "not possible" : ans);
// }

// squreroot(16);    
// squreroot(10);   
// squreroot(100);  
// squreroot(25);  


const names = ["Upady", "Jignesh", "Mitesh", "Dipak", "Yug"];

const updatedNames = names.map(name => {
  if (name.length < 2) return name;
  return name[0] + name[1].toUpperCase() + name.slice(2);
});

console.log(updatedNames);
// Output: [ 'rAmesh', 'sIta', 'gEeta', 'rAm', 'rAju' ]


