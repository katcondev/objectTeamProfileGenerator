const Manager = require('../lib/manager.js')

jest.mock('../lib/manager.js');

console.log(new Manager());

test('create an manager object', () => {
    const manager = new Manager('Kat', 22, 'kat.contreras@gmail.com', 4089864604);
  
    expect(manager.officeNumber).toEqual(expect.any(Number));
   
});