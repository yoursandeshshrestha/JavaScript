// Storing data in sessionStorage
sessionStorage.setItem('username', 'Alice');
sessionStorage.setItem('isLoggedIn', 'true');

// Retrieving data from sessionStorage
const username = sessionStorage.getItem('username');
const isLoggedIn = sessionStorage.getItem('isLoggedIn');

console.log(username); // Output: Alice
console.log(isLoggedIn); // Output: true

// Removing data from sessionStorage
sessionStorage.removeItem('username');

// Clearing all data from sessionStorage
// sessionStorage.clear();
