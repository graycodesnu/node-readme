// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
 .prompt([
    {
        type: 'input',
        name:'introduction',
        message: 'Introduce your project',
    },
    {
        type:'input',
        name: 'goal',
        message: 'What was your goal?',
    },
    {
        type: 'input',
        name: 'result',
        message: 'What was your result?',
    },
])

// TODO: Create a function to write README file
.then((data) => {
    const filename = `${data.who.toLowerCase().split(' ').join('')}.json`;
console.log(data)
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


  
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
