// reduce(): Executes a reducer function on each element of the array, resulting in a single output value.

let numbers = [1, 2, 3, 4, 5];

let myTotal = numbers.reduce(function (acc, value){
    return acc + value
}, 0)
 
console.log(myTotal); // 15

// Example from CHATGPT
let transactions = [
    { amount: 1000, type: "income" },
    { amount: 800, type: "income" },
    { amount: 150, type: "expense" },
    { amount: 30, type: "expense" }
];


let { totalIncome, totalExpenses } = transactions.reduce((accumulator, currentValue) => {
    if (currentValue.type === "income") {
        accumulator.totalIncome += currentValue.amount;
    } else if (currentValue.type === "expense") {
        accumulator.totalExpenses += currentValue.amount;
    }
    return accumulator;
}, { totalIncome: 0, totalExpenses: 0 });

console.log("Total Income:", totalIncome); // Total Income: 1800
console.log("Total Expenses:", totalExpenses); // Total Expenses: 180

// Another Example

let orders = [
    { product: "Laptop", quantity: 2, price: 1000 },
    { product: "Phone", quantity: 3, price: 800 },
    { product: "Tablet", quantity: 1, price: 500 },
    { product: "Headphones", quantity: 2, price: 150 }
];

let totalRevenue = orders.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity * currentValue.price;
}, 0);

console.log("Total Revenue:", totalRevenue);// Total Revenue: 5200
