const fs = require("fs")


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
    console.log("Let's get started! The following set of prompts will walk you through generating a profile page for your team.");
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
    console.log("Your file has been generated! Go check the dist folder. Thanks!");
}

module.exports={startHtml, addHtml, finishHtml}