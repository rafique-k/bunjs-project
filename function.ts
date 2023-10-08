let user:string = "Rafique"
function showMessage()
{
    let user:string = "Wasima";
    console.log(`Hello ${user}, Welcome`)
}
// console.log(user);
showMessage();

// let userInput:string = prompt("Enter Your Name");

// showMessage(userInput);
// showMessage(userInput);
// showMessage(userInput);

function greet(text:any)
{
    if(text === undefined)
    {
        text = "empty message"
    }
    console.log(text);
}

greet(undefined);

function welcome(another:string)
{
    another = another || "empty"
    console.log(another);
}

welcome("");
welcome("hello")

function showCount(count:any)
{
    console.log(count ?? "unknown");
}

showCount(1);
showCount("");
showCount(null);

//return example in function

let age:any = prompt('How Old are you?', '18');
function checkAge(age:any)
{
    if(age >= 18)
    {
        return true
    }
    else
    {
        return confirm ("Do you have permission from your parents?")
    }
}

if(checkAge(age))
{
    console.log("Access granted")
}
else
{
    console.log("Access denied");
}

//another way of function expressions
let sayHello = function (){
    console.log("Hello");
}

sayHello();

let sayBye = () => {
    console.log("Bye Bye");
}

sayBye();

let sayHi = sayHello;
sayHi()