# Mars Rover Project 
Welcome to the Mars Rover Project!

Mars Rover project is a rover navigation system for exploring the Maritan surface.It allows you to control the rover over a given surface(Plateau) using a series of commands.It is implemented using TypeScript.

![A sample picture of a rover](/src/rover.gif)

## Table of Contents
- Features
- Environment set up
- Project structure
- Future enhancements

### Features

- Control the rover on the martian plateau (A square or rectangle grid)
- Turn the rover left and right
- Move the rover forward
- Retrieve the rover's co-ordinates on the grid

### Environment set up

To install and run the project locally,follow the below steps:

1. Clone the repository 
```git clone https://github.com/sairamya93/mars-rover-project```
2. Navigate to the project directory
```cd mars-rover-project```
3. Ensure environment is set up for executing TypeScript files with Node.js

### Project structure

The project follows TDD approach. It consists of a src folder that holds the below ts files:

- main.ts : To implement the user input
- plateau.ts : Defines the type of Plateau with the required inputs
- rover.ts : Consists of Rover class with its properties and methods to implement its navigation on the grid
- rover.test.ts : Consists of all the unit test cases following the AAA format

### Test

Execute the below command in the terminal to execute all the test cases:
```npm test```

### Future Enhancements

- Add user interface  or an html page to interact with the Mars Rover functionality
- Can implement multiple rovers on a grid
- Detecting obstacles or collisions when there are more rovers on the grid
- Resource monitoring like battery,sample collection,signal quality
- Capturing images
- Multiple grids of varying shapes and terrains 










