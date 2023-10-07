function calculateShippingFee(country:string,weight:number)
{
    return (country === "USA" && weight <= 1) 
    ? `Shipping Charges: $5` : (country === "USA" && weight > 1) 
    ? `Shipping Charges: $10` : (country === "Canada" && weight <= 1) 
    ? `Shipping Charges: $8` : (country === "Canada" && weight > 1) 
    ? `Shipping Charges: $15` : `Shipping Charges: $20`
}

const country:string = prompt("Enter Your Country");
const materialWeight:number = parseInt(prompt("Enter Weight"));

console.log(calculateShippingFee(country,materialWeight));