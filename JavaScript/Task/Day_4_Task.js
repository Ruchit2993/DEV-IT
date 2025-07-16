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

if (navigator.onLine) {
  console.log("User is online");
} else {
  console.log("User is offline");
}

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
console.log(user)
console.log(user[id]); // Output: 23
user["userId"] = 24;
// console.log(user[id]);
console.log(user);



// Q1 Reflact Object in JavaScript 

// console.log(Reflect);

// | Method                                        | Purpose                                    |
// | --------------------------------------------- | ------------------------------------------ |
// | `Reflect.get(target, propertyKey)`            | Like `target[propertyKey]`                 |
// | `Reflect.set(target, propertyKey, value)`     | Like `target[propertyKey] = value`         |
// | `Reflect.has(target, propertyKey)`            | Like `propertyKey in target`               |
// | `Reflect.deleteProperty(target, propertyKey)` | Like `delete target[propertyKey]`          |
// | `Reflect.ownKeys(target)`                     | Returns all keys (`Object.keys` + symbols) |
// | `Reflect.construct(target, args)`             | Like `new target(...args)`                 |
// | `Reflect.apply(targetFunc, thisArg, args)`    | Like `Function.prototype.apply`            |

// When would you use a Symbol instead of a regular string as an object key?

// | Feature                | String Keys | Symbol Keys                       |
// | ---------------------- | ----------- | --------------------------------- |
// | Globally visible       |   Yes       |    No (unless using `Symbol.for`) |
// | Unique by default      |   No        |    Yes                            |
// | Enumerable (in loops)  |   Yes       |    No (by default)                |
// | Risk of key collision  |   Yes       |    Avoided                        |
// | Used for meta-behavior |   Rarely    |    Common                         |

// 3. What is the difference between window.location and document.location?

// | Feature                  | `window.location`   | `document.location`                |
// | ------------------------ | ------------------- | ---------------------------------- |
// |   Standard & recommended | Yes                 |   No (deprecated in some browsers) |
// |    Accesses the URL info | Yes                 | Yes (same object)                  |
// |    Deprecated            | No                  | Yes                                |
// |    Availability          | All modern browsers | Might throw warnings               |


// window.location is part of the Window interface.

// document.location exists for backward compatibility and historical reasons.

// Both refer to the same Location object, which represents the current URL and provides methods like:

// assign()
// replace()
// reload()

// and properties like href, host, pathname, search, hash, etc.

// window.innerWidth;   // Viewport width (in pixels)
// window.innerHeight;  // Viewport height
// window.location.href // Current URL
// window.open()        // Open a new tab/window

// screen.width;        // Total screen width (e.g., 1920)
// screen.height;       // Total screen height
// screen.availWidth;   // Width excluding OS taskbar/docks
// screen.availHeight;  // Height excluding taskbar
// screen.colorDepth;   // Bit depth per pixel (e.g., 24)


//  4. How can you detect if the user is online using JavaScript?

// navigator.onLine ?
//     console.log("User is online")
//     :
//     console.log("User is offline")

// 5. Explain how the screen object differs from the window object.


// | Aspect                | `window`                                                | `screen`                                                  |
// | --------------------- | ------------------------------------------------------- | --------------------------------------------------------- |
// | **Represents**        | The **browser window/tab** (viewport + controls)        | The **entire physical screen** of the user's device       |
// | **Purpose**           | Used to control and interact with the **browser**       | Used to get **device display properties**                 |
// | **Common Properties** | `window.innerWidth`, `window.location`, `window.open()` | `screen.width`, `screen.availHeight`, `screen.colorDepth` |
// | **Scope**             | Refers to the **visible part of the webpage**           | Refers to the **whole monitor or device screen**          |
// | **Used For**          | Managing browser behavior                               | Detecting screen size, color depth, etc.                  |
