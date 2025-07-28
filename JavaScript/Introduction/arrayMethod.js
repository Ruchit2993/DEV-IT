const fruits = ["Banana", "Orange", "Apple", "Mango","Apple"];
console.log(fruits)

// console.log(fruits.lastIndexOf("Apple")) // retuns the index of the given element at wich it was appered in last
// console.log(fruits.indexOf("Apple")) // returns the index of the given element at wich it was appered form first

// let myList = fruits.toString();
// console.log(myList)

// same but diff syntex
// at() method returns the same as [].
// let fruit1 = fruits.at(2);
// let fruit = fruits[2];
// console.log(fruit)

//<p id="demo"></p> // this script will add the text into this tag using inner html & with the joing of * so the result will be
// Banana * Orange * Apple * Mango
// document.getElementById("demo").innerHTML = fruits.join(" * ");

// fruits.pop();
// fruits.push("Kiwi");

// let fruit = fruits.shift(); // shift removes the first ele form the array
// console.log(fruit)

// console.log(fruits)

// fruits.unshift("Lemon"); //unshift adds the new ele at the starting of the ele

// fruits[0] = "Kiwi"; //changes the value at the perticular index
// fruits[fruits.length] = "Kiwi"; //adds the value at the last using the .length() property

// delete fruits[0]; Warning Using delete() leaves undefined holes in the array Use pop() or shift() instead

// const nuts = ["almonds", "walnuts", "cashews", "hazelnuts", "pistachios"];
// console.log(nuts);

// const mixed = fruits.concat(nuts);
// console.log(mixed);

// console.log(fruits);

// console.log(fruits.copyWithin(2, 0)); //Copy to index 2, all elements from index 0
// console.log(fruits.copyWithin(2, 0, 2)); //Copy to index 2, the elements from index 0 to 2
// copyWithin() method overwrites the existing values, method does not add items to the array, method does not change the length of the array.

const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat(); // flat() method creates a new array with sub-array elements concatenated to a specified depth

// const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
// flatMap() method first maps all elements of an array and then creates a new array by flattening the array

console.log(newArr);
