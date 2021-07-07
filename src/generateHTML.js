const Engineer = require("../lib/engineer");
const Intern = require("../lib/intern");
const Manager = require("../lib/manager");








function generateHTML(data) {

    let teamHTML = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
            <title>My Team</title>
        </head>
        <body>
            <style>

                #heading {
                    background-color: coral ;;
                    height: 150px ;
                    display: flex ;
                    justify-content: center ;
                    align-items: center ;
                }

                h1 {
                    color: white ;
                }

                #teamCards {
                    display: flex ;
                    justify-content: center ;
                    flex-wrap: wrap ;
                }

                .card {
                    margin: 25px ;
                    background-color: lightslategray;
                }

                .card-header {
                    height: 100px ;
                    background-color: cornflowerblue;
                    color: white ;
                    font-size: x-large;
                }

                .manager::before {
                content: "☕"
                }

                .intern::before {
                content: "🎓"
                }

                .engineer::before {
                content: "👓"
                }

                .padding {
                margin-top: 25px ;
                margin-bottom: 25px ;
                margin-left: 10px ;
                margin-right: 10px ;
                }

            </style>

            <div id="heading">
                <h1>My Team</h1>
            </div>
            

        <section id="teamCards">`


        function makeEmployeeCard(name, id, email, role, pClass, extraType, extra) {
            let card =  `<div class="card" style="width: 18rem;">
            <div class="card-header">
              ${name}
              <br>
              <span class="${pClass}"> ${role}</span>
            </div>
            <ul class="list-group list-group-flush padding">
              <li class="list-group-item">ID: <span>${id}</span></li>
              <li class="list-group-item">Email: <span>${email}</span></li>
              <li class="list-group-item"><span>${extraType}: </span><span>${extra}</span></li>
            </ul>
          </div>`

          return card
        }

    console.log("In generate", data);
    data.forEach(element => {
        if (element instanceof Manager) {
            
            console.log("One is a manager");
            let pClass = "manager"
            let extraType = "Office Number"
            let card = makeEmployeeCard(element.getName(), element.getId(), element.getEmail(), element.getRole(), pClass, extraType, element.getOfficeNumber())

            teamHTML += card

        } else if (element instanceof Intern) {
            
            console.log("One is an intern");
            let pClass = "intern"
            let extraType = "School"
            let card = makeEmployeeCard(element.getName(), element.getId(), element.getEmail(), element.getRole(), pClass, extraType, element.getSchool())

            teamHTML += card

        } else if (element instanceof Engineer) {
          
            console.log("One is an engineer")
            let pClass = "engineer"
            let extraType = "Github"
            let card = makeEmployeeCard(element.getName(), element.getId(), element.getEmail(), element.getRole(), pClass, extraType, element.getGithub())

            teamHTML += card
        }
    });

    let lastBit = `</section>
    </body>
    </html>`

    teamHTML += lastBit

    return teamHTML;
}


module.exports = generateHTML