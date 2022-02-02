const Manager = require('./employee.js');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        super(name, id, email);

        this.officenumber = officeNumber;
    }

    getOfficeNumber(){
        return this.offficeNumber
    }
    getRole() {
        return 'Manager'
    }
}






/* 
extends employee and adds

officeNumber
getRole() overridden to return manager

*/