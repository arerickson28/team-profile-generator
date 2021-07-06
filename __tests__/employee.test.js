const Employee = require("../employee") ;

describe("Employee", () => {
    describe("Initialization", () => {
        it ("Should create an object of the 'Employee' class", () => {
            const obj = new Employee("Rhyce", 28, "codingisfun@gmail.com") ;
            
            expect(obj).toBeInstanceOf(Employee);
        });

        it ("Should return an object with a 'name' property", () => {
            const obj = new Employee("Rhyce", 28, "codingisfun@gmail.com") ;

            expect("name" in obj).toEqual(true) ;
        });

        it ("Should return an object with an 'id' property", () => {
            const obj = new Employee("Rhyce", 28, "codingisfun@gmail.com") ;

            expect("id" in obj).toEqual(true) ;
        });

        it ("Should return an object with an 'email' property", () => {
            const obj = new Employee("Rhyce", 28, "codingisfun@gmail.com") ;

            expect("email" in obj).toEqual(true) ;
        });
    })

    describe("getName", () => {
        it ("Should return the 'name' property of object", () => {
            const obj = new Employee("Rhyce", 28, "codingisfun@gmail.com") ;

            expect(obj.getName()).toEqual(obj.name) ;
        })
    })
       
    describe("getID", () => {
        it ("Should return the 'id' property of object", () => {
            const obj = new Employee("Rhyce", 28, "codingisfun@gmail.com") ;

            expect(obj.getId()).toEqual(obj.id) ;
        })
    })

    describe("getEmail", () => {
        it ("Should return the 'email' property of object", () => {
            const obj = new Employee("Rhyce", 28, "codingisfun@gmail.com") ;

            expect(obj.getEmail()).toEqual(obj.email) ;
        })
    })

    describe("getRole", () => {
        it ("Should return the string 'employee'", () => {
            const obj = new Employee("Rhyce", 28, "codingisfun@gmail.com") ;

            expect(obj.getRole()).toEqual("Employee");
        })
    })


})