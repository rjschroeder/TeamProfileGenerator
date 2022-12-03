//function to generate all of the HTML of the page
const generateHTML = teamArray => {
    //array that stores all components of the page until the end
    let page = [];

    //generates manager card
    const generateManagerHTML = manager => {
        return `
    <div id="card" class="col border rounded m-3 shadow">
        <div class="m-2 p-2 bg-primary rounded font-weight-bold text-center text-white" id="nopad">
            <p class="h2">${manager.getName()}</p>
            <p class="h6 text-light">Manager</p>
        </div>
        <div>
            <p class="border rounded bg-light">ID: ${manager.getID()}</p>
            <p class="border rounded bg-light">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></p>
            <p class="border rounded bg-light">Office Number: ${manager.getOfficeNumber()}</p>
        </div>
    </div>`;
    }

    //generates engineer card
    const generateEngineerHTML = engineer => {
        return `
    <div id="card" class="col border rounded m-3 shadow">
        <div class="m-2 p-2 bg-primary rounded font-weight-bold text-center text-white" id="nopad">
            <p class="h2">${engineer.getName()}</p>
            <p class="h6 text-light">Engineer</p>
        </div>
        <div>
            <p class="border rounded bg-light">ID: ${engineer.getID()}</p>
            <p class="border rounded bg-light">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></p>
            <p class="border rounded bg-light">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></p>
        </div>
    </div>`;
    }

    //generates intern card
    const generateInternHTML = intern => {
        return `
    <div id="card" class="col border rounded m-3 shadow">
        <div class="m-2 p-2 bg-primary rounded font-weight-bold text-center text-white" id="nopad">
            <p class="h2">${intern.getName()}</p>
            <p class="h6 text-light">Intern</p>
        </div>
        <div>
            <p class="border rounded bg-light">ID: ${intern.getID()}</p>
            <p class="border rounded bg-light">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</p>
            <p class="border rounded bg-light">School: ${intern.getSchool()}</p>
        </div>
    </div>`;
    }

    //adds the HTML header to the top of the page before any elements
    //ends right where elements would be appended onto parent div
    page.push(`<!DOCTYPE html>
<html lang="en"> 
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"/>
    <title>Team Profile Generator</title>
    </head>
    <body class="d-flex flex-column p-3">
    <div class="container-fluid">
        <p class="text-center p-3 text-white h1 font-weight-bold bg-danger">
        My Team
        </p>
    </div>
    <div id="cardsDiv">
        <div class="row row-cols-4 p-3 justify-content-md-center border rounded">
    `);

    //for each member in the passed in array of team members, generate respective HTML elements
    teamArray.forEach(element => {
        if(element.getRole() === "Manager"){
            page.push(generateManagerHTML(element));
        } else if (element.getRole() === "Engineer") {
            page.push(generateEngineerHTML(element));
        } else if (element.getRole() === "Intern") {
            page.push(generateInternHTML(element));
        } else {
            console.log("Error");
        }
    });
    //add the rest of the HTML after the card container
    page.push(`
       </div>
    </div>
  </body>
</html>`);
    //returns the elements as one string
    return page.join("");
}

module.exports = generateHTML;