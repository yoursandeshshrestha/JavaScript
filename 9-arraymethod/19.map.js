// the map() method is used to create a new array by applying a provided 
// function to each element of an existing array. It doesn't mutate the 
// original array but returns a new array with the results of calling the
//  provided function on each element.

let numbers = [1, 2, 3, 4, 5];

let doubledNumbers = numbers.map(function(element) {
    return element * 2;
});

console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


// Project Based Example

let products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Mouse", price: 30 }
];

// Take out name of Product in new array without modiefying the existing array
let productName = products.map(function (element){
    return element.name
})

console.log(productName); // [ 'Laptop', 'Phone', 'Headphones', 'Mouse' ]

// just try to see lol
productName.forEach(function (item){
    console.log(item);
})
// Laptop Phone Headphones Mouse