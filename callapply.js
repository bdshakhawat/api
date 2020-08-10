const normalPerson= {
    firstName: 'Rahim',
    lastName :'Uddin' ,
    salary : 15000,
    getFullName:  function(){
       console.log (this.firstName, this.lastName); 

    },
    chargeBill : function(amount, tax, tips){
        console.log(this);
        this.salary = this.salary - amount- tax - tips;
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
normalPerson.chargeBill.apply(friendlyPerson, [1000,200,50]);
console.log(friendlyPerson.salary);
// normalPerson.chargeBill.call(heroPerson, 1000,200,50);
// normalPerson.chargeBill.call(heroPerson, 1000,300,40);
// console.log(heroPerson.salary);
// normalPerson.chargeBill.call(friendlyPerson, 1000,200,50);
// normalPerson.chargeBill.call(friendlyPerson, 1000,300,40);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);
// normalPerson.chargeBill();
// const heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(1000);
// heroBillCharge(2000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);
// const friendlyBillCharge = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyBillCharge(1000);