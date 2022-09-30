const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


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
    ])

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
