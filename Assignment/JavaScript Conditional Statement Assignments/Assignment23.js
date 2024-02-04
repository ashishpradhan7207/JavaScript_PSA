// Write a program to check if a number is positive or not?

let userInput = prompt("Enter a number:"); // You can use any method to get user input

// Convert the user input to a number
let numberToCheck = parseFloat(userInput);

if (!isNaN(numberToCheck)) {
  if (numberToCheck > 0) {
    console.log(`${numberToCheck} is a positive number.`);
  } else if (numberToCheck === 0) {
    console.log(`${numberToCheck} is zero.`);
  } else {
    console.log(`${numberToCheck} is not a positive number.`);
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}
