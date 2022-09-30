const generateManager = (manager) =>{
return 
  `<div class="container">
    <h1 class="display-4">Hi! My name is ${manager.findName}</h1>
    <p class="lead">My Id number is ${manager.findId}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My email is ${manager.findEmail}</li>
      <li class="list-group-item">My Office number is: ${manager.findOfficeNumber}</li>
    </ul>
  </div>`;
}

const generateEngineer = (engineer) =>{
    return 
      `<div class="container">
        <h1 class="display-4">Hi! My name is ${engineer.findName}</h1>
        <p class="lead">My Id number is ${engineer.findId}.</p>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My email is ${engineer.findEmail}</li>
          <li class="list-group-item">My GitHub is: ${engineer.findGithub}</li>
        </ul>
      </div>`;
    }

const generateIntern = (intern) =>{
return 
  `<div class="container">
    <h1 class="display-4">Hi! My name is ${intern.findName}</h1>
    <p class="lead">My Id number is ${intern.findId}.</p>
    <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
    <ul class="list-group">
      <li class="list-group-item">My email is ${intern.findEmail}</li>
      <li class="list-group-item">My school is: ${intern.findSchool}</li>
    </ul>
  </div>`;
}

function generateTeam(){
    let teamHTML = [];
    
}

function generateHTML(){
return 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        <title>Team Directory</title>
    </head>

    <body>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 jumbotron mb-3 team-heading">
                    <h1 class="text-center">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center">
                    ${generateTeam(team)}
                </div>
            </div>
        </div>
    </body>
    </html>`;
}

module.exports = generateHTML;