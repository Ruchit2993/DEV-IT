console.log("1: Create a Base Class of your choice")

class Employee {
    #salary = 0;
    #name = "";
    #age = 0;

    constructor(name, age, salary) {
        this.#name = name;
        this.#age = age;
        this.#salary = salary;
    }

    getDetails() {
        return `Name: ${this.#name}, Age: ${this.#age}, Salary: ${this.#salary}`;
    }

    static companyPolicy() {
        return "All employees must accept the company policy";
    }
}

console.log("5: Add static method to the class")

const emp1 = new Employee("Dev", 30, 50000);
console.log(emp1.getDetails());       // Output: Name: Dev, Age: 30, Salary: 50000

console.log("2: Add relevant fields to the class considering encapsulation");

// emp1.#salary = 100000; // Will generate error

// Accessing static method
console.log(Employee.companyPolicy());


// console.log(emp1.companyPolicy()); //  Error: emp1.companyPolicy is not a function
console.log("6:Create another class (with some extra property) that extends base class ​")
class Manager extends Employee {
    #department = "";

    constructor(name, age, salary, department) {
        super(name, age, salary);
        this.#department = department;
    }

    getDetails() {
        return `${super.getDetails()}, Department: ${this.#department}`;
    }
}

console.log("3: Use constructor to initialize the properties​")
const mgr1 = new Manager("Demon", 35, 80000, "HR");
console.log(mgr1.getDetails());       // Output: Name: Demon, Age: 35, Salary: 80000, Department: HR

console.log(Manager.companyPolicy());

console.log("4: Add a prototype method getDetails() that returns class info​")
