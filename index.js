// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // {
    //     type: 'input',
    //     name: 'title',
    //     message: 'What is the title of this project?',
    // },
    // {
    //     type: 'input',
    //     name: 'description',
    //     message: 'Please describe your project goal and objectives in a few sentences:',
    // },
    // {
    //     type: 'input',
    //     name: 'installation',
    //     message: 'Are there any installation instructions the user must follow?',
    // },
    // {
    //     type: 'input',
    //     name: 'usage',
    //     message: 'How is your project or application used?',
    // },
    // {
    //     type: 'input',
    //     name: 'contribution',
    //     message: 'How can others contribute to this project?',
    // },
    // {
    //     type: 'input',
    //     name: 'tests',
    //     message: 'Are there any test instructions or criteria for this application?',
    // },
    {
        type: 'list',
        name: 'license',
        message: 'Which license is your project using?',
        choices: [
            "MIT",
            "Apache 2.0",
            "GPLv3",
            "N/A"
        ],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { //how should I be calling "data" here? 

    fileName = "README.md"; // will name the file "README.md" which is industry standard

    inquirer
    .prompt(questions)
    .then((answer) => {

        const newFile = generateMarkdown(answer);
        console.log(newFile);

        // fs.writeFile(fileName, newFile, (err) =>
        // err ? console.log(err) : console.log('Successfully created README!')
        // )
    }
    )

};
// TODO: Create a function to initialize app
function init() {
    writeToFile();
};
// Function call to initialize app
init();
