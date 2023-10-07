let hour:number =parseInt(prompt("Enter Hour"));
let isWeekend = false;
if(hour < 10 || hour > 18 || isWeekend)
{
    console.log('Office is closed');
}
else
{
    console.log('Office is open');
}

//double ternary operator to give default value if primary value is missing
let user = prompt("Enter Username");
console.log(user ?? "Anonymous");