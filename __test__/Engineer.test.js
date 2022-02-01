const Engineer = require('../lib/engineer.js')

jest.mock('../lib/engineer.js');

console.log(new Engineer());

test('create an engineer object', () => {
    const engineer = new Engineer('Kat', 22, 'kat.contreras@gmail.com', 'katcontrerasdev');
  
    expect(engineer.github).toEqual(expect.any(String));
   
});

