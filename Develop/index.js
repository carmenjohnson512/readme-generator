// array of questions for user
//README elements
// Title
//   * Description
//   * Table of Contents
//   * Installation
//   * Usage
//   * License
//   * Contributing
//   * Tests
//   * Questions

const markdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type:"input",
        message: "What is the project title?",
        name: "title",
    },
    {
        type:"input",
        message: "What is the project description",
        name: "description",
    },
    {
        type:"input",
        message: "What is your Table of Contents?",
        name: "tableOfContents",
    },
    {
        type:"input",
        message: "What is your installation?",
        name: "installation",
    },
    {
        type:"list",
        message: "What licenses to include?",
        name: "license",
        choices: ["MIT", "Mozilla"]
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){

    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function (answers){
        console.log(answers)
        if(answers.license === "MIT") {
            answers.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        } else {
            answers.license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

        }
        var readmeStr = markdown(answers);
        console.log(readmeStr);
        writeToFile("READEME.md",readmeStr)
    }); 
}

// function call to initialize program
init();



