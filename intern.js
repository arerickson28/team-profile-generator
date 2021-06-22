const Employee = require("./employee.js") ;

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.name = name ;
        this.id = id ;
        this.email = email ;
        this.school = school ;
    }

    getSchool() {
        console.log(this.school)
    }

    getRole() {
        super.getRole() 
        console.log("Intern") ;
    }
}

module.exports = Intern