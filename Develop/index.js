// array of questions for user

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
        message: "Please describe the installation process.",
        name: "installation",
    },
    {
        type:"input",
        message: "Please provide a usage example.",
        name: "usage",
    },
    {
        type:"checkbox",
        message: "What licenses to include?",
        name: "license",
        choices: ["MIT", "Mozilla"]
    },
    {
        type:"input",
        message: "How can users contribute code updates?",
        name: "contributing"
    },
    {
        type:"input",
        message: "Please provide more detail on code and technologies used.",
        name: "tests"
    },
    {
        type:"input",
        message: "What is your Github username?",
        name: "github"
    },
    {
        type:"input",
        message: "What is your email address?",
        name: "email"
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
        // console.log(answers)
        if(answers.license === "MIT") {
            answers.license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        } else {
            answers.license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"

        } 

        var readmeStr = markdown(answers);
        // console.log(readmeStr);
        writeToFile("README.md",readmeStr)

    }); 
}

// function call to initialize program
init();



