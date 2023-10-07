// in this code we will be revisiting all the codes learned earlier to check where the skill lies
//how to declare variables

let firstName: string = "John";
console.log(firstName);

firstName = "Doe";
console.log(firstName);

//hoisting 



// const result = sumFunc(1,2);
// console.log(result);

// function sumFunc(a, b)
// {
//     return a + b;
// }
// let a = 1;
// let b = 2;

const sumConst = (a: number, b: number) => a + b;

const result2 = sumConst(1,2);
console.log(`Result : ${result2}`);

//block scope variables

if(true)
{
    let blockVariable = 10;
    console.log(`Inside Block Scope: ${blockVariable}`);
}

// console.log(`Outside Block Scope : ${blockVariable}`)

//function level scope

function greet()
{
    const functionVariable = "Hello World";
    console.log(`Inside Function Scope: ${functionVariable}`);
}

greet();
// console.log(`Outside Function Scope: ${functionVariable}`)

//global level scope

let globalVariable = "I am Global";
function sayHello() {
    console.log(globalVariable);
}
globalVariable = "You Are Not"
sayHello();