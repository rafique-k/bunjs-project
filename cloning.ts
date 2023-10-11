const _ = require('lodash');

let originalRecipeBook = {
    recipe: [
        {
            name: "Spaghetti",
            ingredients: ["Pasta", "Tomato Sauce", "Salt"]
        },
        {
            name: "Pizza",
            ingredients: ["Dough", "Tomato Sauce", "Cheese"]
        }
    ]
}

console.log("-----------Original Book Result-----------")
console.log(originalRecipeBook);

//Shallow Copy
const shallowCopy = {...originalRecipeBook};
console.log("-----------Shallow Copy Result-----------" );
console.log(shallowCopy);

// let availability = {isAvailable: true};
// Object.assign(originalRecipeBook,availability);
shallowCopy.recipe[0].ingredients.unshift("Sugar");
originalRecipeBook.recipe[1].ingredients.unshift("Chicken");

console.log("----------- shallowCopy Updated Result-----------")
console.log(shallowCopy);

console.log("----------- originalRecipeBook After Updated Result-----------")
console.log(originalRecipeBook);

const deepCopy = _.clone(originalRecipeBook);

console.log("----------- deepCopy Result-----------")
console.log(shallowCopy);

deepCopy.recipe[1].ingredients.unshift("Cooking Oil");

console.log("----------- Updated deepCopy Result-----------")
console.log(shallowCopy);

console.log("----------- originalRecipeBook After DeepCopy Updated Result-----------")
console.log(originalRecipeBook);