const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const { writeFile, copyfile } = require('./src/generate-site.js');


const promptUser = () {
    return inquirer.prompt([
        {
            
        }
    ])
}

