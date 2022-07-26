// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require ("./utils/generateMarkdown")
// const renderLicenseBadge = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a brief description of your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to follow in order to install your project?',
        },

        {
            type: 'input',
            name: 'usage',
            message: 'How would this app be used?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of licencing would you like your file to have?',
            choices:[
                "Mozilla",
                "ISC",
                "Apache",
                "MIT",
                "GNU"
            ]
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What information is needed to know before contributing to the app?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What comman will you use to run tests?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Would you please provide your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide an email address',
        },


    ]);
}

// TODO: Create a function to write README file
function writeToFile(data) { 
    fs.writeFile('./dist/Readme.md' ,data ,err =>{
 if (err){
        console.log('mmm... there is something missing!!!')
    }else (
        console.log('Your file has been created!!!')
    )
    }) 
   
    
 }

// TODO: Create a function to initialize app
function init() { 
questions()
.then(answears => {
    return generateMarkdown(answears);
})
.then (data => {
   // console.log(data)
    return writeToFile(data);
})
.catch(err => {
    console.log(err)
})
}

// Function call to initialize app
init();
