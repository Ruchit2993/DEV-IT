// Assignment 1: Safe JSON Calculator
// Concepts: Exception handling, eval, Promises, Strict Mode, Debugging

"use strict";

function evaluateExpression(jsonText) {
  let promise = new Promise(function (resolve, reject) {
    try {
      // Convert the input string to a JSON object
      let obj = JSON.parse(jsonText);

      // Get the first key in the object
      let keys = Object.keys(obj);

      // If object is empty
      if (keys.length === 0) {
        throw new Error(
          "JSON must contain at least one key with a math expression."
        );
      }

      let key = keys[0]; // First key (e.g., "math", "formula", etc.)
      let expression = obj[key]; // Get the value from that key

      // Check that the value is a string
      if (typeof expression !== "string") {
        throw new Error("The value must be a string expression.");
      }

      let safe = /^[0-9+\-*/().\s]+$/.test(expression);
      if (!safe) {
        throw new Error("Expression contains unsafe or invalid characters.");
      }

      let result = eval(expression);

      // Return result
      resolve(result);
    } catch (e) {
      reject(e.message);
    }
  });

  // Show result or error in the UI
  promise
    .then(function (value) {
      document.getElementById("result").textContent = "Result: " + value;
    })
    .catch(function (err) {
      document.getElementById("result").textContent = "Error: " + err;
    });
}

// Called when the button is clicked
function calculate() {
  let input = document.getElementById("jsonInput").value;
  evaluateExpression(input);
}

// Assignment 2: Delayed Task with Promises & Timeout
// Concepts: Promises, Async/Await, Date comparison, Debugging

function delayedTask(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(` Task completed after ${seconds} seconds!`);
    }, seconds * 1000);
  });
}

// Function that runs the delayed task if date is still valid
async function runTask() {
  const output = document.getElementById("output");
  output.textContent = " Waiting...";

  const now = new Date();
  const futureDate = new Date("2025-07-25");

  if (now < futureDate) {
    const result = await delayedTask(3); // 3-second delay
    output.textContent = result;
  } else {
    output.textContent = " Too late! The date has already passed.";
  }
}

document.getElementById("startBtn").addEventListener("click", runTask);

// Assignment 3: Event Delegation with closest()
// Concepts: Event handling, closest(), this, alert

// Select the parent element
const itemList = document.getElementById("itemList");

// Add one event listener to the parent
itemList.addEventListener("click", function (event) {
  const clickedItem = event.target.closest("li");

  // Make sure the clicked element is actually a list item inside the list
  if (clickedItem && itemList.contains(clickedItem)) {
    alert("You clicked: " + clickedItem.textContent);
  }
});

// Assignment 4: Hoisting & Debug Scenario
// Concepts: Hoisting, var/let, debugger, Strict Mode

// debugger; // This line will pause the browser if DevTools is open

// Hoisting Example with var
console.log("Value of a before declaration:", a); // undefined
var a = 10;
console.log("Value of a after declaration:", a); // 10

// Hoisting Example with let
try {
  console.log("Value of b before declaration:", b); // Error!
} catch (e) {
  console.error("Error:", e.message);
}

let b = 20;
console.log("Value of b after declaration:", b); // 20

// Without declaring a variable
try {
  undeclaredVar = 5; // Error in strict mode
} catch (e) {
  console.error("Strict mode error:", e.message);
}

// Assignment 5: Combined Mini Form App
// Concepts: Exception Handling, Promises, Date comparison, this, alert, eval, closest(), Debugging

const form = document.getElementById("myForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //   debugger;

  try {
    const name = this.username.value;
    const dob = new Date(this.dob.value);
    const mathInput = document.getElementById("mathExp").value;

    // Date comparison
    const today = new Date();
    if (dob > today) {
      alert("Date of birth cannot be in the future!");
      return;
    }

    // Evaluate math expression
    let result;
    try {
      result = eval(mathInput); // Use with caution!
    } catch (err) {
      alert("Invalid math expression");
      return;
    }

    // Simulate async operation using Promise
    fakeSaveToServer(name, dob, result)
      .then((response) => {
        alert("Form submitted successfully: " + response);
      })
      .catch((error) => {
        alert("Error: " + error);
      });
  } catch (err) {
    alert("Something went wrong: " + err.message);
  }
});

// Promise example
function fakeSaveToServer(name, dob, result) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "") {
        reject("Name is empty");
      } else {
        resolve(
          `Saved ${name}, DOB: ${dob.toDateString()}, Math Result: ${result}`
        );
      }
    }, 1000);
  });
}

// closest() example
document.addEventListener("click", function (e) {
  if (e.target.tagName === "INPUT") {
    const form = e.target.closest("form");
    console.log("Clicked inside form:", form.id);
  }
});
