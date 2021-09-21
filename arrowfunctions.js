//Arrow functions are a syntatically compact alternative
//to a regular function expression.

//can only be anonymous function, unnamed
const sum = (x,y) => {
    return x + y;
}

//Arrow functions have IMPLICIT return
const square = x => (
    x * x
)

const divide = (x,y) => x / y

console.log(divide(7,8));

const makeCardERROR = () => { 
   // suit: 'hearts', val : 3
    //this will recognize it as a function body
    //instead of object literal
 }

 const makeCardCORRECT = () => ({
     suit: 'hearts',
     val: 3
 });

 
 ////////////////
 const invoices = [
    {
        client: "Billy",
        amount: 400.49,
        hasPaid: false
    },
    {
        client: "Hedwig",
        amount: 350.99,
        hasPaid: false
    },
    {
        client: "PizzaHead",
        amount: 135.50,
        hasPaid: true
    },
    {
        client: "Marty",
        amount: 79.35,
        hasPaid: false
    },
    {
        client: "Grizzly",
        amount: 99.99,
        hasPaid: true
    }
 ]

//  const stillOwed = invoices
//     .filter(function(invoice){
//         return !invoice.hasPaid;
//     })
//     .reduce(function (total,invoice){
//         return total + invoice.amount;
//     }, 0);

const stillOwed = invoices
 .filter(i=> !i.hasPaid)
 .reduce((accumulator, eachElement) =>
    accumulator + eachElement.amount, 0)//0 is the initial value for reduce

const person = {
    name:"Bilbo",
    sayHi: function(){
        console.log(this.name,'says hi!');
    }
}
person.sayHi();


