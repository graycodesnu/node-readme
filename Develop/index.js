// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { json } = require("stream/consumers");

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "filename",
      message: "Enter your file name:",
    },
    {
      type: "input",
      name: "description",
      message: "Describe your project:",
    },
    {
        type: "input",
        name: "installation",
        message: "How can a user install your app?",
      },
    {
      type: "input",
      name: "usage",
      message: "Add usage instructions:",
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license:",
      choices: [
        "MIT",
        "GPLv2",
        "Apache",
        "GPLv3",
        "BSD 3-clause",
        "Unlicensed",
      ],
    },
    {
      type: "input",
      name: "contributing",
      message: "Add instructions for potential contributors:",
    },
    {
      type: "input",
      name: "tests",
      message: "Describe how a user can test your application:",
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub username:",
    },
    {
      type: "input",
      name: "emailAddress",
      message: "Enter your email address:",
    },
  ])


// TODO: Create a readme page
.then((data) => {

const readmeSections = ({
        filename,
        description,
        installation,
        usage,
        license,
        contributing,
        tests,
        github,
        emailAddress,
      }) =>
      `
# ${filename}
  
## Description
${description}
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
  
## Installation
${installation}
      
## Usage 
${usage}
     
## License

This application is covered under the [${license}] license. 
     
## Contributing 
${contributing}
      
## Tests  
${tests}
  
## Questions
${github}
${emailAddress}
  
        `

// TODO: Create a function to write README file

    let readmeSectionsContent = readmeSections(data);
    const filename = `${data.filename.toLowerCase().split(" ").join("")}.md`;
    console.log(data)
    fs.writeFile(filename, JSON.stringify(readmeSectionsContent, null, "\t"),
    (err) => err ? console.log(err) : console.log("Success!")
    );
});

// TODO: Create a function to append section titles to new readme

// TODO: Create a function append inputs to corresponding section

// TODO: Create a function that links the

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
