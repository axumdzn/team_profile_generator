const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const generateTeam = require('./util/generateHtml');
const fs = require('fs');
let count = 0;
let team = [];


function startTeam() {
    inquirer.prompt([
        {
            name:'question',
            type: 'list',
            choices: ['Add a Engineer', 'Add a Intern', 'Make HTML']
        }
    ])
    .then(answers => {
        switch (answers.question) {
            case 'Add a Engineer':
                addEngineer();
                break;
            case 'Add a Intern':
                addIntern();
                break;
            default: fs.writeFileSync('index.html',generateTeam(team));
                break;
        }
    })
}
function addEngineer() {
    inquirer.prompt([{
        name: 'name',
        message: 'What is their name?',
        type:'input'
    },
    {
        name: 'id',
        message: 'What is their id?',
        type:'number'
    },
    {
        name: 'email',
        message: 'What is their email?',
        type:'input'
    },
    {
        name: 'github',
        message: 'What is their GitHub username?',
        type:'input'
    },
    ])
    .then(answers => {
        team[count] = new Engineer(answers.name,answers.id,answers.email,answers.github);
        count++;
        startTeam();
    })
}

function addIntern() {
    inquirer.prompt([{
        name: 'name',
        message: 'What is their name?',
        type:'input'
    },
    {
        name: 'id',
        message: 'What is their id?',
        type:'number'
    },
    {
        name: 'email',
        message: 'What is their email?',
        type:'input'
    },
    {
        name: 'school',
        message: 'What is their school name?',
        type:'input'
    },
    ])
    .then(answers => {
        team[count] = new Intern(answers.name,answers.id,answers.email,answers.school);
        count++;
        startTeam();
    })
}

function addManager() {
    inquirer.prompt([{
        name: 'name',
        message: 'What is your manager name?',
        type:'input'
    },
    {
        name: 'id',
        message: 'What is their id?',
        type:'number'
    },
    {
        name: 'email',
        message: 'What is their email?',
        type:'input'
    },
    {
        name: 'office',
        message: 'What is their office number?',
        type:'number'
    },
    ])
    .then(answers => {
        team[count] = new Manager(answers.name,answers.id,answers.email,answers.office);
        count++;
        startTeam();
    })
}



addManager();