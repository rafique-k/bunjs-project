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

console.log("----------- Sugar added in shallowCopy Updated Result-----------")
console.log(shallowCopy);
console.log("-----------Original Book Result After Sugar added in Shallow copy-----------")
console.log(originalRecipeBook);

originalRecipeBook.recipe[1].ingredients.unshift("Chicken");

console.log("----------- Chicken Added in originalRecipeBook After Updated Result-----------")
console.log(originalRecipeBook);

console.log("----------- shallowCopy After Chicken Added Result-----------")
console.log(shallowCopy);
// const deepCopy = _.clone(originalRecipeBook);
// const deepCopy = structuredClone(originalRecipeBook);
const deepCopy = JSON.parse(JSON.stringify(originalRecipeBook));

console.log("----------- deepCopy Result-----------")
console.log(deepCopy);

deepCopy.recipe[0].ingredients.unshift("CookingOil");

console.log("----------- deepCopy After Adding Cooking Oil Result-----------")
console.log(deepCopy);

console.log("----------- originalRecipeBook After Adding Cooking Oil in Deep Copy-----------")
console.log(originalRecipeBook);

console.log("----------- shallowCopy After Adding Cooking Oil in Deep Copy-----------")
console.log(shallowCopy);
// deepCopy.recipe[1].ingredients.unshift("Cooking Oil");

// console.log("----------- Updated deepCopy Result-----------")
// console.log(shallowCopy);

// console.log("----------- originalRecipeBook After DeepCopy Updated Result-----------")
// console.log(originalRecipeBook);

originalRecipeBook.recipe[1].ingredients.unshift("Paneer");

console.log("----------- Paneer Added in originalRecipeBook After Updated Result-----------")
console.log(originalRecipeBook);

console.log("----------- deepCopy After Adding Paneer Result-----------")
console.log(deepCopy);