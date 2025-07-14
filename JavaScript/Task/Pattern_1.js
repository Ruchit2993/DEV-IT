// Pattern 1
// 1
// 2 3
// 4 5 6
// 7 8 9 10

let num = 1;
let elementsInRow = 1;
for (let row = 1; row <= 4; row++) {
    let output = "";
    for (let i = 1; i <= elementsInRow && num <= 10; i++) {
        output += num + " ";
        num++;
    }
    console.log(output.trim());
    elementsInRow++;
}