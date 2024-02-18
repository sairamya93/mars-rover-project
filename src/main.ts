type DIRECTION = "N" | "S" | "E" | "W";

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
}

const Rover_1=new rover(6,3,'S')
console.log(Rover_1.validatePosition(createPlateau(5,5)))
