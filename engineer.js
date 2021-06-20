const Employee = require("./employee.js") ;

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.name = name ;
        this.id = id ;
        this.email = email ;
        this.github = github ;
    }

    getGithub() {
        console.log(this.github) ;
    }

    getRole() {
        super.getRole() ;
        console.log("Engineer") ;
    }

}

module.exports = Engineer ;