// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
// }

// let j = 0;
// while(j < 3)
// {
//     console.log(`number ${j}!`);
//     j++;
// }

//conditional ternary operator
// let userInput:number = +prompt("Enter Your Age");
// let isEligible = (userInput > 18) ? true : false;
// console.log(`Result: ${isEligible}`);

//Task: Calculate Discount
// const isMember:boolean;
// const totalAmount:number = 0;
function calculateDiscount(isMember:boolean,totalAmount:number)
{
   return (isMember = true && totalAmount > 200) ? totalAmount * 20 / 100 : (isMember = false && totalAmount > 200) ? totalAmount * 10 / 100 : 0;
} 

let result = calculateDiscount(true,201);
console.log(result);

function calculateDiscount1(memberStatus:boolean,totalAmount:number){
    let totalDiscount = 0;
    if(memberStatus == true && totalAmount > 200)
    {
        return totalDiscount = totalAmount * 20 / 100;
    }
    else if (memberStatus != true && totalAmount > 200)
    {
        return totalDiscount = totalAmount * 10 / 100;
    }
    else
    {
        return totalDiscount = 0;
    }
}

console.log(calculateDiscount1(false,201));
console.log(calculateDiscount1(false,100))

