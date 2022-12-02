const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const managerQuestions = [
    {
        name: "managerName",
        message: "What is your name?",
        type: "input"
    },
    {
        name: "managerID",
        message: "What is your ID?",
        type: "input"
    },
    {
        name: "managerEmail",
        message: "What is your email?",
        type: "input"
    },
    {
        name: "managerOfficeNumber",
        message: "What is your office number?",
        type: "input"
    }
]