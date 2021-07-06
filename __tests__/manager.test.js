const Manager = require("../manager.js") ;

describe("Manager", () => {
    describe("Initialization", () => {
        it ("Should create an object of the 'Manager' class", () => {
            const obj = new Manager("Rhyce", 28, "codingisfun@gmail.com", "5") ;
            
            expect(obj).toBeInstanceOf(Manager);
        });

        it ("Should return an object with a 'name' property", () => {
            const obj = new Manager("Rhyce", 28, "codingisfun@gmail.com", "5") ;

            expect("name" in obj).toEqual(true) ;
        });

        it ("Should return an object with an 'id' property", () => {
            const obj = new Manager("Rhyce", 28, "codingisfun@gmail.com", "5") ;

            expect("id" in obj).toEqual(true) ;
        });

        it ("Should return an object with an 'email' property", () => {
            const obj = new Manager("Rhyce", 28, "codingisfun@gmail.com", "5") ;

            expect("email" in obj).toEqual(true) ;
        });

        it ("Should return an object with an 'officenumber' property", () => {
            const obj = new Manager("Rhyce", 28, "codingisfun@gmail.com", "5") ;

            expect("officenumber" in obj).toEqual(true) ;
        });
    })

    describe("getName", () => {
        it ("Should return the 'name' property of object", () => {
            const obj = new Manager("Rhyce", 28, "codingisfun@gmail.com", "5") ;

            expect(obj.getName()).toEqual(obj.name) ;
        })
    })
       
    describe("getID", () => {
        it ("Should return the 'id' property of object", () => {
            const obj = new Manager("Rhyce", 28, "codingisfun@gmail.com", "5") ;

            expect(obj.getId()).toEqual(obj.id) ;
        })
    })

    describe("getEmail", () => {
        it ("Should return the 'email' property of object", () => {
            const obj = new Manager("Rhyce", 28, "codingisfun@gmail.com", "5") ;

            expect(obj.getEmail()).toEqual(obj.email) ;
        })
    })

    describe("getOfficeNumber", () => {
        it ("Should return the 'officenumber' property of object", () => {
            const obj = new Manager("Rhyce", 28, "codingisfun@gmail.com", "5") ;

            expect(obj.getOfficeNumber()).toEqual(obj.officenumber) ;
        })
    })

    describe("getRole", () => {
        it ("Should return the string 'employee'", () => {
            const obj = new Manager("Rhyce", 28, "codingisfun@gmail.com", "5") ;

            expect(obj.getRole()).toEqual("Manager");
        })
    })


})