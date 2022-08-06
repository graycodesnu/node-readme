// TODO: Include packages needed for this application
const inquirer = requirer('inquirer');
const fs = requirer('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'introduction',
        message: 'Introduction',
    },
    {
        type: 'input',
        name: 'goals',
        message: 'Goals',
    },
    {
        type: 'input',
        name: 'results',
        message: 'Results',
    },
];


// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(README, JSON.stringify(data, null), (err) =>
    err ? console.log(error) : console.log(data)
    );
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
