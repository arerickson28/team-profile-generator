const inquirer = require("inquirer") ;
const fs = require("fs") ;
const Employee = require("./employee") ;
const Manager = require("./manager") ;
const Engineer = require("./engineer") ;
const Inter = require("./intern") ;

let myEngineer = new Engineer("Rhyce", "47", "a.r.erickson.28@gmail.com", "arerickson28") ;

myEngineer.getRole() ;