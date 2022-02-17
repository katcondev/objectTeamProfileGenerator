const Intern = require('../lib/intern.js')

jest.mock('../lib/intern.js');

console.log(new Intern());

test('create an intern object', () => {
    const intern = new Intern('Kat', 22, 'kat.contreras@gmail.com', 'UCLA');
  
    expect(intern.school).toEqual(expect.any(String));
   
});