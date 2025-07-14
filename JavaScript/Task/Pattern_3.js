// Pattern 3 

// *
// * *
// * * *

for (let row = 1; row <= 3; row++) {
    let numSpaces = 3 - row;
    let output = "";
    for (let i = 1; i <= numSpaces; i++) {
        output += " ";
    }
    for (let i = 1; i <= row; i++) {
        output += "* ";
    }
    console.log(output.trim());
}