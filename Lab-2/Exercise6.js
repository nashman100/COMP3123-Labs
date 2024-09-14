/*
Using ES6 syntax for class and subclass using extends to create a Sedan subclass which derives
from Car Class. The parameters for the Car class is the model and year. The parameters for the
subclass is the model, year and balance.

Use the super key word in the Sedan subclass to set the model and name in base Car
constructor.

const car = new Car('Pontiac Firebird', 1976);
console.log(car.details());

Subclass - extends Car super class
const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());

Output:
Model: Pontiac Firebird, Year: 1976
Volvo SD has a balance of $30000.00
*/

class Car{
    
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    details(){
        var detail ='Model: ' + this.model +  ', Year: ' + this.year;
        return detail;
    }

}

class Sedan extends Car{
    
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }

    info(){
        return this.model + ' has a balance of $' + this.balance.toFixed(2);
    }
}

const car = new Car('Pontiac Firebird', 1976);
console.log(car.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());