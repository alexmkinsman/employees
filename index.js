const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML =require("./src/html_template");
const teamArray = [];

// const generateHTML = ({ managerName, managerId, managerEmail, managerOfficeNumber }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${managerName}</h1>
//     <p class="lead">I am from ${managerId}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${managerEmail}</li>
//       <li class="list-group-item">LinkedIn: ${managerOfficeNumber}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

//fs.writeFile("index.html", "",)
// function to ask questions through inquire
function addMembers(){
    inquirer
    .prompt([
        //enter the team manager’s name, employee ID, email address, and office number
        {
            type: 'list',
            name: "userChoice",
            message: "Who else would you like to add to your team?",
            choices: [
                "Engineer",
                "Intern",
                "No one, that is my whole team."
            ]
        },
    // transfer information that is input into an object with an array to be stored and used later
    ]).then((answers)=> {
        switch(answers.userChoice){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                createTeam();
                break;
        }
    })
}

function addEngineer(){
    inquirer
    .prompt([
        //enter the team engineer’s name, employee ID, email address, and github 
        {
            type: 'input',
            name: "engineerName",
            message: "Enter the engineer's name",
        },
        {
            type: 'input',
            name: "engineerId",
            message: "Enter the engineer's ID number",
        },
        {
            type: 'input',
            name: "engineerEmail",
            message: "Enter the engineer's email",
        },
        {
            type: 'input',
            name: "engineerGithub",
            message: "Enter the engineer's github",
        }
    // transfer information that is input into an object with an array to be stored and used later
    ]).then((answers)=> {
        let engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        addMembers();
    })
}

function addIntern(){
    inquirer
    .prompt([
        //enter the team intern’s name, employee ID, email address, and school 
        {
            type: 'input',
            name: "internName",
            message: "Enter the intern's name",
        },
        {
            type: 'input',
            name: "internId",
            message: "Enter the intern's ID number",
        },
        {
            type: 'input',
            name: "internEmail",
            message: "Enter the intern's email",
        },
        {
            type: 'input',
            name: "internSchool",
            message: "Enter the intern's school",
        }
    // transfer information that is input into an object with an array to be stored and used later
    ]).then((answers)=> {
        let intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        addMembers();
    })
}

// function to ask manager questions
inquirer
    .prompt([
        //enter the team manager’s name, employee ID, email address, and office number
        {
            type: 'input',
            name: "managerName",
            message: "Enter the manager's name",
        },
        {
            type: 'input',
            name: "managerId",
            message: "Enter the manager's ID number",
        },
        {
            type: 'input',
            name: "managerEmail",
            message: "Enter the manager's email",
        },
        {
            type: 'input',
            name: "managerOfficeNumber",
            message: "Enter the manager's office number",
        }
    // transfer information that is input into an object with an array to be stored and used later
    ]).then((answers)=> {
        let manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        addMembers();
    })

// function to ask if they want to add an engineer, intern, or finish
// if they want to add engineer, ask engineer questions
    // then ask if they want to add an engineer, intern, or finish
// if they want to add intern, ask intern questions
    // then ask if they want to add an engineer, intern, or finish
// if they are done, exit and make file



// writes a new file 'index.html' and prints data from inquirer
//const data = "hello";

function createTeam(){
    console.log(teamArray);
    const htmlPageContent = generateHTML(teamArray);
    console.log(htmlPageContent);
    fs.writeFileSync(path.join(__dirname,'dist/index.html'), htmlPageContent, 'utf8')
}