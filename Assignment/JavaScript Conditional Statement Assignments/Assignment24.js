// Write a program to check if a number is 3-digit numbers or not?

let userInput = prompt("Enter a number:"); // You can use any method to get user input

// Convert the user input to a number
let numberToCheck = parseInt(userInput);

if (!isNaN(numberToCheck)) {
  if (numberToCheck >= 100 && numberToCheck <= 999) {
    console.log(`${numberToCheck} is a 3-digit number.`);
  } else {
    console.log(`${numberToCheck} is not a 3-digit number.`);
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}
