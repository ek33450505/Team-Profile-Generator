const Employee = require('./Employee');

// use inheridence to extend employee properties into manager 
class Engineer extends Employee {
    constructor (name, id, email, github) {
       super (name, id, email);

        this.github = github;
    }

    gitHub() {
        return this.github;
    }
      // getRole() => Overridden to return 'manager'
      getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;


//In addition to Employee's properties and methods, engineer will also have:
    //github (GitHub username)

// getHub()

// getRole() => overridden to return 'Engineer'