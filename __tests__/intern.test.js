const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('Ed', 3470284, 'ek33450505@gmail', 'OSU');
    
    expect(intern.school).toEqual(expect.any(String));
});

test('gets a interns school name', () => {
    const intern = new Intern('Ed', '3470284', 'ek33450505@gmail.com', 'OSU');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('get employee role', () => {
    const intern = new Intern('Ed', 3470284, 'ek33450505@gmail', 'OSU');
 
    expect(intern.getRole()).toEqual('Intern'); 
 });