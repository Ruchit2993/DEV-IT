console.log("Operators in JavaScript");

// Arithmetic Operators
let x = 10;
let y = 5;

console.log("x + y:", x + y);
console.log("x - y:", x - y);
console.log("x * y:", x * y);
console.log("x / y:", x / y);
console.log("x % y:", x % y);
console.log("x ** y:", x ** y); // Exponentiation
console.log("x++:", x++); // Post-increment
console.log("++y:", ++y); // Pre-increment 
console.log("x--:", x--); // Post-decrement
console.log("--y:", --y); // Pre-decrement

// Assignment Operators
let a = 10;

a += 5; // a = a + 5
console.log("a += 5:", a);

a -= 3; // a = a - 3
console.log("a -= 3:", a);

a *= 2; // a = a * 2
console.log("a *= 2:", a);

a /= 4; // a = a / 4
console.log("a /= 4:", a);

a %= 2; // a = a % 2
console.log("a %= 2:", a);

// Comparison Operators
let b = 20;
let C = "20";
console.log("b == C:", b == C); // Loose equality (type coercion)
console.log("b === C:", b === C); // Strict equality (no type coercion 
console.log("b != C:", b != C); // Loose inequality (type coercion)
console.log("b !== C:", b !== C); // Strict inequality (no type coercion)
console.log("b > 15:", b > 15); // Greater than
console.log("b < 25:", b < 25); // Less than
console.log("b >= 20:", b >= 20); // Greater than or equal to
console.log("b <= 20:", b <= 20); // Less than or equal to


// Logical Operators
let c = true;
let d = false;
console.log("c && d:", c && d); // Logical AND
console.log("c || d:", c || d); // Logical OR
console.log("!c:", !c); // Logical NOT
// Bitwise Operators
let e = 5; // 0101 in binary
let f = 3; // 0011 in binary
console.log("e & f:", e & f); // Bitwise AND
console.log("e | f:", e | f); // Bitwise OR
console.log("e ^ f:", e ^ f); // Bitwise XOR
console.log("~e:", ~e); // Bitwise NOT
console.log("e << 1:", e << 1); // Bitwise left shift
console.log("e >> 1:", e >> 1); // Bitwise right shift
// Ternary Operator
let age = 18;
console.log("age >= 18 ? 'Adult' : 'Minor':", age >= 18 ? 'Adult' : 'Minor');
// Typeof Operator
let g = "Hello";
console.log("typeof g:", typeof g); // Returns the type of the variable
// Instanceof Operator
let h = [1, 2, 3];
console.log("h instanceof Array:", h instanceof Array); // Checks if h is an instance of Array  
// Delete Operator
let obj = { name: "John", age: 30 };
delete obj.age;
console.log("After delete obj.age:", obj);  
// In Operator
console.log("'name' in obj:", 'name' in obj); // Checks if 'name' property exists in obj
console.log("'age' in obj:", 'age' in obj); // Checks if 'age' property exists in obj
// Comma Operator
let i = (1, 2, 3);
console.log("Value of i:", i); // 3 
// Void Operator
let j = 10;
console.log("void j:", void j); // Returns undefined, does not evaluate j
// This is useful in some cases where you want to ignore the value of an expression.
