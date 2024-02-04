// Write a program to print even or odd for a given number?

let userInput = prompt("Enter a number:"); // You can use any method to get user input

// Convert the user input to a number
let numberToCheck = parseInt(userInput);

if (!isNaN(numberToCheck)) {
  if (numberToCheck % 2 === 0) {
    console.log(`${numberToCheck} is an even number.`);
  } else {
    console.log(`${numberToCheck} is an odd number.`);
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}
