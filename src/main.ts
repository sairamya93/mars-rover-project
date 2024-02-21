import { Plateau } from "./plateau";
import { Rover } from "./rover";
import { RoverInstruction } from "./rover";
import { toRoverInstruction } from "./rover";
import * as readline from "readline";

export function isInstruction(
  inputInstruction: string
): inputInstruction is "L" | "R" | "M" {
  return /[LRM]/i.test(inputInstruction);
}

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to handle user input
function handleInput(input: string) {
  // Process the user input here
  console.log("Received input:", input);

  // Close the readline interface
  rl.close();
}

// Ask for user input
rl.question("Enter command: ", (input) => {
  // Handle the user input
  handleInput(input);
});
