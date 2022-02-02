const Employee = require('../lib/employee.js')

jest.mock('../lib/employee.js');

console.log(new Employee());

test('create an employee object', () => {
    const employee = new Employee('Kat', 22, 'kat.contreras@gmail.com');
  
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Kat', 22, 'kat.contreras@gmail.com');

    expect(employee.title).toEqual("Employee");
}); 
