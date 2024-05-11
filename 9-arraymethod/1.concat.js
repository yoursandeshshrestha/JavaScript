let fruits = ["Mango", "Orange", "Banana", "Kiwi"]

// 1. concat(): Combines two or more arrays and returns a new array 
// without modifying the existing arrays.

let moreFruits = ["Apple", "Grapes"];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ["Mango", "Orange", "Banana", "Kiwi", "Apple", "Gra
console.log(fruits); // [ 'Mango', 'Orange', 'Banana', 'Kiwi' ]

let heroes = ["Superman", "Batman", "Spiderman"]
let moreHeroes = ["IronMan", "Thor"]
let combineHeroes = heroes.concat(moreHeroes)
console.log(heroes); // [ 'Superman', 'Batman', 'Spiderman' ]
console.log(moreHeroes); // [ 'IronMan', 'Thor' ]
console.log(combineHeroes); // [ 'Superman', 'Batman', 'Spiderman', 'IronMan', 'Thor' ]


// project Based Example

let products = ["Laptop", "Phone", "Tablet"];
let discountedProducts = ["Smartwatch", "Headphones"];

let allProducts = products.concat(discountedProducts);

console.log(allProducts);
// Output: ["Laptop", "Phone", "Tablet", "Smartwatch", "Headphones"]
