// Task 1

const student = {
  firstName: "DEV",
  lastName: "IT",
  age: 20,
  studentId: "S12345",
  standard: 10,
  class: "A",
  courses: ["Math", "Science", "History"],
  address: "ABD",
  hobbies: ["Reading", "Gaming", "Coding"],
};

// Task 2

const students = [
  {
    firstName: "DEV",
    lastName: "IT",
    age: 20,
    studentId: "S12345",
    standard: 10,
    class: "A",
    courses: ["Math", "Science", "History"],
    address: "ABD",
    hobbies: ["Reading", "Gaming", "Coding"],
  },
  {
    firstName: "DEV",
    lastName: "IT",
    age: 20,
    studentId: "S12345",
    standard: 10,
    class: "A",
    courses: ["Math", "Science", "History"],
    address: "ABD",
    hobbies: ["Reading", "Gaming", "Coding"],
  },
];

// Task 3

const student_1 = [
  {
    firstName: "DEV",
    lastName: "IT",
    age: 20,
    studentId: "S12345",
    standard: 10,
    class: "A",
    courses: ["Math", "Science", "History"],
    address: "ABD",
    hobbies: ["Reading", "Gaming", "Coding"],
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  }
];

console.log(student_1[0].getFullName()); 
// Task 4

const student_2 = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    studentId: "S12345",
    grade: "A",
    courses: ["Math", "Science", "History"],
    active: true,
    getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
    }
  },
];

const isActiveStudent = (student) => {
  return student.active ? `${student.getFullName()} is an active student.` : `${student.getFullName()} is not an active student.`;
};

console.log(isActiveStudent(student_2[0]));


// Task 5

// const now = new Date();
// const currentTime = now.toLocaleTimeString();

// const randomNum = Math.floor(Math.random() * 100) + 1;

// console.log(`Current Time: ${currentTime}`);
// console.log(`Random Number: ${randomNum}`);

// Task 6


