// Assignment 1: Safe JSON Calculator
// Concepts: Exception handling, eval, Promises, Strict Mode, Debugging

// Assignment 2: Delayed Task with Promises & Timeout
// Concepts: Promises, Async/Await, Date comparison, Debugging

// "use strict";

// function DelayedTask() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             const currentDate = new Date();
//             const targetDate = new Date(currentDate.getTime() + 5000); // 5 seconds later
//             if (currentDate < targetDate) {
//                 resolve("Task completed successfully!");
//             } else {
//                 reject("Task failed.");
//             }
//         }, 1000);
//     });
// }

"use strict";

/**
 * Delays execution until a future datetime.
 * @param {string} futureTime - A future ISO timestamp (e.g., "2025-07-21T10:00:00Z")
 * @returns {Promise<string>}
 */
function delayedTask(futureTime) {
    return new Promise((resolve, reject) => {
        const now = new Date();
        const targetTime = new Date(futureTime);

        console.log("Now:", now.toISOString());
        console.log("Target:", targetTime.toISOString());

        const delay = targetTime - now;

        // Reject if the time is in the past
        if (delay <= 0) {
            reject("Error: The specified time is in the past.");
            return;
        }

        console.log(`Task will execute in ${delay} ms`);

        // Set timeout to delay task
        setTimeout(() => {
            resolve("Task executed at: " + new Date().toISOString());
        }, delay);
    });
}

// 🔁 Example async usage
async function runTask() {
    try {
        // Set target time 5 seconds from now
        const now = new Date();
        const targetTime = new Date(now.getTime() + 5000).toISOString();

        const result = await delayedTask(targetTime);
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

runTask();




// Assignment 3: Event Delegation with closest()
// Concepts: Event handling, closest(), this, alert

// Assignment 4: Hoisting & Debug Scenario
// Concepts: Hoisting, var/let, debugger, Strict Mode

// Assignment 5: Combined Mini Form App
// Concepts: Exception Handling, Promises, Date comparison, this, alert, eval, closest(), Debugging

