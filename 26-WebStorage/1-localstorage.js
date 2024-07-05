// Storing data in localStorage
localStorage.setItem('username', 'John');
localStorage.setItem('theme', 'dark');

// Retrieving data from localStorage
const username = localStorage.getItem('username');
const theme = localStorage.getItem('theme');

console.log(username); // Output: John
console.log(theme); // Output: dark

// Removing data from localStorage
localStorage.removeItem('username');

// Clearing all data from localStorage
// localStorage.clear();
