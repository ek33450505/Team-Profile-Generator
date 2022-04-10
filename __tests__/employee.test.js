const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Ed', 3470384, 'ek33450505@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});