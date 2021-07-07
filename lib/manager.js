const Employee = require("./employee.js") ;

class Manager extends Employee {
    constructor(name, id, email, officenumber) {
        super(name, id, email)
        this.name = name ;
        this.id = id ;
        this.email = email ;
        this.officenumber = officenumber ;
    }

    getOfficeNumber() {
        return this.officenumber ;
    }

    getRole() {
        super.getRole() 
        return "Manager"
    }

}

module.exports = Manager