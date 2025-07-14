// nn bb ss u - primitive in JS
// null number boolean bigint string symol undefined
let a = 10;
let b ="hello";
let c = true;
let d = null;
let e = undefined; 
let f = Symbol("Its a symbol");
let g = BigInt(1234); 
let h // it is automatilcally undefined

{
    let a = "Changed";
    console.log("Inside block let a:",a);
}

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h);

console.log("This are the Type of this variables using typeof operator:");

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);
console.log(typeof h);

// non-primitive data types in JS is Object
// actually it is dictonary in python but here it is called object

let item = {
    name: "Uady",
    age: 30,
    isStudent: false,
};

console.log("Object:", item); // to display the whole object
console.log("Name:", item.name); // to access the name property
console.log(item["name"]); // to access the name property using bracket notation
console.log(item["xyz"]); 