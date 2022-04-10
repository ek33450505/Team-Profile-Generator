const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates a employee object', () => {
    const employee = new Employee('Ed', 3470384, 'ek33450505@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Ed', 3470384, 'ek33450505@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee id', () => {
    const employee = new Employee('Ed', 3470384, 'ek33450505@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Ed', 3470384, 'ek33450505@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee role', () => {
    const employee = new Employee('Ed', 3470384, 'ek33450505@gmail.com');
    
    expect(employee.getRole()).toEqual('Employee'); // employee needed '' in order to pass test
});