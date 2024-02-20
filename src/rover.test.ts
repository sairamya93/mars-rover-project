import { Plateau } from "./plateau";
import { Rover } from "./rover";

describe("To validate position of rover on the given grid" , () => {
    //Arrange
    const plateau_1: Plateau = { width: 5, height: 5 };
    const Rover_1 = new Rover(plateau_1, 1, 2, "N");
    const Rover_2 = new Rover(plateau_1, 5, 5, "S");
    const Rover_3 = new Rover(plateau_1, 0, 0, "E");
    const expectedResult=true

    //Act
    const actualResult1=Rover_1.validatePosition()
    const actualResult2=Rover_2.validatePosition()
    const actualResult3=Rover_3.validatePosition()
   
    //Assert
    test("test if the rover's position within the grid is true" , () => {
        expect(actualResult1).toBe(expectedResult)
    });
    test("test if the rover's position (0,0) on the grid is true" , () => {
        expect(actualResult2).toBe(expectedResult)
    });
    test("test if the rover's position (5,5) on the grid is true" , () => {
        expect(actualResult3).toBe(expectedResult)
    });
});

describe("To check if the rover's coordinates don't fall within the grid" , () => {
    //Arrange
    const plateau_1: Plateau = { width: 5, height: 5 };
    const Rover_1 = new Rover(plateau_1, 6, 7, "N");
    const Rover_2 = new Rover(plateau_1, 2, 6, "N");
    const Rover_3 = new Rover(plateau_1, 8, 2, "N");    
    const expectedResult=false

    //Act
    const actualResult1=Rover_1.validatePosition()
    const actualResult2=Rover_1.validatePosition()
    const actualResult3=Rover_1.validatePosition()
   
    //Assert
    test("test if the rover's position (with both coordinates outside the grid) is false" , () => {
        expect(actualResult1).toBe(expectedResult)
    });
    test("test if the rover's position (with Y coordinate outside the grid) is false" , () => {
        expect(actualResult1).toBe(expectedResult)
    });
    test("test if the rover's position (with X coordinate outside the grid) is false" , () => {
        expect(actualResult1).toBe(expectedResult)
    });
});