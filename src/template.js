const generateHTML = teamArray => {
    let page = [];

    const generateManagerHTML = manager => {
        
    }

    const generateEngineerHTML = engineer => {

    }

    const generateInternHTML = intern => {

    }
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
    page.push(`       </div>
    </div>
  </body>
</html>`);
    return page.join("");
}