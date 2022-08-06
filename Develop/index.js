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
        type: 'confirm',
        name: 'table of contents',
        message: 'Would you like to add a table of contents?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Add usage instructions:',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Add license information',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Add instructions for potential contributors:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe how a user can test your application:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email address',
        message: 'Enter your email address:',
    },
])

// TODO: Create a function to write README file
.then((data) => {
    
// TODO: Create a readme page    
    const readmeSections = `
    ## Description
    ${JSON.stringify(data.description)}
    ## Table of Contents
    ## Installation
    ${JSON.stringify(data.installation)}
    ## Usage 
    ${JSON.stringify(data.usage)}
    ## License
    ${JSON.stringify(data.installation)} 
    ## Contributing 
    ${JSON.stringify(data.contributing)}
    ## Tests  
    ${JSON.stringify(data.tests)}

    `
    
    const filename = `${data.filename.toLowerCase().split(' ').join('')}.md`;
console.log(data)
    fs.writeFile(filename, JSON.stringify(readmeSections, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// TODO: Create a function to append section titles to new readme 

// TODO: Create a function append inputs to corresponding section 


// TODO: Create a function that links the 

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
