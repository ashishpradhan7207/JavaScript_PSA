// Write a program to print the greatest number in given two numbers?

let firstNumber = prompt("Enter the first number:"); // You can use any method to get user input
let secondNumber = prompt("Enter the second number:"); // You can use any method to get user input

// Convert the user input to numbers
let num1 = parseFloat(firstNumber);
let num2 = parseFloat(secondNumber);

if (!isNaN(num1) && !isNaN(num2)) {
  if (num1 > num2) {
    console.log(`${num1} is the greatest number.`);
  } else if (num1 < num2) {
    console.log(`${num2} is the greatest number.`);
  } else {
    console.log("Both numbers are equal.");
  }
} else {
  console.log("Invalid input. Please enter valid numbers.");
}
