// Task 6

console.log("\n Task 6:")
let even = "Even numbers from 1 to 20: ";
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        even += i + " ";
    }
}
console.log(even);

// Task 7 

console.log("\n Task 7:")
// Declaring a string variable for the person's name
let fname = "Alice";

// Declaring a number variable for the person's age
let age = 25;

// Declaring a boolean variable to indicate is a student
let isStudent = true;

// Logging the each output of the variable to the console
console.log("Name:", fname);
console.log("Age:", age);
console.log("Is Student:", isStudent);

// Task 8

let myString = "Hello";
let myNumber = 42;
let myBoolean = true;
let myUndefined;
let myNull = null;

console.log("\n Task 8:")
console.log(typeof myString);    
console.log(typeof myNumber);    
console.log(typeof myBoolean);   
console.log(typeof myUndefined); 
console.log(typeof myNull);

// Task 9

console.log("\n Task 9:")
let num = 16;

let result = `Number ${num} is `;
if (num % 2 == 0) {
    result += "even";
} else {
    result += "odd";
}

console.log(result);
// console.log("Number:",num + "is", (num % 2 == 0) ? "even" : "odd");
// Task 10.1

console.log("\n Task 10.1:")

let day_Number = 3;
let dayName;
switch (day_Number) {
    case 1:
        day_Name = "Monday";
        break;
    case 2:
        day_Name = "Tuesday";
        break;
    case 3:
        day_Name = "Wednesday";
        break;
    case 4:
        day_Name = "Thursday";
        break;
    case 5:
        day_Name = "Friday";
        break;
    case 6:
        day_Name = "Saturday";
        break;
    case 7:
        day_Name = "Sunday";
        break;
    default:
        day_Name = "Invalid day";
}

// console.log("Day Name:", day_Name);
let output = `Day number ${day_Number} is ${day_Name}`;
console.log(output);


// Task 10.2

console.log("\n Task 10.2:")
// Initialize an empty string to store the output
let loop = "Numbers from 1 to 5: ";

for (let i = 1; i <= 5; i++) {
    loop += i + " ";
}
console.log(loop);