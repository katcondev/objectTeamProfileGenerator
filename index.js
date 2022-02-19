const inquirer = require("inquirer");
const fs = require("fs")
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");

const employees = [];

function addMember() {
    inquirer.prompt([{
        message: "Enter team member's name",
        name: "name"
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: [
            "Engineer",
            "Intern",
            "Manager"
        ],
        name: "role"
    },
    {
        message: "Enter team member's id",
        name: "id"
    },
    {
        message: "Enter team member's email address",
        name: "email"
    }])
    .then(function({name, role, id, email}) {
        let roleInfo = "";
        if (role === "Engineer") {
            roleInfo = "GitHub username";
        } else if (role === "Intern") {
            roleInfo = "school name";
        } else {
            roleInfo = "office phone number";
        }
        inquirer.prompt([{
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo"
        },
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: [
                "yes",
                "no"
            ],
            name: "moreMembers"
        }])
        .then(function({roleInfo, moreMembers}) {
            let newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, roleInfo);
            } else if (role === "Intern") {
                newMember = new Intern(name, id, email, roleInfo);
            } else {
                newMember = new Manager(name, id, email, roleInfo);
            }
            employees.push(newMember);
            addHtml(newMember)
            .then(function() {
                if (moreMembers === "yes") {
                    addMember();
                } else {
                    finishHtml();
                }
            });
            
        });
    });
}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" type='text/css' href="assets/css/styleTW.css">
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-sky-50">
    <header class="relative h-32 bg-sky-500">
      <div class="absolute inset-0 flex items-center justify-center">
         <h1 class="text-3xl text-center font-roboto">My Team</h1>
      </div> 
   </header>

     <main class="container mx-auto mt-5 border-0">     
    
        <div class="flex-column grid sm:grid-cols-2 md:grid-cols-3 gap-4" >`;
    fs.writeFile("./dist/index.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("Let's get started!");
}

function addHtml(member) {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = "";
        if (role === "Engineer") {
            const gitHub = member.getGithub();
            data = `<div class="max-w-md rounded shadow-md shadow-indigo">       
            <div class="p-4 bg-sky-100">
              <h1 class="text-gray-dark text-xl md:text-3xl font-roboto mt-5 mb-5">${name} </h1>
                  <p class="mt-2 text-indigo-500 sm:text-l">${role}</p>
                  <p class="mt-2 sm:text-l"><strong>ID:</strong> ${id} </p>
                  <p class="mt-2 sm:text-l"><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
                  <p class="mt-2 sm:text-l"><strong>Github:</strong> ${gitHub}</p>
            </div>  
            </div>`;
        } else if (role === "Intern") {
            const school = member.getSchool();
            data = `<div class="max-w-md rounded shadow-md shadow-indigo">       
            <div class="p-4 bg-sky-100">
              <h1 class="text-gray-dark text-xl md:text-3xl font-roboto mt-5 mb-5">${name} </h1>
                  <p class="mt-2 text-indigo-500 sm:text-l">${role}</p>
                  <p class="mt-2 sm:text-l"><strong>ID:</strong> ${id} </p>
                  <p class="mt-2 sm:text-l"><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
                  <p class="mt-2 sm:text-l"><strong>School:</strong> ${school}</p>
            </div>  
            </div>`;
        } else {
            const phone = member.getOfficeNumber();
            data = `<div class="max-w-md rounded shadow-md shadow-indigo">       
            <div class="p-4 bg-sky-100">
              <h1 class="text-gray-dark text-xl md:text-3xl font-roboto mt-5 mb-5">${name} </h1>
                  <p class="mt-2 text-indigo-500 sm:text-l">${role}</p>
                  <p class="mt-2 sm:text-l"><strong>ID:</strong> ${id} </p>
                  <p class="mt-2 sm:text-l"><strong>E-mail:</strong> <a href="mailto:${email}">${email}</a></p>
                  <p class="mt-2 sm:text-l"><strong>Office Number:</strong> ${phone}</p>
            </div>  
            </div>`
        }
        console.log("adding team member");
        fs.appendFile("./dist/index.html", data, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
    });    
}

function finishHtml() {
    const html = `  </div>
    </main>
</body>
</html>`;

    fs.appendFile("./dist/index.html", html, function (err) {
        if (err) {
            console.log(err);
        };
    });
    console.log("end");
}

startHtml();
addMember();