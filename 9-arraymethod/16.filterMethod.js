// filter(): Creates a new array with all elements that pass the 
// test implemented by the provided function.

let age = [13, 15, 17, 18, 20, 22, 25, 30]

let filterAge = age.filter(Adult)
function Adult(age){
    return age > 18;
}
console.log(filterAge) // [ 20, 22, 25, 30 ]

let anotherFiter = age.filter(function2)
function function2(age){
    return age > 15 && age < 18
}
console.log(anotherFiter); // [ 17 ]


// Solving Example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  // question : Filter all histiory genre book

  
const historyBook = books.filter( (item) => {
    return item.genre === "History"
})

console.log(historyBook);

// Output :
// [
//     {
//       title: 'Book Three',
//       genre: 'History',
//       publish: 1999,
//       edition: 2007
//     },
//     {
//       title: 'Book Seven',
//       genre: 'History',
//       publish: 1986,
//       edition: 1996
//     }
//   ]


// Project Scenario:

// Suppose we have an array of products and we want to filter 
// out only the products that are on sale (discounted).
// Example:

let products = [
    { name: "Laptop", price: 1000, discounted: false },
    { name: "Phone", price: 800, discounted: true },
    { name: "Tablet", price: 500, discounted: true }
];

let discountedProducts = products.filter(product => product.discounted);

console.log(discountedProducts);
// Output: [{ name: "Phone", price: 800, discounted: true }, { name: "Tablet", price: 500