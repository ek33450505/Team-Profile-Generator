const Employee = require('./Employee');

// use inheridence to extend employee properties into intern 
class Intern extends Employee {
    constructor (name, id, email, school) {
       super (name, id, email);

        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    // getRole() => Overridden to return 'intern'
    getRole() {
        return 'Intern';
    }
}

module.exports = Intern;