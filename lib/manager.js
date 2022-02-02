const Employee = require('./employee.js');

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {

        super(name, id, email);

        this.title = "Manager"
        this.officenumber = officeNumber;
    }
    
    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager; 


/* 
extends employee and adds

officeNumber
getRole() overridden to return manager

*/