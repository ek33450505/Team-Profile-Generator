const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Ed', 3470284, 'ek33450505@gmail', 55);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get employee role', () => {
   const manager = new Manager('Ed', 3470284, 'ek33450505@gmail');

   expect(manager.getRole()).toEqual('Manager');
});