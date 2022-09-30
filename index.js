const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const teamArray = [];


const generateHTML = ({ managerName, managerId, managerEmail, managerOfficeNumber }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Hi! My name is ${managerName}</h1>
    <p class="lead">I am from ${managerId}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My GitHub username is ${managerEmail}</li>
      <li class="list-group-item">LinkedIn: ${managerOfficeNumber}</li>
    </ul>
  </div>
</div>
</body>
</html>`;

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
        }
    })

// function to ask if they want to add an engineer, intern, or finish
// if they want to add engineer, ask engineer questions
    // then ask if they want to add an engineer, intern, or finish
// if they want to add intern, ask intern questions
    // then ask if they want to add an engineer, intern, or finish
// if they are done, exit and make file



// writes a new file 'index.html' and prints data from inquirer
//const data = "hello";

.then((answers)=> {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) => {
    if (err){
        console.log('Unable to create this file.');
    } else {
        console.log("Success");
    }
})
})
