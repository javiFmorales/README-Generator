// TODO: Include packages needed for this application
const inquirer = require("")
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'PROJECT NAME',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'DESCRIPTION',
            message: 'please provide a brief description of your project',
        },
        {
            type: 'input',
            name: 'TABLE OF CONTENTS',
            message: '?',
        },
        {
            type: 'input',
            name: 'INSTALLATION',
            message: '?',
        },

        {
            type: 'input',
            name: 'USAGE',
            message: '?',
        },
        {
            type: 'input',
            name: 'LICENSE',
            message: '?',
        },
        {
            type: 'input',
            name: 'CONTRIBUTION',
            message: '?',
        },
        {
            type: 'input',
            name: 'TESTS',
            message: '?',
        },
        {
            type: 'input',
            name: 'QUESTIONS',
            message: '?',
        },


    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
