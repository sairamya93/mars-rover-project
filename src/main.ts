type DIRECTION = "N" | "S" | "E" | "W";
type RoverInstruction = "L" | "R" | "M";

//Create Plateau function with the given measurements 
export const createPlateau = (...coordinates:number[]) => {
  
  //if (coordinates.length>2)
  //return 'Please provide x and y coordinates' //To handle only square and rectangle shaped plateau

  const width=coordinates[0]
  const height=coordinates[1] 
  const grid : number []=[width,height]
  return grid
} 

//Create Rover class with the (x,y,direction) to be placed on the plateau
class rover {
    private x_Ordinate:number
    private y_Ordinate:number
    private direction: DIRECTION

    constructor(x:number,y:number,direction:DIRECTION)
    {
        this.x_Ordinate=x
        this.y_Ordinate=y
        this.direction=direction
    }

   //Function to check if the rover can be placed on the plateau with the given x and y coordinates
    validatePosition = (grid:number[]) : boolean => {
        return (this.x_Ordinate<= grid[0] && this.x_Ordinate >=0)  && (this.y_Ordinate <= grid[1] && this.y_Ordinate>= 0)
    }

    //Function to move the Rover with the given instructions
    moveRover = (grid:number[],instruction: RoverInstruction) => {
        switch(instruction) {
            case "L":  
                this.turnLeft(this.direction)
                break
            case "R":
                this.turnRight(this.direction)
                break
            case "M":
                this.moveForward(grid,this.x_Ordinate,this.y_Ordinate,this.direction)
                break
        }
    }

    turnLeft = (direction : DIRECTION) => {
        switch(direction) {
            case "N": 
             this.direction='W'
             break
            case "S": 
             this.direction='E'
             break
            case "E": 
             this.direction='N'
             break
            case "W": 
             this.direction='S'
             break
        }
    }

    turnRight = (direction : DIRECTION) => {
        switch(direction) {
            case "N": 
             this.direction='E'
             break
            case "S": 
             this.direction='W'
             break
            case "E": 
             this.direction='S'
             break
            case "W": 
             this.direction='N'
             break
        }
    }

    moveForward = (grid : number[],x_ord:number,y_ord:number,direction:DIRECTION) => {
       switch(direction) {
         case "N": 
           if(y_ord+1 > grid[1]) throw "Rover has reached the plateau boundary and cannot move forward"
           this.y_Ordinate=y_ord+1
         case "S":
           if(y_ord-1 < 0) throw "Rover has reached the plateau boundary and cannot move forward"
           this.y_Ordinate=y_ord-1
         case "E":
           if(x_ord+1 > grid[0]) throw "Rover has reached the plateau boundary and cannot move forward"
           this.y_Ordinate=x_ord+1
         case "W":
           if(x_ord-1 > 0) throw "Rover has reached the plateau boundary and cannot move forward"
           this.y_Ordinate=x_ord-1
       }
    }

    roverPosition = () => {
        return [this.x_Ordinate,this.y_Ordinate,this.direction]
    }

}

const Rover_1=new rover(5,1,'S')
console.log(Rover_1.validatePosition(createPlateau(5,5)))
console.log(Rover_1.moveRover(createPlateau(5,5),'M'))
console.log(Rover_1.roverPosition())
