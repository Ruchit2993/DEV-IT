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

class Car{
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    display(){
        console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
    }
}
const car1 = new Car("Toyota", "Corolla");
car1.display(); // Output: Car Brand: Toyota, Model: Corolla