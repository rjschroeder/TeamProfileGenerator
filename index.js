const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const managerQuestions = [
    {name: "managerName",message: "What is your name?",type: "input"},
    {name: "managerID",message: "What is your ID?",type: "input"},
    {name: "managerEmail",message: "What is your email?",type: "input"},
    {name: "managerOfficeNumber",message: "What is your office number?",type: "input"}]

const engineerQuestions = [
    {name: "engineerName",message: "What is your name?",type: "input"},
    {name: "engineerID",message: "What is your ID?",type: "input"},
    {name: "engineerEmail",message: "What is your email?",type: "input"},
    {name: "engineerGithub",message: "What is your GitHub username?",type: "input"}]

const internQuestions = [
    {name: "internName",message: "What is your name?",type: "input"},
    {name: "internID",message: "What is your ID?",type: "input"},
    {name: "internEmail",message: "What is your email?",type: "input"},
    {name: "internSchool",message: "What is your school?",type: "input"}]