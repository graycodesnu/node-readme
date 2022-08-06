// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
 .prompt([
    {
        type: 'input',
        name:'filename',
        message: 'Enter your file name:',
    },
    {
        type:'input',
        name: 'description',
        message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Enter your table of contents:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'License Information:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests:',
    },
])

// TODO: Create a function to write README file
.then((data) => {
    const filename = `${data.filename.toLowerCase().split(' ').join('')}.md`;
console.log(data)
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });



// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
