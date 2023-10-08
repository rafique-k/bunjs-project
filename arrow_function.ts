
let sum = (a:number, b:number) => {
    return a + b
}

console.log(sum(10,5));

// let age = prompt("what is your age")


//another way of declaring arrow function


let age1:any = prompt("Your Age?",'18');

let welcome = (age1 > 18) ? ()=> console.log("Hello!") : ()=> console.log("Bye");

welcome();


//Arrow function task

let ask = (question:any, yes:any, no:any) => {
    if(confirm(question))
    {
        yes()
    } 
    else
    {
        no()
    }
}

ask("Do You Agree?",
()=> console.log("You Agreed"),
()=> console.log("You Cancelled it"));