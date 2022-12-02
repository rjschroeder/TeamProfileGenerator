const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

let arr = [];

const managerQuestions = [
    {name: "managerName",message: "What is the manager's name?",type: "input"},
    {name: "managerID",message: "What is the manager's ID?",type: "input"},
    {name: "managerEmail",message: "What is the manager's email?",type: "input"},
    {name: "managerOfficeNumber",message: "What is the manager's office number?",type: "input"}]

const engineerQuestions = [
    {name: "engineerName",message: "What is this engineer's name?",type: "input"},
    {name: "engineerID",message: "What is this engineer's ID?",type: "input"},
    {name: "engineerEmail",message: "What is this engineer's email?",type: "input"},
    {name: "engineerGithub",message: "What is this engineer's GitHub username?",type: "input"}]

const internQuestions = [
    {name: "internName",message: "What is this intern's name?",type: "input"},
    {name: "internID",message: "What is this intern's ID?",type: "input"},
    {name: "internEmail",message: "What is this intern's email?",type: "input"},
    {name: "internSchool",message: "What is this intern's school?",type: "input"}]


function createManager() {
    inquirer.prompt(managerQuestions).then((response) => {
        let manager = new Manager(
            response.managerName,
            response.managerID,
            response.managerEmail,
            response.managerOfficeNumber
        );
        arr.push(manager);
    })
}

function createEngineer() {
    inquirer.prompt(engineerQuestions).then((response) => {
        let engineer = new Engineer(
            response.engineerName,
            response.engineerID,
            response.engineerEmail,
            response.engineerGithub
        );
        arr.push(engineer);
    })
}

function createIntern() {
    inquirer.prompt(internQuestions).then((response) => {
        let intern = new Intern(
            response.internName,
            response.internID,
            response.internEmail,
            response.internSchool
        );
        arr.push(intern);
    })
}

function runInquire() {
    createManager();
    inquirer.prompt([{
        name: "addMember",
        message: "Choose which member to add, or choose finish:",
        type: "list",
        choices: [
            "Engineer",
            "Intern",
            "Finish"
        ]
    }
    ]).then((response) => {
        if(response.addMember === "Engineer") {
            createEngineer();
        } else if (response.addMember === "Intern") {
            createIntern();
        } else {
            //finished with adding members
        }
    })
}
runInquire();