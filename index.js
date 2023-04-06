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
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            message: 'Enter shape color',
            name: 'shape-color',
        }
    ])
    .then((answers) => {
        console.log(answers);
        console.log('Generated logo.svg')
    })