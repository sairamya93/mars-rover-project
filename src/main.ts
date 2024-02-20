import { Plateau } from "./plateau";
import { Rover } from "./rover";
import { RoverInstruction } from "./rover";
import { toRoverInstruction } from "./rover";

//Create Plateau function with the given measurements
export const createPlateau = (...coordinates:number[]) => {
  
  //if (coordinates.length>2)
  //return 'Please provide x and y coordinates' //To handle only square and rectangle shaped plateau

  const width=coordinates[0]
  const height=coordinates[1] 
  const grid : number []=[width,height]
  return grid
} 


function isInstruction(input: string) : input is 'L' | 'R' | 'M'
{
  console.log(input)
  return /[LRM]/.test(input);
}

const plateau_1: Plateau = { width: 5, height: 5 };
const Rover_1 = new Rover(plateau_1, 1, 2, "N");

const instructionsToRover = 'LMLMLMLMM'

if(isInstruction(instructionsToRover))
   executeRoverInstruction(instructionsToRover);
else
throw "Handling only Left,Right and Move Forward(L,R,M)"

function executeRoverInstruction(instruction : 'L' | 'R' | 'M') {
   const instructionsArray=instruction.split('')
   
  for(let i=0;i< instructionsArray.length;i++) 
  { 
    if(Rover_1.validatePosition())
    {
          const instruction = toRoverInstruction(instructionsArray[i]);
     if (instruction === null) {
       console.log('Invalid instruction');
       } 
else {
      console.log(`Move rover ${instruction}`)
      Rover_1.moveRover(instruction);     
      
    }  
  }
}
//const someInstruction = getInstruction(); // returns a string

 
}
 
console.log(Rover_1.roverPosition());
