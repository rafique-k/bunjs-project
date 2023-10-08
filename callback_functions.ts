function ask (question:string, yes:any, no:any)
{
    if(confirm(question)) yes()
    else no();
}

function showOk()
{
    console.log("You Agreed")
}

function showCancel()
{
    console.log("You cancelled the execution");
}

ask("Do You Agree?", showOk, showCancel);


//another way of using function declarations

let userAge:any = prompt("Whats Your Age?", '18');
let userWelcome:any;
if(userAge >= 18)
{
    userWelcome = function()
    {
        console.log("Hello Mr Eligible")
    }
}
else
{
    userWelcome = function()
    {
        console.log("No Welcome Mr Not Eligible")
    }
}

userWelcome();