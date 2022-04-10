//Employee must have the following:
    // name, id, email

function Employee(name, id, email = '') {
    this.name = name;
    this.id = id;
    this.email = email;
}

// getName()

//getId()

//getEmail()

//getRole() => returns 'Employee'


module.exports = Employee;