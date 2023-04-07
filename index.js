//imported files + dependencies
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shape');
const SVG = require('./lib/svg');

//create file function
const createLogo = (logo) => {
    fs.writeFile('logo.svg', logo, (err) => err ? console.log(err) : console.log('🎉 Generated logo.svg 🎉'))
}

//inquirer function
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt);

inquirer
    .prompt([
        {
            type: 'maxlength-input',
            message: 'Enter text for the logo',
            name: 'text',
            maxLength: 3,
        },
        {
            type: 'input',
            message: 'Enter text color',
            name: 'text_color',
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
            name: 'shape_color',
        }
    ])
    .then((input) => {
        const svg = new SVG();
        svg.setText(input.text, input.text_color);

        switch (input.shape) {
            //if chosen shape is a circle
            case 'Circle':
                //create the shape
                const circle = new Circle();
                circle.setColor(input.shape_color);
                circle.render();

                //create the svg
                svg.setShape(circle);
                const circleLogo = svg.render();

                //write the file
                createLogo(circleLogo);

                break;
            //if chosen shape is a square
            case 'Square':
                //create the shape
                const square = new Square();
                square.setColor(input.shape_color);
                square.render();

                //create the svg
                svg.setShape(square);
                const squareLogo = svg.render();

                //wrtie the file
                createLogo(squareLogo);

                break;
            //if chosen shape is a triangle
            case 'Triangle':
                //create the shape
                const triangle = new Triangle();
                triangle.setColor(input.shape_color);
                triangle.render();

                //create the svg
                svg.setShape(triangle);
                const triangleLogo = svg.render();

                //write the file
                createLogo(triangleLogo);

                break;
        }
    })