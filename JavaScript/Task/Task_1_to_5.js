//  Task 1

let a = "Hello";
let b = "Buddy";
let c = "Welcome to the World";

console.log(a,b);
console.log(c);

// Task 2

// Number
let num = 42;
console.log("Number:", num);

// String
let str = "Hello, World!";
console.log("String:", str);

// Boolean
let bool = true;
console.log("Boolean:", bool);

// Undefined
let undef;
console.log("Undefined:", undef);

// Null
let myNull = null;
console.log("Null:", myNull);

// Object
let obj = { name: "Dev", age: 25 };
console.log("Object:", obj);

// Symbol
let sym = Symbol("id_card");
console.log("Symbol:", sym);

// BigInt
let bigInt = 123456;
console.log("BigInt:", bigInt);

// Task 3

let num1 = 10;
let num2 = 5;
let str1 = "Hello";
let bol = true;

// Arithmetic Operators
console.log("Arithmetic Operators:");
console.log("Addition (+):", num1 + num2); 
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);
console.log("Modulus (%):", num1 % num2);

// Comparison Operators
console.log("\nComparison Operators:");
console.log("Equal (==):", num1 == num2); 
console.log("Strict Equal (===):", num1 === "10");
console.log("Not Equal (!=):", num1 != num2);
console.log("Greater Than (>):", num1 > num2);
console.log("Less Than or Equal (<=):", num2 <= num1);

// Logical Operators
console.log("\nLogical Operators:");
console.log("AND (&&):", bol && num1 > num2);
console.log("OR (||):", bol || num1 < num2);
console.log("NOT (!):", !bol);

// Assignment Operators
console.log("\nAssignment Operators:");
let result = num1;
console.log("Assign (=):", result);
result += num2;
console.log("Add and assign (+=):", result);
result *= 2;
console.log("Multiply and assign (*=):", result);

// Task 4

console.log("\n");
let numb = 10; 

let results = `Number ${num} is `;
if (num > 0) {
    results += "positive";
} else if (num < 0) {
    results += "negative";
} else {
    results += "zero";
}
console.log(results);

// Task 5 

let month_Number = 7; 
let month_Name;

switch (month_Number) {
    case 1:
        month_Name = "January";
        break;
    case 2:
        month_Name = "February";
        break;
    case 3:
        month_Name = "March";
        break;
    case 4:
        month_Name = "April";
        break;
    case 5:
        month_Name = "May";
        break;
    case 6:
        month_Name = "June";
        break;
    case 7:
        month_Name = "July";
        break;
    case 8:
        month_Name = "August";
        break;
    case 9:
        month_Name = "September";
        break;
    case 10:
        month_Name = "October";
        break;
    case 11:
        month_Name = "November";
        break;
    case 12:
        month_Name = "December";
        break;
    default:
        month_Name = "Invalid month";
}

let output = `Month number ${month_Number} is ${month_Name}`;
console.log("\n"+output);