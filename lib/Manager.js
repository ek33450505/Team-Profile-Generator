const Employee = require('./Employee');

// use inheridence to extend employee properties into manager 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
       super (name, id, email);

        this.officeNumber = officeNumber;
    }
    // getRole() => Overridden to return 'manager'
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;