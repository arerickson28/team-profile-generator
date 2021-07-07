const Intern = require("../lib/intern.js") ;

describe("Intern", () => {
    describe("Initialization", () => {
        it ("Should create an object of the 'Intern' class", () => {
            const obj = new Intern("Rhyce", 28, "codingisfun@gmail.com", "Gr8 University") ;
            
            expect(obj).toBeInstanceOf(Intern);
        });

        it ("Should return an object with a 'name' property", () => {
            const obj = new Intern("Rhyce", 28, "codingisfun@gmail.com", "Gr8 University") ;

            expect("name" in obj).toEqual(true) ;
        });

        it ("Should return an object with an 'id' property", () => {
            const obj = new Intern("Rhyce", 28, "codingisfun@gmail.com", "Gr8 University") ;

            expect("id" in obj).toEqual(true) ;
        });

        it ("Should return an object with an 'email' property", () => {
            const obj = new Intern("Rhyce", 28, "codingisfun@gmail.com", "Gr8 University") ;

            expect("email" in obj).toEqual(true) ;
        });

        it ("Should return an object with a 'school' property", () => {
            const obj = new Intern("Rhyce", 28, "codingisfun@gmail.com", "Gr8 University") ;

            expect("school" in obj).toEqual(true) ;
        });
    })

    describe("getName", () => {
        it ("Should return the 'name' property of object", () => {
            const obj = new Intern("Rhyce", 28, "codingisfun@gmail.com", "Gr8 University") ;

            expect(obj.getName()).toEqual(obj.name) ;
        })
    })
       
    describe("getID", () => {
        it ("Should return the 'id' property of object", () => {
            const obj = new Intern("Rhyce", 28, "codingisfun@gmail.com", "Gr8 University") ;

            expect(obj.getId()).toEqual(obj.id) ;
        })
    })

    describe("getEmail", () => {
        it ("Should return the 'email' property of object", () => {
            const obj = new Intern("Rhyce", 28, "codingisfun@gmail.com", "Gr8 University") ;

            expect(obj.getEmail()).toEqual(obj.email) ;
        })
    })

    describe("getSchool", () => {
        it ("Should return the 'github' property of object", () => {
            const obj = new Intern("Rhyce", 28, "codingisfun@gmail.com", "Gr8 University") ;

            expect(obj.getSchool()).toEqual(obj.school) ;
        })
    })

    describe("getRole", () => {
        it ("Should return the string 'employee'", () => {
            const obj = new Intern("Rhyce", 28, "codingisfun@gmail.com", "Gr8 University") ;

            expect(obj.getRole()).toEqual("Intern");
        })
    })


})