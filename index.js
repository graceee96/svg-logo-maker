//imported files + dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shape');
const SVG = require('./lib/svg');

//inquirer function
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter text for the logo (must not be more than 3 characters)',
            name: 'text',
        },
        {
            type: 'input',
            message: 'Enter text color',
            name: 'text-color',
        },
        {
            type: 'rawlist',
            message: 'Pick a shape for the logo',
            name: 'shape',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            message: 'Enter shape color',
            name: 'shape-color',
        }
    ])
    .then((input) => {
        console.log(input);
        // console.log('Generated logo.svg')

        //if chosen shape is a circle
        //if chosen shape is a square
        //if chosen shape is a triangle

        //write to file function
    })