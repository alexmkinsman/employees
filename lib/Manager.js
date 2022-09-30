const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    findRole(){
        return 'Manager';
    }

    findOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;