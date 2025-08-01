console.log("Task 1:");
// Write a function that accepts an array of values (numbers, strings, etc.).
// Returns an object with all unique values (using Set) and a frequency count of each value (using Map)

function analyzeArray(arr) {
    const uniqueValues = new Set(arr);
    const frequencyMap = new Map();
    for (const value of arr) {
        if (frequencyMap.has(value)) {
            frequencyMap.set(value, frequencyMap.get(value) + 1); 
        } else {
            frequencyMap.set(value, 1);
        }
    }
    return {
        uniqueValues: Array.from(uniqueValues), 
        frequencyMap: Object.fromEntries(frequencyMap)
    };
}
const result = analyzeArray(["Lion", "Cat", "Lion", 1, 2, 1, true, true, "Cat"]);
console.log(result);

console.log("Task 2:");
// Create a function that parses a given date string.
// Calculates and returns days left from today with user friendly message.

function getDaysLeftMessage(dateStr) {
    const inputDate = new Date(dateStr);
    const today = new Date();

    inputDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    const msInDay = 1000 * 60 * 60 * 24;
    const diffInMs = inputDate - today;
    const diffInDays = Math.round(diffInMs / msInDay);

    // User-friendly messages
    if (diffInDays > 0) {
        return `${diffInDays} day${diffInDays > 1 ? 's' : ''} left`;
    } else if (diffInDays === 0) {
        return "Today is the day!";
    } else {
        return "Date has already passed";
    }
}

console.log("48:",getDaysLeftMessage("2025-08-01")); 
console.log("49:",getDaysLeftMessage(new Date().toISOString().split('T')[0])); 
console.log("50:",getDaysLeftMessage("2025-07-28")); 

console.log("Task 3:");
// Build a mini calculator that uses callbacks.

// Step 1: Define basic operations as functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) return "Cannot divide by zero";
  return a / b;
}

function calculator(a, b, operationCallback) {
  if (typeof operationCallback !== 'function') {
    return "Invalid operation";
  }
  return operationCallback(a, b);
}

console.log("10 + 5 = ",calculator(10, 5, add));       // 15
console.log("10 - 5 = ",calculator(10, 5, subtract));  // 5
console.log("10 * 5 = ",calculator(10, 5, multiply));  // 50
console.log("10 / 5 = ",calculator(10, 5, divide));    // 2
console.log("10 / 0 = ",calculator(10, 0, divide));    // "Cannot divide by zero"

console.log("Taks 4:");
// Use WeakMap & WeakSet:
// Storing login metadata (timestamp, Role, etc.)
// Tracking which users have been processed (e.g., logged in)

const loginMetadata = new WeakMap();
const processedUsers = new WeakSet();

const user1 = { name: "Ruchit" };
const user2 = { name: "Uday" };

function loginUser(user, role) {
  const timestamp = new Date();
  loginMetadata.set(user, {
    role: role,
    loginTime: timestamp,
  });
  processedUsers.add(user);
  console.log(
    `${user.name} logged in as ${role} at ${timestamp.toLocaleString()}`
  );
}

function isUserProcessed(user) {
  return processedUsers.has(user);
}

loginUser(user1, "Admin");
loginUser(user2, "User");

console.log("Has Ruchit been processed?", isUserProcessed(user1)); 
console.log("Metadata for Uday:", loginMetadata.get(user2)); 
const user3 = { name: "Diapk" };
loginUser(user3);

console.log("Has Dipak been processed?", isUserProcessed(user3)); 



$(document).ready(function () {
            $("form").submit((e) =>{
                e.preventDefault(); 
            // jQuery $(‘input’) vs $(‘:input’) Selectors
            // $('input').css('background-color','blue')
            // $(':input').css('background-color','blue')
            
            // jQuery Checked Selector
            // $("input:checked").each((index,element) => {
            //     console.log(index,":",$(element).val());
                // $(this).closest("label").css('background-color','red')
            // })
            
            // Select Values of Checkbox Group with jQuery
            $("input[name='car']:checked").each((index,element) => {
                console.log(index,":",$(element).val());
                // $(this).closest("label").css('background-color','red')

            })

        }); 
        });
        
        
        // How to get Selected Checkbox Text in jQuery
        
        // jQuery Selected Selector
        // jQuery Disabled and Enabled Selector
        // jQuery – Functions, Events and JSON
        // jQuery Each Method
        // jQuery Method Chaining
        // Working with JSON Object
        // Converting JSON Object to String and String to JSON Object
