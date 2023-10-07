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


