const inquirer = require('inquirer');
const fs = require('fs');

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


const managerPrompt = [{
    type: "input",
    message: "Welcome to Team Building. Please enter the name of the manager?",
    name: "name"
}, {
    type: "input",
    message: "Enter the employee ID for the manager?",
    name: "id"
}, {
    type: "input",
    message: "Enter the office number for the manager?",
    name: "officeNumber"
}, {
    type: "input",
    message: "What is the manager's email?",
    name: "email"
}];

const endManagerPrompt = {
    type: 'list',
	message: 'Would you like to add another team member to this team? Select Yes to add an Engineer or Intern. Select No if no additional team members need to be added.',
	choices: ['Yes', 'No'],
	name: 'teamSize',
};

const teamMemberRolePick = {
	type: 'list',
	message: 'Is this team member an Engineer or an Intern?',
	choices: ['Engineer', 'Intern'],
	name: 'teamMemberRole',
};

const engineerPrompt = {
    type: 'input',
    message: "What is the Engineer's name?",
    name: 'engineerName',
},
{
    type: 'input',
    message: "What is the engineer's email?",
    name: "email",
}, 
{
    type: ''

}



