const inquirer = require("inquirer");
const generateTeamPage = require("./src/page-template.js");
const { writeFile, copyFile } = require("./src/generate-site.js");

const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

const employees = [];

const addTeamMember = async () => {
  return inquirer
    .prompt([
      {
        message: "Enter team member's name",
        name: "name",
      },
      {
        type: "list",
        message: "Select team member's role",
        choices: ["Engineer", "Intern", "Manager"],
        name: "role",
      },
      {
        message: "Enter team member's id",
        name: "id",
      },
      {
        message: "Enter team member's email address",
        name: "email",
      },
      {
        message: `Enter team member's ${roleInfo}`,
        name: "roleInfo",
      },
      {
        type: "confirm",
        name: "moreMembers",
        message: "Would you like to add more team members?",
        default: false
      }
    ])
    .then(function ({ name, role, id, email }) {
      let roleInfo = "";
      if (role === "Engineer") {
        roleInfo = "GitHub username";
      } else if (role === "Intern") {
        roleInfo = "School name";
      } else {
        roleInfo = "Office phone number";
      }
    })
    .then(newMember => {
      employees.push(newMember);
      if (moreMembers === "yes") {
        addTeamMember();
      } else {
       return generateTeamPage(newMember);
      }
    })
    .then(pageHTML => {
      return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
      console.log(writeFileResponse);
      return copyFile();
    })
    .then(copyFileResponse => {
      console.log(copyFileResponse);
    })
    .catch(err => {
      console.log(err);
    })