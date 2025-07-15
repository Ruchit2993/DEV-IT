console.log("Task 1 : create an array buffer of 8 bytes and set the first 4 byte as 32 bit integer value of 100 then read and print it");

let buffer = new ArrayBuffer(8);
let view = new DataView(buffer);

view.setInt32(0, 100);

let value = view.getInt32(0);
console.log(`The 32-bit integer value is: ${value}`);

//  Task 2: Create 5 diffrent types of events ( except on click ) each with example
//  in the Task.html

console.log("Task 3: convert the following object into a json string and log it in the console : {name: \"Alice\", age: 25, isAdmin: false}");

const obj = { name: "Alice", age: 25, isAdmin: false };
const jsonString = JSON.stringify(obj);
console.log(jsonString);

console.log("Task 4: Parse this Json string back into js obj '{\"Product\": \"Book\", \"Price\": 99, \"InStock\": true}'");

const jsonString2 = '{"Product": "Book", "Price": 99, "InStock": true}';
const jsObject = JSON.parse(jsonString2);
console.log(jsObject);

console.log("Task 5: Use Number is integer() to check wether a given value is integer");

console.log(Number.isInteger(42));      // 42 is an integer
console.log(Number.isInteger(3.14));    // 3.14 is not an integer
console.log(Number.isInteger(-10));     // -10 is an integer
console.log(Number.isInteger("123"));   // 123 is not an integer
console.log(Number.isInteger(0));       // 0 is an integer

console.log("Task 6: Write a regular Expression to check if a string contains only letters(no numbers or special characters)");

const isOnlyLetters = str => /^[A-Za-z]+$/.test(str);

console.log(isOnlyLetters("Hello"));  // true
console.log(isOnlyLetters("Hello123")); // false
console.log(isOnlyLetters("Hello!"));  // false
console.log(isOnlyLetters(""));        // false

console.log("Task 7:create a regex to check if a string is a valid email address and no space are allowed");

// function isValidEmail(input){
//     let regex1 =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return regex1.test(input);
// }

function isValidEmail(input){
    let regex1 = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex1.test(input);
}

console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("test@.com"));        // false
console.log(isValidEmail("test@com"));         // false
console.log(isValidEmail("test@com."));        // false
console.log(isValidEmail("test@gmail.com"));   // true
