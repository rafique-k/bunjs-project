// in this code we will be revisiting all the codes learned earlier to check where the skill lies
//how to declare variables

// let firstName: string = "John";
// console.log(firstName);

// firstName = "Doe";
// console.log(firstName);

//hoisting 



// const result = sumFunc(1,2);
// console.log(result);

// function sumFunc(a, b)
// {
//     return a + b;
// }
// let a = 1;
// let b = 2;

// const sumConst = (a: number, b: number) => a + b;

// const result2 = sumConst(1,2);
// console.log(`Result : ${result2}`);

//block scope variables

// if(true)
// {
//     let blockVariable = 10;
//     console.log(`Inside Block Scope: ${blockVariable}`);
// }

// console.log(`Outside Block Scope : ${blockVariable}`)

//function level scope

// function greet()
// {
//     const functionVariable = "Hello World";
//     console.log(`Inside Function Scope: ${functionVariable}`);
// }

// greet();
// console.log(`Outside Function Scope: ${functionVariable}`)

//global level scope

// let globalVariable = "I am Global";
// function sayHello() {
//     console.log(globalVariable);
// }
// globalVariable = "You Are Not"
// sayHello();

//built in objects
// const data = {
//     name: "John",
//     age: 30,
//     isActive: true
// }
// console.log(data);
// const jsonString = JSON.stringify(data);
// console.log(jsonString);

// const valueType = typeof data;
// console.log(typeof sayHello);

// let count = 0;
// while (count < 1)
// {
//     console.log(`Count: ${count}`);
//     count++
// }

// let firstName = "JohnDoe"
// for(let i = 0; i < firstName.length; i++)
// {
//     console.log(`Iteration: ${i}`)
// }

// const someNumbers = [1,2,3,4,5,6,7]
// for(let i = 0; i < someNumbers.length; i++)
// {
//     console.log(`Work Till someNumbers: ${i}`)
// }

// let num1 = 0;
// do {
//     console.log(`Value Of num1: ${num1}`);
//     num1++
// }
// while(num1 < 0);

//while loop examples

const correctNumber = 7;
let playerGuess: number;
let attempts = 0;

while(true)
{
    playerGuess = parseInt(prompt("Guess the number"));
    // let playerGuess = parseInt(takeGuess);
    if(playerGuess === correctNumber)
    {
        console.log(`Congratulations! You guessed the correct number: ${correctNumber}`);
        attempts++
        break;
    }
    else
    {
        console.log(`Sorry, that's not the correct number. Try again.`);
        attempts++
    }
}
console.log(`You took total ${attempts} attempts to guess the number`);

