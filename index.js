const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

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

}

function createEngineer() {

}

function createIntern() {

}

function runInquire() {

}
runInquire();