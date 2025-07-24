// //1: Write a loop from 1 to 100 that skips the multiple of 3 and 5. 
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 || i % 5 === 0) {
//     continue;
//   }
//   console.log(i);
// }


// //2:Given an input element with type="email", fetch the value of the type attribute using JavaScript 
// let emailInput = document.querySelector('input[type="email"]');
// let emailType = emailInput.getAttribute('type');    
// console.log(emailType); // Output: "email"

// //3:Write a function to hide a paragraph when a button is clicked.
// function hideParagraph() {
//   let paragraph = document.getElementById("myParagraph");
//   paragraph.style.display = "none";
// }
// // HTML button to trigger the function
// let hideButton = document.getElementById("hideButton");
// hideButton.addEventListener("click", hideParagraph);    

// //4: Prompt the user to enter their age and display it in an alert. 
// let userAge = prompt("Please enter your age:");
// if (userAge) {
//   alert("Your age is: " + userAge);
// }

// //5: Create a form and reset it using a button. 
// let form = document.getElementById("myForm");
// let resetButton = document.getElementById("resetButton");
// resetButton.addEventListener("click", function() {
//   form.reset();
// });

// // 6: Write a function that returns the square of a number. 
// function squareNumber(num) {
//   return num * num;
// }
// // Example usage
// let number = 5;
// let squared = squareNumber(number);
// console.log(squared); // Output: 25

// 1: Write a loop from 1 to 100 that skips the multiple of 3 and 5.

// 1.Do Print 1 to 100 and diveded by 3 and 5 do skip and 3 and 5 multiply are there in 1 to 100 in js.
// 2.Write a Paragraph and it's already Hide with Hide Button now in same button add Show paragraph and When Click On Show Paragraph It's Show Paragraph in js.
// 3.Write a program that give input Password and Put Show Eye icon when we click icon the password will be visible and again click on icon it's hide details.
// function runLoop() {
//   let output = '';
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 || i % 5 === 0) continue;
//     output += i + ' ';
//   }
//   document.getElementById('loopOutput').innerText = output;
// }
function runLoop() {
  let output = '';
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) continue;
    output += i + ' ';
  }
  output += "\nMultiples of 3 and 5 from 1 to 100:\n";
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += i + ' ';
    }
  }
  document.getElementById('loopOutput').innerText = output;
}

// 2: Given an input element with type="email", fetch the value of the type attribute using JavaScript
function getInputType() {
  let input = document.getElementById("emailInput");
  document.getElementById("emailTypeResult").innerText = "Type is: " + input.getAttribute("type");
}

// 3: Write a function to hide a paragraph when a button is clicked.
function hideParagraph() {
  document.getElementById("hidePara").style.display = "none";
}

function toggleParagraph() {
  const para = document.getElementById("togglePara");
  const btn = document.getElementById("toggleBtn");
  if (para.style.display === "none") {
    para.style.display = "block";
    btn.innerText = "Hide Paragraph";
  } else {
    para.style.display = "none";
    btn.innerText = "Show Paragraph";
  }
}

// 4: Prompt the user to enter their age and display it in an alert.
function promptAge() {
  let age = prompt("Please enter your age:");
  if (age) {
    alert("Your age is: " + age);
  }
}

// 5: Create a form and reset it using a button.
function resetForm() {
  document.getElementById("sampleForm").reset();
}

// 6: Write a function that returns the square of a number.
function showSquare() {
  let num = document.getElementById("squareInput").value;
  let square = squareOf(num);
  document.getElementById("squareResult").innerText = `Square is: ${square}`;
}

function squareOf(n) {
  return n * n;
}

// 7: Enter a comma-separated string and split into array
// function splitUserColors() {
//   let str = document.getElementById("colorInput").value;
//   if (str.trim() === "") {
//     document.getElementById("userColorArray").innerText = "Please enter a valid comma-separated string.";
//     return;
//   }
//   let colors = str.split(",").map(color => color.trim()).filter(color => color !== "");
//   document.getElementById("userColorArray").innerText = "Array: [" + colors.join(", ") + "]";
// }

function splitUserColors() {
  let str = document.getElementById("colorInput").value;
  if (str.trim() === "") {
    document.getElementById("userColorArray").innerText = "Please enter a valid comma-separated string.";
    return;
  }
  let colors = str.split(",").map(c => c.trim()).filter(c => c);
  document.getElementById("userColorArray").innerText = "Array: [" + colors.join(", ") + "]";
}

// 8: Ternary Operator - Pass or Fail
function checkResult() {
  let marks = document.getElementById("marksInput").value;
  let result = marks >= 33 ? "Pass" : "Fail";
  document.getElementById("resultStatus").innerText = result;
}

function togglePasswordVisibility() {
  const pwd = document.getElementById("passwordField");
  pwd.type = pwd.type === "password" ? "text" : "password";
}
