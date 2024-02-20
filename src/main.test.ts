import { Plateau } from "./plateau";
import { Rover } from "./rover";
import { RoverInstruction } from "./rover";
import { toRoverInstruction } from "./rover";


describe("To check if plateau is created with the given measurements" , () => {
    //Arrange
    const x=10
    const y=10
    const expectedResult=[10,10]

    //Act
    const actualResult=createPlateau(x,y)
   
    //Assert
    test("test if a grid is created with the given x and y measurements" , () => {
        expect(expectedResult).toStrictEqual(actualResult)
    });
});