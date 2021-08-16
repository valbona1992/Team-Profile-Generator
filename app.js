const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/employee')
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const teamMembersArray = [];

const managerPrompt = [
{
    type: "input",
    message: "Welcome to Team Building. Please enter the name of the manager?",
    name: "name"
}, {
    type: "input",
    message: "Enter the employee ID for the manager?",
    name: "id",
    validate: function (num) {
        const numbers = /^[0-9]+$/.test(num);
        if(numbers) {
            return true;
        }
        return 'Please enter a valid ID number that only includes numbers'
    }
}, {
    type: "input",
    message: "Enter the office number for the manager?",
    name: "officeNumber",
    validate: function (num) {
        const numbers = /^[0-9]+$/.test(num);
        if(numbers) {
            return true;
        }
        return 'Please enter a valid office number that only includes numbers'
    }
}, {
    type: "input",
    message: "What is the manager's email?",
    name: "email",
    validate(value) {
        const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
        if (pass) {
            return true;
        }
        return 'Please enter a valid email!'
    }
}];

const endManagerPrompt = [
{
    type: 'list',
	message: 'Would you like to add another team member to this team? Select Yes to add an Engineer or Intern. Select No if no additional team members need to be added.',
	choices: ['Yes', 'No'],
	name: 'teamSize',
}];

const teamMemberRolePick = [
{
	type: 'list',
	message: 'Is this team member an Engineer or an Intern?',
	choices: ['Engineer', 'Intern'],
	name: 'teamMemberRole',
}];

const engineerPrompt = [{
    type: 'input',
    message: "What is the Engineer's name?",
    name: 'name',
},
{
    type: 'input',
    message: "What is the engineer's email?",
    name: "email",
    validate(value) {
        const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
        if (pass) {
            return true;
        }
        return 'Please enter a valid email!'
    }
}, 
{
    type: "input",
    message: "Enter the employee ID for the engineer",
    name: "id",
    validate: function (num) {
        const numbers = /^[0-9]+$/.test(num);
        if(numbers) {
            return true;
        }
        return 'Please enter a valid ID number that only includes numbers'
    }
},
{
    type: 'input',
    name: 'github',
    message: "Please enter the Engineers GitHub username"

}];

const internPrompt = [{
    type: 'input',
    message: "What is the Intern's name?",
    name: 'name',
},
{
    type: 'input',
    message: "What is the intern's email?",
    name: "email",
    validate(value) {
        const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
        if (pass) {
            return true;
        }
        return 'Please enter a valid email!'
    }
}, 
{
    type: "input",
    message: "Enter the employee ID for the intern",
    name: "id",
    validate: function (num) {
        const numbers = /^[0-9]+$/.test(num);
        if(numbers) {
            return true;
        }
        return 'Please enter a valid ID number that only includes numbers'
    }
},
{
    type: 'input',
    name: 'school',
    message: "Please enter the intern's school"
}];

function start() {
    // starting function
    managerInfo();

}
function managerInfo() {
    inquirer.prompt(managerPrompt).then(managerBuild => {
        let manager = new Manager(managerBuild.name, managerBuild.id, managerBuild.email, managerBuild.officeNumber);
        teamMembersArray.push(manager);
        teamSizeInfo();
    });
}

function teamSizeInfo() {
    inquirer.prompt(endManagerPrompt).then((teamSize) => {
        if(teamSize.teamSize == "Yes") {
            teamMember();
        }
        else {
            createTeamPage(teamMembersArray);
        }
    });
}

function teamMember() {
    inquirer.prompt(teamMemberRolePick).then((teamrole) => {
		if (teamrole.teamMemberRole === 'Engineer') {
			inquirer.prompt(engineerPrompt).then((engineerBuild) => {
				let engineer = new Engineer(engineerBuild.name, engineerBuild.id, engineerBuild.email, engineerBuild.github);
				teamMembersArray.push(engineer);
                teamSizeInfo();
			});
		} else if (teamrole.teamMemberRole === 'Intern') {
			inquirer.prompt(internPrompt).then((internBuild) => {
				let intern = new Intern(internBuild.name, internBuild.id, internBuild.email, internBuild.school);
				teamMembersArray.push(intern);
                teamSizeInfo();
			});
		}
	});
}



function createEmployee(employees) {
    var htmlCards = ``
    employees.forEach(element => {
        htmlCards += `
        <div class="card m-4" style="width: 18rem;">
            <div class="card-body text-white bg-secondary mb-3">
            <h4 class="card-title fw-bold">${element.getName()}</h5>
            <p class="card-text fst-italic"> ${element.getRole()} </p>
            </div>
            <ul class="list-group list-group-flush bg-light m-3 ">
            <li class="list-group-item bg-light"> Email: <a href="mailto:${element.getEmail()}" class="card-link"> ${element.getEmail()}</a></li>
            <li class="list-group-item bg-light"> ID: ${element.getId()} </li>
        `
        switch (element.getRole()) {
            case 'Manager':
                htmlCards += `
                <li class="list-group-item bg-light"> Office Number: ${element.getOfficeNumber()}  </li>
                `
                break;
        
            case 'Engineer':
                htmlCards += `
                <li class="list-group-item bg-light"> GitHub: <a href="https://github.com/${element.getGithub()}" target="_blank"> ${element.getGithub()} </a> </li>
                `
                break;

            case 'Intern':
                htmlCards += `
                <li class="list-group-item bg-light"> School: ${element.getSchool()} </li>
                `
                break;
        }

        htmlCards += `
            </ul>
        </div>`;
    });
    return htmlCards;
}


function generateHTML(employees){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <header>
        <nav class="navbar navbar-dark bg-primary">
            <div class="container-fluid justify-content-center">
            <span class="m-4  h1 ">Team Profiles</span>
            </div>
        </nav>
        </header>

        <div class="container mt-4 d-flex flex-row flex-wrap justify-content-center text-center"> 
        ${createEmployee(employees)}
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    </body>
    </html>`
}

function createTeamPage(data) {
    fs.writeFile('./dist/team.html', generateHTML(data), (err) =>   
    err ? console.error(err) : console.log('Page created successfully!'))
    };

start();