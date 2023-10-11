let user = {
    name: "John",
    age: 30
}

let admin = user;
// user = null;
console.log(user);
console.log(admin);

//Interlinked Objects
const mother = {
    name: "Alice",
    children: []
}

const father = {
    name: "John",
    children: []
}

const children1:any = {
    name: "Charlie",
    parents: [mother,father]
}

const children2:any = {
    name: "David",
    parents: [mother,father]
}

let relations1 = mother.children.push(children1,children2);
let relations2 = father.children.push(children1,children2);

console.log(children1.parents[0].name);
console.log(children2.parents[1].name)