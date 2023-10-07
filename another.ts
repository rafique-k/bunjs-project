let numbers = [1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i <= numbers.length; i++)
{
    for( let j = 0; j <= numbers.length; j++)
    {
        console.log(`Multiplication of ${i} * ${j}: ${i*j}`);
    }
}