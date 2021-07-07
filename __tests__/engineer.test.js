const Engineer = require("../lib/engineer") ;

describe("Engineer", () => {
    describe("Initialization", () => {
        it ("Should create an object of the 'Engineer' class", () => {
            const obj = new Engineer("Rhyce", 28, "codingisfun@gmail.com", "aerhyce") ;
            
            expect(obj).toBeInstanceOf(Engineer);
        });

        it ("Should return an object with a 'name' property", () => {
            const obj = new Engineer("Rhyce", 28, "codingisfun@gmail.com", "aerhyce") ;

            expect("name" in obj).toEqual(true) ;
        });

        it ("Should return an object with an 'id' property", () => {
            const obj = new Engineer("Rhyce", 28, "codingisfun@gmail.com", "aerhyce") ;

            expect("id" in obj).toEqual(true) ;
        });

        it ("Should return an object with an 'email' property", () => {
            const obj = new Engineer("Rhyce", 28, "codingisfun@gmail.com", "aerhyce") ;

            expect("email" in obj).toEqual(true) ;
        });

        it ("Should return an object with a 'github' property", () => {
            const obj = new Engineer("Rhyce", 28, "codingisfun@gmail.com", "aerhyce") ;

            expect("github" in obj).toEqual(true) ;
        });
    })

    describe("getName", () => {
        it ("Should return the 'name' property of object", () => {
            const obj = new Engineer("Rhyce", 28, "codingisfun@gmail.com", "aerhyce") ;

            expect(obj.getName()).toEqual(obj.name) ;
        })
    })
       
    describe("getID", () => {
        it ("Should return the 'id' property of object", () => {
            const obj = new Engineer("Rhyce", 28, "codingisfun@gmail.com", "aerhyce") ;

            expect(obj.getId()).toEqual(obj.id) ;
        })
    })

    describe("getEmail", () => {
        it ("Should return the 'email' property of object", () => {
            const obj = new Engineer("Rhyce", 28, "codingisfun@gmail.com", "aerhyce") ;

            expect(obj.getEmail()).toEqual(obj.email) ;
        })
    })

    describe("getGithub", () => {
        it ("Should return the 'github' property of object", () => {
            const obj = new Engineer("Rhyce", 28, "codingisfun@gmail.com", "aerhyce") ;

            expect(obj.getGithub()).toEqual(obj.github) ;
        })
    })

    describe("getRole", () => {
        it ("Should return the string 'employee'", () => {
            const obj = new Engineer("Rhyce", 28, "codingisfun@gmail.com", "aerhyce") ;

            expect(obj.getRole()).toEqual("Engineer");
        })
    })


})