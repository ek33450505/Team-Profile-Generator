const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./src/generate-site');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// use this to store all data for Employees 
const teamArray = [];

// manager
const addManager = () => {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is your managers name? (Required)',
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log('Please enter a name for the manager!');
                  return false;
              }
          }  
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers id number? (Required)',
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log('You need to enter a valid id number!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your managers email address (Required)',
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('You need to enter a valid email address!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your managers office number?(Required)',
            validate: officeNumberInput => {
              if (officeNumberInput) {
                return true;
              } else {
                console.log('You need to enter an office number!');
                return false;
              }
            }
          }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); //pushes manager data to teamArray
        console.log(manager);
    })
};

// call to begin prompts
addManager()



