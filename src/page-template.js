const Employee = require("../lib/employee");

// create the manager section
const generateManager = function (manager) {
    return `<div class="max-w-md rounded shadow-md shadow-indigo">       
      <div class="p-4 bg-sky-100">
        <h1 class="text-gray-dark text-xl md:text-3xl font-roboto mt-5 mb-5">${manager.name} </h1>
            <p class="mt-2 text-indigo-500 sm:text-l">${manager.title}</p>
            <p class="mt-2 sm:text-l"><strong>ID:</strong> ${manager.id} </p>
            <p class="mt-2 sm:text-l"><strong>E-mail:</strong> ${manager.email} </p>
            <p class="mt-2 sm:text-l"><strong>Office Number:</strong> ${manager.officeNumber}</p>
      </div>  
    </div>
    `;
  };

  const generateEngineer = function (engineer) {
    return `<div class="max-w-md rounded shadow-md shadow-indigo">       
    <div class="p-4 bg-sky-100">
      <h1 class="text-gray-dark text-xl md:text-3xl font-roboto mt-5">${engineer.name}</h1>
          <p class="mt-2 text-indigo-500 sm:text-l">${engineer.title}</p>
          <p class="mt-2 sm:text-l"><strong>ID:</strong> ${engineer.id} </p>
          <p class="mt-2 sm:text-l"><strong>E-mail:</strong> ${engineer.email} </p>
          <p class="mt-2 sm:text-l"><strong>Github:</strong> ${engineer.github}</p>
    </div>  
  </div>
    `;
  };

  const generateIntern = function (intern) {
    return `<div class="max-w-md rounded shadow-md shadow-indigo">       
    <div class="p-4 bg-sky-100">
      <h1 class="text-gray-dark text-xl md:text-3xl font-roboto mt-5">${intern.name}  </h1>
        </br> 
          <p class="mt-2 text-indigo-500 sm:text-l">${intern.title}</p>
          <p class="mt-2 sm:text-l"><strong>ID:</strong> ${intern.id} </p>
          <p class="mt-2 sm:text-l"><strong>E-mail:</strong> ${intern.email} </p>
          <p class="mt-2 sm:text-l"><strong>School:</strong> ${intern.school}</p>
    </div>  
  </div>
    `;
  };

  generatePage = (data) => {

    pageArr = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.title; 
        
        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArr.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArr.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArr.push(internCard);
        }        
    }

 
 const employeeCards = pageArr.join('')

 
 const generateTeam = generateTeamPage(employeeCards); 
 return generateTeam;

}


const generateTeamPage = function (employeeCards) {   
  
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" type='text/css' href="styleTW.css">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-sky-50">
    <header class="relative h-32 bg-sky-500">
      <div class="absolute inset-0 flex items-center justify-center">
         <h1 class="text-3xl text-center font-roboto">My Team</h1>
      </div> 
   </header>

     <main class="container mx-auto mt-5 border-0">     
    
        <div class="flex-column grid sm:grid-cols-2 md:grid-cols-3 gap-4" >
            ${employeeCards}
        </div>
    </main>
</body>
</html>
    `;
  };

  module.exports = generatePage;