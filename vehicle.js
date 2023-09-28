// function vehicle(name,maker,engine)
// {
//     this.name = name;
//     this.maker = maker;
//     this.engine = engine;
// }


// let car = new vehicle('GT','BMW','2500cc');

// console.log(car);
// console.log(car.name);
// console.log(`Car Engine: ${car.engine}`);
// console.log(`Car Maker: ${car.maker}`);

// let user = {
//     name: "Rafique Khan",
//     age: 30
// }

// user.sayHi = ()=> {
//     console.log(`Hello From Mr. ${user.name}`)
// };

// user.sayHi();

// let user = {
//     firstName: "Rafique",
//     sayHi(){
//         let arrow = ()=> console.log(this.firstName);
//             arrow();
//     }
// };

// user.sayHi();

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(){
        return person.firstName + " " + person.lastName;
    }
};

console.log(person.fullName());


