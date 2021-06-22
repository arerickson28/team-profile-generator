const inquirer = require("inquirer") ;
const fs = require("fs") ;
const Employee = require("./employee") ;
const Manager = require("./manager") ;
const Engineer = require("./engineer") ;
const Intern = require("./intern") ;
const generateHTML = require("./generateHTML") ;

// let myEngineer = new Engineer("Rhyce", "47", "a.r.erickson.28@gmail.com", "arerickson28") ;

// myEngineer.getRole() ;

let data = [];

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => 
    err ? console.log(err) : console.log("Successfully created README.md"))
}


function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter manager name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager email"
        },
        {
            type: "input",
        name: "officenumber",
        message: "Enter manager office number"
        }
    ]).then((res) =>{
        // console.log(res)
        let manager = new Manager(res.name, res.id, res.email, res.officenumber) ;
        // console.log(manager)
        data.push(manager)
        console.log(data)
        createNew()
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter engineer name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "Enter engineer email"
        },
        {
            type: "input",
        name: "github",
        message: "Enter engineer github"
        }
    ]).then((res) =>{
        // console.log(res)
        let engineer = new Engineer(res.name, res.id, res.email, res.github) ;
        // console.log(engineer)
        data.push(engineer) ;
        console.log(data)
        createNew()
    })
}


function addIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter intern name"
        },
        {
            type: "input",
            name: "id",
            message: "Enter employee ID"
        },
        {
            type: "input",
            name: "email",
            message: "Enter intern email"
        },
        {
            type: "input",
        name: "school",
        message: "Enter intern school"
        }
    ]).then((res) =>{
        // console.log(res)
        let intern = new Intern(res.name, res.id, res.email, res.school) ;
        // console.log(engineer)
        data.push(intern)
        console.log(data)
        createNew()
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "teamMember",
            message: "Which type of employee would you like to add?",
            choices: ["manager", "engineer", "intern"]
        }

    ]).then((choice) => {
        switch(choice.teamMember) {
            case "manager":
                addManager()
                break
            case "engineer":
                addEngineer()
                break
            case "intern":
                addIntern()
                break
        }
    })
}

function createNew() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "choice",
            message: "Add new employee?"
        }
    ]).then((res) => {
        if (res.choice) {
            console.log("You chose to add another employee") ;
            addEmployee() ;
        }
        else {
            console.log("You chose NOT to add another employee") ;
            writeToFile("team.html", generateHTML(data))
        }
    })
}




createNew() ;