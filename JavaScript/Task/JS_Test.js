// // class Shape {​
// //     area() {​
// //         console.log('Calculating area...');​
// //     }
// // }​

// // class Circle extends Shape {​
// //     constructor(radius) {​
// //         super();​
// //         this.radius = radius;​
// //     }​
// //     area() {​
// //     return Math.PI * this.radius * this.radius;​
// //     }
// // }​

// // class Square extends Shape {​
// //     constructor(side) {​
// //         super();​
// //         this.side = side;​
// //     }​
// //     area() {​
// //         return this.side * this.side;​
// //     }
// // }​

// // ​const shapes = [ new Circle(5), new Square(4) ];​
// // shapes.forEach(shape =>
// // console.log(shape.area()));​

// class Shape {
//     area() {
//         console.log('Calculating area...');
//     }
// }

// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//     area() {
//         return Math.PI * this.radius * this.radius;
//     }
// }

// class Square extends Shape {
//     constructor(side) {
//         super();
//         this.side = side;
//     }
//     area() {
//         return this.side * this.side;
//     }
// }

// const shapes = [ new Circle(5), new Square(4) ];
// shapes.forEach(shape =>
//     console.log(shape.area())
// );

// class Car{
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }
//     display(){
//         console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
//     }
// }
// const car1 = new Car("Toyota", "Corolla");
// car1.display(); // Output: Car Brand: Toyota, Model: Corolla


// function getSimpleWeekNumber(date) {
//     const start = new Date(date.getFullYear(), 0, 1);
//     const diff = date - start;
//     const oneWeek = 1000 * 60 * 60 * 24 * 7;
//     console.log("start:", start.toLocaleString());
//     console.log("diff:", diff);
//     console.log("oneWeek:", oneWeek);
//     return Math.ceil((diff + 1) / oneWeek);
// }
// const today = new Date("2025-07-23");
// console.log("simple week number:", getSimpleWeekNumber(today));

// const date1 = new Date('2025-07-01');
// const date2 = new Date('2025-07-23');
// // const date = new Date(2025-07-01);
// const diffTime = Math.abs(date2 - date1);
// const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
// console.log(diffDays);
// console.log(diffTime);

// const num = (1+"1")-1

// console.log(num);
// console.log(typeof(num))
// console.log(num === 10);

// const PI2 = 3.14159;
// PI2 =3.145

