// Write a program to check if a number is multiple of 3 or not?


let userInput = prompt("Enter a number:"); // You can use any method to get user input

// Convert the user input to a number
let numberToCheck = parseInt(userInput);

if (!isNaN(numberToCheck)) {
  if (numberToCheck % 3 === 0) {
    console.log(`${numberToCheck} is a multiple of 3.`);
  } else {
    console.log(`${numberToCheck} is not a multiple of 3.`);
  }
} else {
  console.log("Invalid input. Please enter a valid number.");
}
