const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer('Ed', 3470284, 'ek33450505@gmail', 'ek33450505');
    
    expect(engineer.github).toEqual(expect.any(String));
});

test('get engineers github username', () => {
    const engineer = new Engineer('Ed', '3470284', 'ek33450505@gmail.com', 'ek33450505');

    // used https://github.com/sapegin/jest-cheat-sheet/blob/master/Readme.md#strings
    // Add to credits section in README
    expect(engineer.gitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get employee role', () => {
    const engineer = new Engineer('Ed', 3470284, 'ek33450505@gmail', 'ek33450505');
 
    expect(engineer.getRole()).toEqual('Engineer'); 
 });