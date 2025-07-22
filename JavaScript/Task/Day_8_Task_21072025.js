// Assignment 1: Safe JSON Calculator
// Concepts: Exception handling, eval, Promises, Strict Mode, Debugging

// "use strict";

// Function to safely evaluate a mathematical expression in a JSON string
// function evaluateExpression(jsonText) {
//   return new Promise((resolve, reject) => {
//     try {
//       // Parse the input JSON string
//       let obj = JSON.parse(jsonText);

//       // Debug: Show parsed object
//       console.log("Parsed JSON:", obj);

//       // Get the first key (expression description)
//       let keys = Object.keys(obj);
//       if (keys.length === 0) {
//         throw new Error("JSON is empty");
//       }

//       let expr = obj[keys[0]];

//       // Debug: Show expression
//       console.log("Evaluating expression:", expr);

//       // Basic validation: allow only numbers and safe operators
//       if (!/^[0-9+\-*/ ().]+$/.test(expr)) {
//         throw new Error("Invalid characters in expression");
//       }

//       // Evaluate expression safely
//       let result = eval(expr);

//       // Debug: Show result
//       console.log("Result:", result);

//       resolve(result);
//     } catch (error) {
//       // Catch any JSON parsing or eval errors
//       console.error("Error:", error.message);
//       reject("Failed to evaluate expression: " + error.message);
//     }
//   });
// }

// // 🔁 Example Usage:

// let jsonInput = '{"calculation": "10 + 20 / 2"}';

// evaluateExpression(jsonInput)
//   .then(result => {
//     console.log("✅ Answer:", result);
//   })
//   .catch(error => {
//     console.log("❌ Error:", error);
//   });


// Assignment 2: Delayed Task with Promises & Timeout
// Concepts: Promises, Async/Await, Date comparison, Debugging

"use strict";

// Utility function to delay by ms using Promise
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main function to schedule a task for a future date
async function runDelayedTask(targetDateTime) {
  try {
    let now = new Date();
    let target = new Date(targetDateTime);

    console.log("⏰ Current Time:", now);
    console.log("🎯 Target Time:", target);

    // Compare dates
    if (isNaN(target.getTime())) {
      throw new Error("Invalid date format");
    }

    let diff = target.getTime() - now.getTime();

    if (diff <= 0) {
      console.log("📅 Target time already passed!");
      performTask();
    } else {
      console.log(`⌛ Waiting for ${diff} milliseconds...`);
      await delay(diff);
      performTask();
    }
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

// The task to perform
function performTask() {
  console.log("✅ Task executed at:", new Date().toLocaleString());
}

// 🔁 Example: Set task 5 seconds in the future
let now = new Date();
let future = new Date(now.getTime() + 5000); // 5 seconds from now
runDelayedTask(future.toString());

// Assignment 3: Event Delegation with closest()
// Concepts: Event handling, closest(), this, alert

// Assignment 4: Hoisting & Debug Scenario
// Concepts: Hoisting, var/let, debugger, Strict Mode

// Assignment 5: Combined Mini Form App
// Concepts: Exception Handling, Promises, Date comparison, this, alert, eval, closest(), Debugging