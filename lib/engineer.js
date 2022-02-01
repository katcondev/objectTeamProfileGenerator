const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        
        super(name, id, email);
        
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }

};

module.exports = Engineer;



/* in addition from employee

github - github username
getGitHub()
getRole() 
*/