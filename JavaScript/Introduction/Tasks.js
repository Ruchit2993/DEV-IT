// function flatInfinite(arr) {
//   return arr.reduce((acc, item) => 
//     Array.isArray(item)
//       ? [...acc, ...flatInfinite(item)]
//       : [...acc, item],             
//     []
//   );
// }

// const input = [1, [2, [3, [4, 5]]], 6];
// const output = flatInfinite(input);
// console.log(output);  

// function maxTripletSum(arr) {
//   return arr.reduce((acc, _, i) => {
//     if (i > arr.length - 3) return acc;
//     const group = arr.slice(i, i + 3);
//     const sum = group[0] + group[1] + group[2];
//     return sum > acc.sum ? { group, sum } : acc;
//   }, { group: [], sum: -Infinity });
// }

// const arr = [5, 3, 5, 2, 4, 6, 2, 5, 9];
// const result = maxTripletSum(arr);
// console.log(result);  

// function maxGroupSum(arr, k) {
//   return arr.reduce((acc, _, i) => {
//     if (i > arr.length - k) return acc;
//     const group = arr.slice(i, i + k);
//     const sum = group.reduce((a, b) => a + b, 0);
//     return sum > acc.sum ? { group, sum } : acc;
//   }, { group: [], sum: -Infinity });
// }
// const arr2 = [5, 3, 5, 2, 4, 6, 2, 5, 9];

// console.log(maxGroupSum(arr2, 3));  
// console.log(maxGroupSum(arr2, 4));  
// console.log(maxGroupSum(arr2, 2));  

class person {
    constructor(name) {
        this.name = name
    }
    function1 (params) {
        console.log(this.name)
    }
}
const person1 = new person("Dev");
const copFun = person1.function1.bind(person1);
copFun();
