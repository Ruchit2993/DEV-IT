// Pattern 2
//    *
//    ***
//   *****
//  *******
// *********


let num = 1;

for(let i = 0 ; i<3 ; i++){
    let line = "";
    let space = "";
     for(let k = 0; k<5-i; k++){
        space += " ";
     }

     for(let j = 0; j<2*i+1; j++){
        line += num;
        num++;
     }
    console.log(space + line);
}

// let n=5;


// for (let i = 1; i <=  n ; i++) {

//     let space=" ".repeat(n-i);
//     let star="*".repeat(2*i-1);

//     console.log(space+star);
    
// }