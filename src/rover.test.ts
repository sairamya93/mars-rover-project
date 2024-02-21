import { Plateau } from "./plateau";
import { Rover } from "./rover";
import { isInstruction } from "./main";

describe("To validate position of rover on the given grid", () => {
  //Arrange
  const plateau_1: Plateau = { width: 5, height: 5 };
  const Rover_1 = new Rover(plateau_1, 1, 2, "N");
  const Rover_2 = new Rover(plateau_1, 5, 5, "S");
  const Rover_3 = new Rover(plateau_1, 0, 0, "E");
  const expectedResult = true;

  //Act
  const actualResult1 = Rover_1.validatePosition();
  const actualResult2 = Rover_2.validatePosition();
  const actualResult3 = Rover_3.validatePosition();

  //Assert
  test("test if the rover's position within the grid is true", () => {
    expect(actualResult1).toBe(expectedResult);
  });
  test("test if the rover's position (0,0) on the grid is true", () => {
    expect(actualResult2).toBe(expectedResult);
  });
  test("test if the rover's position (5,5) on the grid is true", () => {
    expect(actualResult3).toBe(expectedResult);
  });
});

describe("To check if the rover's coordinates don't fall within the grid", () => {
  //Arrange
  const plateau_1: Plateau = { width: 5, height: 5 };
  const Rover_1 = new Rover(plateau_1, 6, 7, "N");
  const Rover_2 = new Rover(plateau_1, 2, 6, "N");
  const Rover_3 = new Rover(plateau_1, 8, 2, "N");
  const expectedResult = false;

  //Act
  const actualResult1 = Rover_1.validatePosition();
  const actualResult2 = Rover_1.validatePosition();
  const actualResult3 = Rover_1.validatePosition();

  //Assert
  test("test if the rover's position (with both coordinates outside the grid) is false", () => {
    expect(actualResult1).toBe(expectedResult);
  });
  test("test if the rover's position (with Y coordinate outside the grid) is false", () => {
    expect(actualResult1).toBe(expectedResult);
  });
  test("test if the rover's position (with X coordinate outside the grid) is false", () => {
    expect(actualResult1).toBe(expectedResult);
  });
});

describe("To check if Rover turns Left on the grid", () => {
  //Arrange
  const plateau_1: Plateau = { width: 5, height: 5 };
  const Rover_1 = new Rover(plateau_1, 1, 2, "N");
  const instructionsToRover = "L";
  const expectedResult = [1, 2, "W"];

  //Act
  Rover_1.validateInstruction(instructionsToRover);
  const actualResult = Rover_1.roverPosition();

  //Assert
  test("test if the rover turns Left", () => {
    expect(actualResult).toStrictEqual(expectedResult);
  });
});

describe("To check if Rover turns Right on the grid", () => {
  //Arrange
  const plateau_1: Plateau = { width: 10, height: 5 };
  const Rover_1 = new Rover(plateau_1, 10, 5, "E");
  const instructionsToRover = "R";
  const expectedResult = [10, 5, "S"];

  //Act
  Rover_1.validateInstruction(instructionsToRover);
  const actualResult = Rover_1.roverPosition();

  //Assert
  test("test if the rover turns Right", () => {
    expect(actualResult).toStrictEqual(expectedResult);
  });
});

describe("To check if Rover moves forward 1 unit on the grid in the same direction it is facing", () => {
  //Arrange
  const plateau_1: Plateau = { width: 10, height: 5 };
  const Rover_1 = new Rover(plateau_1, 6, 5, "E");
  const instructionsToRover = "M";
  const expectedResult = [7, 5, "E"];

  //Act
  Rover_1.validateInstruction(instructionsToRover);
  const actualResult = Rover_1.roverPosition();

  //Assert
  test("test if the rover moves forward 1 unit", () => {
    expect(actualResult).toStrictEqual(expectedResult);
  });
});

describe("To check if Rover follows a sequence of instructions", () => {
  //Arrange
  const plateau_1: Plateau = { width: 10, height: 8 };
  const Rover_1 = new Rover(plateau_1, 3, 3, "E");
  const instructionsToRover = "MMRMMRMRRM";
  const expectedResult = [5, 1, "E"];

  //Act
  Rover_1.validateInstruction(instructionsToRover);
  const actualResult = Rover_1.roverPosition();

  //Assert
  test("test if the rover follows all the sequence of instructions and is positioned as expected", () => {
    expect(actualResult).toStrictEqual(expectedResult);
  });
});

describe("To check if Rover follows a sequence of instructions in lower case characters", () => {
  //Arrange
  const plateau_1: Plateau = { width: 10, height: 8 };
  const Rover_1 = new Rover(plateau_1, 1, 2, "N");
  const instructionsToRover = "lmlmlmlmm";
  const expectedResult = [1, 3, "N"];

  //Act
  Rover_1.validateInstruction(instructionsToRover);
  const actualResult = Rover_1.roverPosition();

  //Assert
  test("test if the rover follows all the sequence of instructions in lower case characters", () => {
    expect(actualResult).toStrictEqual(expectedResult);
  });
});

describe("To check if Rover follows a sequence of instructions but goes beyond Grid's boundary", () => {
  //Arrange
  const plateau_1: Plateau = { width: 200, height: 100 };
  const Rover_1 = new Rover(plateau_1, 198, 50, "N");
  const instructionsToRover = "RMMMMM";

  //Act and Assert
  test("test for error message when Rover moves beyond grid's boundary", () => {
    expect(() => {
      Rover_1.validateInstruction(instructionsToRover);
    }).toThrow(
      "Rover has reached the east plateau boundary and cannot move forward"
    );
  });
});

describe("To test Rover moveForward function when it goes beyond Grid's boundary ", () => {
  //Arrange
  const plateau_1: Plateau = { width: 5, height: 5 };
  const Rover_1 = new Rover(plateau_1, 4, 5, "N");
  const Rover_2 = new Rover(plateau_1, 3, 0, "S");
  const Rover_3 = new Rover(plateau_1, 5, 4, "E");
  const Rover_4 = new Rover(plateau_1, 0, 4, "W");

  test("test for error message for moving Rover beyond grid's y-boundary", () => {
    expect(() => {
      Rover_1.moveForward(4, 5, "N");
    }).toThrow(
      "Rover has reached the North plateau boundary and cannot move forward"
    );
  });
  test("test for error message for moving Rover beyond grid's y-boundary", () => {
    expect(() => {
      Rover_2.moveForward(3, 0, "S");
    }).toThrow(
      "Rover has reached the south plateau boundary and cannot move forward"
    );
  });
  test("test for error message for moving Rover beyond grid's x-boundary", () => {
    expect(() => {
      Rover_3.moveForward(5, 4, "E");
    }).toThrow(
      "Rover has reached the east plateau boundary and cannot move forward"
    );
  });
  test("test for error message for moving Rover beyond grid's x-boundary", () => {
    expect(() => {
      Rover_4.moveForward(0, 4, "W");
    }).toThrow(
      "Rover has reached the west plateau boundary and cannot move forward"
    );
  });
});

describe("To check if error message is shown if instructions have characters other than L,M,R", () => {
  //Arrange
  const plateau_1: Plateau = { width: 10, height: 8 };
  const Rover_1 = new Rover(plateau_1, 3, 3, "E");
  const instructionsToRover = "ttd";

  //Act and Assert
  test("test for error message for characters other than L,R,M", () => {
    expect(() => {
      Rover_1.validateInstruction(instructionsToRover);
    }).toThrow(
      "Instructions should contain only L,R,M (Left,Right and Move Forward)"
    );
  });
});

describe("To check if error message is thrown if instructions have numbers", () => {
  //Arrange
  const plateau_1: Plateau = { width: 10, height: 8 };
  const Rover_1 = new Rover(plateau_1, 3, 3, "E");
  const instructionsToRover = "12 32 *";

  //Act and Assert
  test("test if error message is given for instructions having numbers or special characters", () => {
    expect(() => {
      Rover_1.validateInstruction(instructionsToRover);
    }).toThrow(
      "Instructions should contain only L,R,M (Left,Right and Move Forward)"
    );
  });
});

describe("To check if error message is thrown if null value in instructions", () => {
  //Arrange
  const plateau_1: Plateau = { width: 10, height: 8 };
  const Rover_1 = new Rover(plateau_1, 3, 3, "E");
  const instructionsToRover = "";

  //Act and Assert
  test("test if error message is given for instructions having null values", () => {
    expect(() => {
      Rover_1.validateInstruction(instructionsToRover);
    }).toThrow(
      "Instructions should contain only L,R,M (Left,Right and Move Forward)"
    );
  });
});

describe("To verify rover's position on the grid", () => {
  //Arrange
  const plateau_1: Plateau = { width: 10, height: 8 };
  const Rover_1 = new Rover(plateau_1, 3, 3, "E");
  const expectedResult = [3, 3, "E"];

  //Act
  const actualResult = Rover_1.roverPosition();

  //Assert
  test("test to verify rover's position on the grid", () => {
    expect(actualResult).toStrictEqual(expectedResult);
  });
});

describe("To check if Rover turns left and direction is changed", () => {
  //Arrange
  const plateau_1: Plateau = { width: 5, height: 5 };
  const Rover_1 = new Rover(plateau_1, 4, 3, "N");
  const Rover_2 = new Rover(plateau_1, 4, 3, "S");
  const Rover_3 = new Rover(plateau_1, 4, 3, "E");
  const Rover_4 = new Rover(plateau_1, 4, 3, "W");

  //Act
  Rover_1.turnLeft("N");
  Rover_2.turnLeft("S");
  Rover_3.turnLeft("E");
  Rover_4.turnLeft("W");

  //Assert
  test("test to verify rover turns left North to West", () => {
    expect(Rover_1.roverPosition()).toStrictEqual([4, 3, "W"]);
  });
  test("test to verify rover turns left South to East", () => {
    expect(Rover_2.roverPosition()).toStrictEqual([4, 3, "E"]);
  });
  test("test to verify rover turns left East to North", () => {
    expect(Rover_3.roverPosition()).toStrictEqual([4, 3, "N"]);
  });
  test("test to verify rover turns left West to South", () => {
    expect(Rover_4.roverPosition()).toStrictEqual([4, 3, "S"]);
  });
});

describe("To check if Rover turns right and direction is changed", () => {
  //Arrange
  const plateau_1: Plateau = { width: 5, height: 5 };
  const Rover_1 = new Rover(plateau_1, 3, 3, "N");
  const Rover_2 = new Rover(plateau_1, 3, 3, "S");
  const Rover_3 = new Rover(plateau_1, 3, 3, "E");
  const Rover_4 = new Rover(plateau_1, 3, 3, "W");

  //Act
  Rover_1.turnRight("N");
  Rover_2.turnRight("S");
  Rover_3.turnRight("E");
  Rover_4.turnRight("W");

  //Assert
  test("test to verify rover turns right North to East", () => {
    expect(Rover_1.roverPosition()).toStrictEqual([3, 3, "E"]);
  });
  test("test to verify rover turns right South to West", () => {
    expect(Rover_2.roverPosition()).toStrictEqual([3, 3, "W"]);
  });
  test("test to verify rover turns right East to South", () => {
    expect(Rover_3.roverPosition()).toStrictEqual([3, 3, "S"]);
  });
  test("test to verify rover turns right West to North", () => {
    expect(Rover_4.roverPosition()).toStrictEqual([3, 3, "N"]);
  });
});
