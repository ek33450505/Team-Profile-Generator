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
      // getRole() => Overridden to return 'engineer'
      getRole() {
        return 'Engineer';
    }
}

module.exports = Engineer;