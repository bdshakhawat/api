class person {
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}
const heroPerson = new person("Hero","Alom",23000);
console.log(heroPerson);
const friendlyPerson = new person("Hero","Kalam",20000);
console.log(friendlyPerson);