const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./src/generate-site');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employeeArray = [];

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

        employeeArray.push(manager); // pushes manager data to Array
        console.log(manager); // remove after finializing questions
    })
};

const addEmployee = () => {
    //added from module 9 promptProject
    console.log(`
    =================
    Add a New Employee
    =================
    `);

      // If there's no 'projects' array property, create one
 
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'Please choose your next employees position',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is your employees name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for the employee!');
                    return false;
                }
            }  
          },
          {
              type: 'input',
              name: 'id',
              message: 'What is the employees id number? (Required)',
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
              message: 'What is your email email address (Required)',
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
              name: 'github',
              message: 'What is your Engineers github username? (Required)',
              // http://adilapapaya.com/docs/inquirer/ used this site to figure out how to ask the question or not ask it
              when: (input) => input.role === 'Engineer',
              validate: githubInput => {
                if (githubinput) {
                  return true;
                } else {
                  console.log('You need to enter a valid GitHub username!');
                  return false;
                }
              }
            },
                        {
              type: 'input',
              name: 'school',
              message: 'What school does your intern attend? (Required)',
              // http://adilapapaya.com/docs/inquirer/ used this site to figure out how to ask the question or not ask it
              when: (input) => input.role === 'Intern',
              validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log('You need to enter a school!');
                  return false;
                }
              }
            },
            {
                type: 'confirm',
                name: 'confirmAddEmployee',
                message: 'Would you like to add another employee?',
                default: false
            }
        ]);
      };

// call to begin prompts
addManager()
.then(addEmployee)





