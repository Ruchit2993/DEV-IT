// 1. What is the purpose of the Reflect object in JavaScript?

const obj = {};
Reflect.set(obj, 'name', 'Intern');
console.log(obj.name);  // Output: Intern

// 2. When would you use a Symbol instead of a regular string as an object key?

// const id = Symbol('userID');
// const user = {
//   [id]: 12345
// };
// console.log(user[id]);  // Output: 12345

// 3. What is the difference between window.location and document.location?

// console.log(window.location.href);  // Get current URL

// 4. How can you detect if the user is online using JavaScript?

// if (navigator.onLine) {
//   console.log("User is online");
// } else {
//   console.log("User is offline");
// }

// 5. Explain how the screen object differs from the window object.

// console.log(screen.width, screen.height);      // Screen size
// console.log(window.innerWidth, window.innerHeight);  // Browser viewport size

console.log("6. Create an object and use Reflect to: a. Set a property role to \"intern\" b. Get the role value and log it to the console js Copy Edit");

const employee = {};
Reflect.set(employee, 'role', 'intern');
const role = Reflect.get(employee, 'role');
console.log(role);  // Output: intern

console.log("7. Use a Symbol as a key for a secret user ID, and prevent it from being accidentally overwritten");


const id = Symbol("userId");
const user = {
  [id]: 23,
};
// console.log(user[id]);
// console.log(user)
user["userId"] = 24;
// console.log(user[id]);
console.log(user);

// console.log("8. Browser object interactions:");
// console.log("a. Display an alert with the current screen width and height using screen");

// // alert(`Screen width: ${screen.width}, height: ${screen.height}`);

// console.log("b. Log the browser’s user agent using navigator")
// console.log(navigator.userAgent);

// console.log("c. Check and display if the browser is online");

// alert(navigator.onLine ? "Online" : "Offline");

// console.log("d. Create a button that takes the user back using history.back()");

// <button onclick="history.back()">Go Back</button>


// console.log("9. DOM Manipulation:");
// console.log("a. Add a <h1> element to the page with the text \"Welcome, Intern!\" using the document object");

// <script>
//   const heading = document.createElement("h1");
//   heading.id = "welcome";
//   heading.innerText = "Welcome, Intern!";
//   document.body.appendChild(heading);
// </script>

// console.log("b. Create a button that changes the text of this heading to \"You clicked the button!\" when clicked");

// <button onclick="changeHeading()">Click Me</button>

// <script>
//   function changeHeading() {
//     document.getElementById("welcome").innerText = "You clicked the button!";
//   }
// </script>