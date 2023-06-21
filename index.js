// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project goal and objectives in a few sentences:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation guidelines?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your application used?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Can others contribute to this project? If so, how?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any tests designed for this application?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username so others can find your work?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What email address would you like to share with others so they can contact you about this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is your project using?',
        choices: [
            "MIT",
            "Apache 2.0",
            "GPLv3",
            "N/A"
        ],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    // node fs method writes new file to main directory, and returns error report or success message using a conditional ternary operator
    return fs.writeFile(path.join(process.cwd(), fileName), data, (err) =>
    err ? console.log(err) : console.log('Success!'))

};

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answer) => {
        return writeToFile("sampleREADME.md", generateMarkdown({...answer}))
    }
    )
};

// Function call to initialize app
init();
