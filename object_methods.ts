let user1 = {
    name: "John",
    age:30,
    email: "john@gmail.com",
    sayHi(){
        console.log(`Hello I am ${this.name}`)
    }
}

user1.sayHi();

let user2 = {...user1};
let user3 = {...user2};
user2.name = "Royce";
user3.name = "Micheal";
user2.sayHi();
user3.sayHi()
console.log(user2);
console.log(user3);

// user2.email = "royce@gmail.com";

// console.log(user2);

// user1.sayHi = function()
// {
//     console.log("Hey Hi!");
// }
// user1.sayHi();

let admin = user1;
// user1 = null;
admin.name = "Jack";
admin.sayHi();

let customer1 = {
    name: "John"
}

let customer2 = {
    name: "Alice"
}

function sayHello()
{
    console.log(`This is ${this.name}`)
}

customer1.f = sayHello;
customer2.f = sayHello;

customer1.f();
customer2.f();

//arrow functions with this keyword

let another = {
    firstName: "Khan",
    sayHi()
    {
        let arrow = ()=> console.log(`Inside Arrow Function: ${this.firstName}`);
        arrow();
    }
    // sayHi: ()=> console.log(`Using this keyword: ${this.firstName}`)
}

another.sayHi()

//ladder examples

let ladder = {
    step: 0,
    up(){
        this.step++
    },
    down(){
        this.step--
    },
    showStep: function(){
        console.log(this.step);
    }
};

ladder.showStep()
ladder.up()
ladder.up()
ladder.up()
ladder.showStep()
ladder.down()
ladder.showStep()
