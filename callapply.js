const normalPerson= {
    firstName: 'Rahim',
    lastName :'Uddin' ,
    salary : 15000,
    getFullName:  function(){
       console.log (this.firstName, this.lastName); 

    },
    chargeBill : function(amount){
        console.log(this);
        this.salary = this.salary - amount;
        return this.salary;
    }
}
const heroPerson = {
    firstName: "Hero",
    lastName: "Alam",
    salary: 20000
}
const friendlyPerson = {
    firstName: "Hero",
    lastName: "Balam",
    salary: 30000
}
// normalPerson.chargeBill();
const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
heroBillCharge(1000);
heroBillCharge(2000);
console.log(heroPerson.salary);
console.log(normalPerson.salary);
const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
friendlyBillCharge(1000);