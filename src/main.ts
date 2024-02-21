import { Plateau } from "./plateau";
import { Rover } from "./rover";
import { RoverInstruction } from "./rover";
import { toRoverInstruction } from "./rover";

export function isInstruction(inputInstruction: string) : inputInstruction is 'L' | 'R' | 'M'
{
  return /[LRM]/i.test(inputInstruction);
}



 

