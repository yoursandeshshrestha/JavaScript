let fruits = ["Mango", "Orange", "Banana", "Kiwi"]

// First way 
fruits.forEach(looping);
function looping(element){
    console.log(element);
}

// Second way
fruits.forEach( function looping(element){
    console.log(element);
})

// For each not only pass element but also pass index and whole array
// Example :
let heroes = ["superMan", "spiderMan", "batMan", "ironMan"]

heroes.forEach( function (element, index, array){
    console.log(element, index, array);
})

// Accessing Object inside array

let books = [
    {
        bookName: "History",
        price: 800
    },
    {
        bookName: "English",
        price: 200
    },
    {
        bookName: "Science",
        price: 500
    },
]

books.forEach( function (value){
    console.log(value.price); // 800 200 500
})


// Example 2 from ChatGPT

let countries = [
    {
        name: "USA",
        cities: [
            {
                name: "New York",
                landmarks: ["Statue of Liberty", "Central Park", "Empire State Building"]
            },
            {
                name: "Los Angeles",
                landmarks: ["Hollywood Sign", "Griffith Observatory", "Santa Monica Pier"]
            }
        ]
    },
    {
        name: "UK",
        cities: [
            {
                name: "London",
                landmarks: ["Big Ben", "Tower Bridge", "Buckingham Palace"]
            },
            {
                name: "Edinburgh",
                landmarks: ["Edinburgh Castle", "Royal Mile", "Arthur's Seat"]
            }
        ]
    }
];

// Trying to Access landmark inside city array
countries.forEach(function(value){
    value.cities.forEach( function(item){
        item.landmarks.forEach(function (answer){
            console.log(answer);
        })
    })
})


// Project Scenario:

// Suppose we have an array of products and we 
// want to print out each product's name and price.
Example:

let products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 800 },
    { name: "Tablet", price: 500 }
];

products.forEach(product => {
    console.log(`Product: ${product.name}, Price: $${product.price}`);
});
// Output:
// Product: Laptop, Price: $1000
// Product: Phone, Price: $800
// Product: Tablet, Price: $500





