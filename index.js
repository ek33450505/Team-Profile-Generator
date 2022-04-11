const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./src/generate-site');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

// Begin question about manager
const addManager = () => {
    return inquirer.prompt([
        {
            
        }
    ])
}



