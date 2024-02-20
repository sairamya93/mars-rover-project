import { Plateau } from "./plateau";

type DIRECTION = "N" | "S" | "E" | "W";

export enum RoverInstruction {
    Left = 'L',
    Right = 'R',
    Move = 'M'
  }
  
//Function to convert string to RoverInstruction enum value
export function toRoverInstruction(instruction: string): RoverInstruction | null {
    switch (instruction.toUpperCase()) {
        case 'L':
            return RoverInstruction.Left;
        case 'R':
            return RoverInstruction.Right;
        case 'M':
            return RoverInstruction.Move;
        default:
            return null; // Return null for invalid instructions
    }
  }

//Create Rover class with the (x,y,direction) to be placed on the plateau
export class Rover {
    private x_Ordinate: number;
    private y_Ordinate: number;
    private direction: DIRECTION;
  
    grid: Plateau;
    
    //Initialize the rover with the x,y,direction and the grid that it will be placed on
    constructor(grid: Plateau, x: number, y: number, direction: DIRECTION) {
      this.grid = grid;
      this.x_Ordinate = x;
      this.y_Ordinate = y;
      this.direction = direction;
    }
  
    //Function to check if the rover can be placed on the plateau with the given x and y coordinates
    validatePosition = (): boolean => {
      return this.x_Ordinate <= this.grid.width && this.x_Ordinate >= 0 && this.y_Ordinate <= this.grid.height && this.y_Ordinate >= 0 ? true : false
    };
  
    //Function to move the Rover on the gird with the given instructions
    moveRover = (instruction: RoverInstruction) => {
      switch (instruction) {
        case "L":
          this.turnLeft(this.direction);
          break;
        case "R":
          this.turnRight(this.direction);
          break;
        case "M":
          this.moveForward(this.x_Ordinate,this.y_Ordinate,this.direction);
          break;
      }
    };
   
    //Function to turn the Rover to the left
    turnLeft = (direction: DIRECTION) => {
      switch (direction) {
        case "N":
          this.direction = "W";
          break;
        case "S":
          this.direction = "E";
          break;
        case "E":
          this.direction = "N";
          break;
        case "W":
          this.direction = "S";
          break;
      }
    };
  
    //Function to turn the Rover to the right
    turnRight = (direction: DIRECTION) => {
      switch (direction) {
        case "N":
          this.direction = "E";
          break;
        case "S":
          this.direction = "W";
          break;
        case "E":
          this.direction = "S";
          break;
        case "W":
          this.direction = "N";
          break;
      }
    };
  
    //Function to move the rover one unit forward
    //Before moving the rover, we check if the rover move falls within the area of the grid it is placed on
    //If not we throw an error that the rover cannot move forward in that direction
    moveForward = (x_ord: number,y_ord: number,direction: DIRECTION) => {
      switch (direction) {
        case "N":
          if (y_ord + 1 > this.grid.height)
            throw "Rover has reached the North plateau boundary and cannot move forward";
          this.y_Ordinate = y_ord + 1;
          break;
        case "S":
          if (y_ord - 1 < 0)
            throw "Rover has reached the south plateau boundary and cannot move forward";
          this.y_Ordinate = y_ord - 1;
          break;
        case "E":
          if (x_ord + 1 > this.grid.width)
            throw "Rover has reached the east plateau boundary and cannot move forward";
          this.x_Ordinate = x_ord + 1;          
          break;
        case "W":
          if (x_ord - 1 < 0)
            throw "Rover has reached the west plateau boundary and cannot move forward";
          this.x_Ordinate = x_ord - 1;
          break;
      }
    };
  
    //Function to retrieve the current rover position on the grid
    roverPosition = () => {
      return [this.x_Ordinate, this.y_Ordinate, this.direction];
    };
  }