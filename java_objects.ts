function makeUser(name:string, age:any)
{
    return {
        name: name,
        age: age
    }
}

let user = makeUser("John",30);
console.log(user);


let codes = {
    "49":"Germany",
    "41":"Canada",
    "44":"England"
}

for(let code in codes)
{
    console.log(code);
}

console.log(codes);