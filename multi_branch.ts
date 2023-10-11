let users = {
    name: "John",
    age: 30,
    address: {
        line1: "Bhandup West",
        line2: "National Meds",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400078"
    },
    func: function(){
        console.log("hello")
    }
}

let clone = {};

for(let key in users)
{
    clone[key] = users[key];
}

// console.log(clone.name);
clone.name = "Rahul";
clone.age = 24;
// console.log(users.name);
// console.log(clone.name);
// console.log(clone)
// console.log(users)


let permission1 = {canView: true};
let permission2 = { canEdit: true};

Object.assign(users,permission1,permission2);
// console.log(users)
Object.assign(clone,permission1,permission2)
console.log(clone)