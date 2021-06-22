const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");

function generateHTML(data) {
    
    console.log("In generate", data);
    data.forEach(element => {
        if (element instanceof Manager) {
            console.log("One is a manager");
        } else if (element instanceof Intern) {
            console.log("One is an intern");
        } else if (element instanceof Engineer) {
            console.log("One is an engineer")
        }
    });

    return "";
}


module.exports = generateHTML