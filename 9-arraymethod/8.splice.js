let fruits = ["Mango", "Orange", "Banana", "Kiwi"]

// splice(): Changes the contents of an array by removing or replacing existing 
// elements and/or adding new elements.

let splicedFruits = fruits.splice(1, 2, "Pineapple", "Grapes");
console.log(splicedFruits); // Output: ["Orange", "Banana"]
console.log(fruits); // Output: ["Mango", "Pineapple", "Grapes", "Kiwi"]
