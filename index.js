//setting up all required imports for inquirer and writing to files
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//import classes and buildPage function
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const buildPage = require("./src/template");

//array to store all team members
let arr = [];

//array of inquirer questions to be asked for a manager
const managerQuestions = [
    {name: "managerName",message: "What is the manager's name?",type: "input"},
    {name: "managerID",message: "What is the manager's ID?",type: "input"},
    {name: "managerEmail",message: "What is the manager's email?",type: "input"},
    {name: "managerOfficeNumber",message: "What is the manager's office number?",type: "input"}]

//array of inquirer questions to be asked for an engineer
const engineerQuestions = [
    {name: "engineerName",message: "What is this engineer's name?",type: "input"},
    {name: "engineerID",message: "What is this engineer's ID?",type: "input"},
    {name: "engineerEmail",message: "What is this engineer's email?",type: "input"},
    {name: "engineerGithub",message: "What is this engineer's GitHub username?",type: "input"}]

//array of inquirer questions to be asked for an intern
const internQuestions = [
    {name: "internName",message: "What is this intern's name?",type: "input"},
    {name: "internID",message: "What is this intern's ID?",type: "input"},
    {name: "internEmail",message: "What is this intern's email?",type: "input"},
    {name: "internSchool",message: "What is this intern's school?",type: "input"}]

//function to create a new manager based off user input
function createManager() {
    inquirer.prompt(managerQuestions).then((response) => {
        let manager = new Manager(
            response.managerName,
            response.managerID,
            response.managerEmail,
            response.managerOfficeNumber
        );
        //adds manager to team member list
        arr.push(manager);
        //calls function to add the next memeber
        addMember();
    })
}

//function to create a new engineer based off user input
function createEngineer() {
    inquirer.prompt(engineerQuestions).then((response) => {
        let engineer = new Engineer(
            response.engineerName,
            response.engineerID,
            response.engineerEmail,
            response.engineerGithub
        );
        //adds engineer to team member list
        arr.push(engineer);
        //calls function to add the next memeber
        addMember();
    })
}

//function to create a new intern based off user input
function createIntern() {
    inquirer.prompt(internQuestions).then((response) => {
        let intern = new Intern(
            response.internName,
            response.internID,
            response.internEmail,
            response.internSchool
        );
        //adds intern to team member list
        arr.push(intern);
        //calls function to add the next memeber
        addMember();
    })
}

//menu function to decide which member to add next
function addMember() {
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
            //builds the html if user is finished with input
            build();
        }
    })
}

//function to build the html, calls the buildPage() function to do so
function build() {
    fs.writeFileSync("./dist/team.html", buildPage(arr), "utf-8");
}

createManager();