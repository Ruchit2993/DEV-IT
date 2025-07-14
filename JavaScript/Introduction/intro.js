console.log("var let const ")

// var a = 10;
// var b ="hello";
// var b = "world"; // redeclared allowed
// var c = true;
// var d = null;
// var e = undefined; 

// {
//     var a = "Changed";
//     console.log("Inside block var a:", a);
// }

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

let a = 10;
let b ="hello";
let _b;
_b = "world"; // redeclared allowed
// let b = "world"; // redeclared not allowed
let c = true;
let d = null;
let e = undefined; 

{
    let a = "Changed";
    console.log("Inside block let a:",a);
}

console.log(a)
console.log(b)
console.log(_b)
console.log(c)
console.log(d)
console.log(e)

const f = 20;
// const f = 30; // redeclared not allowed
// const g; // is not allowed, must be initialized
console.log("const f:", f);

{
    const f = 30;
    console.log("Inside block const f:", f);
}