const inquirer = require('inquirer');
const generateEmployees= require('./src/page-template');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
        // console.log(manager); // remove after finializing questions
    })
};

const employeeArray = [];

const addEmployee = () => {
    //added from module 9 promptProject
    console.log(`
    =================
    Add a New Employee
    =================
    `);

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
                if (githubInput) {
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
        ])
        
        .then(employeeData => {

          let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
          let employee;

          if (role === 'Engineer') {
            employee = new Engineer (name, id, email, github);

            // console.log(employee);

          } else if (role === 'Intern') {
            employee = new Intern (name, id, email, school);

            // console.log(employee);
          }

          employeeArray.push(employee)

          if (confirmAddEmployee) {
            return addEmployee(employeeArray);
          } else {
            return employeeArray;
          }
        })
      };

const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log('You have sucessfully assembled your team! Please check out your work in index.html')
    }
 })
};

// copying css file
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile('./src/style.css', './dist/style.css', err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true
        // message: 'Stylesheet created!'
      });
    });
  });
};


// call to begin prompts
addManager()
.then(addEmployee)
.then(employeeArray => {
  return generateEmployees(employeeArray);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.then(writeFileResponse => {
  console.log(writeFileResponse);
  return copyFile();
})
.then(copyFileResponse => {
  console.log(copyFileResponse);
})
.catch(err => {
  console.log(err);
});



