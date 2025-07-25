console.log("Write a function checkKeyword(str, keyword) that returns true if the keyword is found in the given str, case-insensitive.")

function checkKeyword(str, keyword) {
  return str.toLowerCase().includes(keyword.toLowerCase());
}

// Example usage:
console.log(checkKeyword("Hello World", "world")); // true
console.log(checkKeyword("JavaScript is fun", "SCRIPC")); // false


console.log("Create a function getWeekNumber(date) that returns the ISO 8601 week number of a given date.");
// daysBetween("2025-07-01", "2025-07-23"); // 22

function getISOWeek(date) {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = target.getUTCDay() || 7;
  target.setUTCDate(target.getUTCDate() + 4 - dayNum);

  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((target - yearStart) / 86400000) + 1) / 7);

  return {
    week: weekNo,
    year: target.getUTCFullYear()
  };
}

function daysBetween(date1, date2) {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    const diffTime = Math.abs(d2 - d1); // in milliseconds
    return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // convert to days
}

// Example usage:
console.log(getISOWeek(new Date("2025-12-31"))); // { week: 1, year: 2026 } or { week: 53, year: 2025 }

console.log(daysBetween("2025-07-01", "2025-07-23")); // 22
console.log(getISOWeek(new Date("2025-07-23"))); // e.g., 30

getISOWeek(new Date("2025-01-01")); // Week 1
getISOWeek(new Date("2025-12-31")); // Week 1 or 53 depending


console.log("Write a function daysBetween(date1, date2) that calculates and returns the number of full days between the two dates.")

console.log(daysBetween("2025-07-01", "2025-07-23")); // 22

console.log("Write a function cleanNames(str) that takes a comma-separated string and returns an array of trimmed");
// cleanNames(" John , Jane , Bob ") // ["John", "Jane", "Bob"]

function cleanNames(str) {
  return str.split(",").map(name => name.trim()).filter(name => name !== "");
}

console.log(cleanNames(" John , Jane , Bob ")); // ["John", "Jane", "Bob"]
console.log(cleanNames("  Alice , , Bob,  Charlie  ")); // ["Alice", "Bob", "Charlie"]

// Create a countdown timer that counts down from 10 to 0 in the console using setInterval(), and logs "Done!" when finished.

function startCountdown() {
  let count = 10;

  const intervalId = setInterval(() => {
    console.log(count);
    count--;

    if (count < 0) {
      clearInterval(intervalId);
      console.log("Done!");
    }
  }, 1000); // 1000 ms = 1 second
}

startCountdown();


console.log("Create a class Car with a static property totalCars and a const object inside a function.");

class Car {
  static totalCars = 0;

  constructor(brand1, model) {
    this.brand = brand1;
    this.model = model;
    Car.totalCars++; // Increment static property
  }

  getDetails() {
    return `${this.brand} ${this.model}`;
  }

  static getTotalCars() {
    return Car.totalCars;
  }
}

// Function with const object
function showCarInfo() {
  const carInfo = {
    type: "Sedan",
    fuel: "Petrol",
    transmission: "Automatic"
  };

  console.log("Car Info:", carInfo);
}

// Example usage
const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log(car1.getDetails()); // Toyota Camry
console.log(car2.getDetails()); // Honda Civic

console.log("Total Cars:", Car.getTotalCars()); // 2

showCarInfo(); // logs the const object


console.log("Explain when to use static vs const.");

class Cars {
  static totalCars = 0; // Static property shared across all instances
  static factoryName = "AutoMakers Inc."; // Static constant-like info

  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    Cars.totalCars++; // Increase count every time a new car is created
  }

  getDetails() {
    return `${this.brand} ${this.model}`;
  }

  static showStats() {
    console.log(`Factory: ${Cars.factoryName}`);
    console.log(`Total Cars Produced: ${Cars.totalCars}`);
  }
}

// A function that uses a const object internally
function getProductionConfig() {
  const config = {
    shift: "Morning",
    maxCapacity: 100,
    qualityCheck: true
  };

  console.log("Production Config:", config);

  // You can modify inner properties, but not reassign config itself
  config.shift = "Evening"; // Allowed
  // config = {} Error: Assignment to constant variable
}

// Using everything
const car3 = new Cars("Tesla", "Model S");
const car4 = new Cars("BMW", "X5");

console.log(car3.getDetails()); // Tesla Model S
console.log(car4.getDetails()); // BMW X5

Cars.showStats(); // Static method call
getProductionConfig(); // Const object in function


console.log("Write a function parseCSV(str) that: Converts a comma-separated string to an array")
console.log("Trims each item, Filters out empty strings, parseCSV(\", apple , banana , , cherry \") // [\"apple\", \"banana\", \"cherry\"]");

function parseCSV(str) {
  return str
    .split(",")                   // Split by comma
    .map(item => item.trim())     // Trim each item
    .filter(item => item !== ""); // Remove empty strings
}

// Example usage:
console.log(parseCSV(", apple , banana , , cherry ")); // ["apple", "banana", "cherry"]

// Write a function checkKeyword(str, keyword) that returns true if the keyword is found in the given str, case-insensitive.

function checkKeyword(str, keyword) {
  return str.toLowerCase().includes(keyword.toLowerCase());
}
console.log(checkKeyword("Hello World", "world")); // true
console.log(checkKeyword("JavaScript is Fun", "script")); // true

console.log("Create a function getWeekNumber(date) that returns the ISO 8601 week number of a given date.");

// Function to get ISO 8601 week number
function getWeekNumber(date) {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = target.getUTCDay() || 7; // Make Sunday = 7 (ISO standard)
  target.setUTCDate(target.getUTCDate() + 4 - dayNum); // Set to nearest Thursday

  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((target - yearStart) / 86400000) + 1) / 7);

  return weekNo;
}

// Function to get number of days between two dates
function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d2 - d1);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24)); // Convert ms to days
}
console.log(getWeekNumber(new Date("2025-07-23"))); // e.g., 30
console.log(daysBetween("2025-07-01", "2025-07-23")); // 22

console.log("Create a function getWeekNumber(date) that returns the ISO 8601 week number of a given date.");

function getWeekNumber(date) {
  const target = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const dayNum = target.getUTCDay() || 7; // Sunday = 7 in ISO
  target.setUTCDate(target.getUTCDate() + 4 - dayNum); // Set to nearest Thursday

  const yearStart = new Date(Date.UTC(target.getUTCFullYear(), 0, 1));
  const weekNo = Math.ceil((((target - yearStart) / 86400000) + 1) / 7);

  return weekNo;
}

console.log("Write a function daysBetween(date1, date2) that calculates and returns the number of full days between the two dates.");

function daysBetween(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  d1.setHours(0, 0, 0, 0);
  d2.setHours(0, 0, 0, 0);

  const diffTime = Math.abs(d2 - d1); 
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 

  return diffDays;
}
console.log(daysBetween("2025-07-01", "2025-07-23")); // 22
console.log(daysBetween("2025-12-31", "2026-01-02")); // 2

console.log("Write a function cleanNames(str) that takes a comma-separated string and returns an array of trimmed");

function cleanNames(str) {
  return str
    .split(",")                   
    .map(name => name.trim())     
    .filter(name => name !== ""); 
}
console.log(cleanNames(" John , Jane , Bob ")); 
console.log(cleanNames("  Alice , , Bob , Charlie ,  "));


