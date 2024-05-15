// String Method

let mystring = "Sandesh, Shrestha"
console.log(mystring.length); // Return the length of the string
console.log(mystring.charAt(0)); // Returns the character at the specified index in a string.
console.log(mystring.indexOf("a")); // Return the index of given letter
console.log(mystring.toUpperCase()); // Return the string in uppercase
console.log(mystring.toLowerCase()); // Return the string in lowercase
console.log(mystring.split(",")); // The method splits the original string into an array of substrings 
// Output : [ 'Sandesh', ' Shrestha' ]
console.log((mystring.indexOf("Shrestha"))); // 9
console.log(mystring.startsWith("Sandesh")); // True :- Returns either true or flase
console.log(mystring.endsWith("hello")); // false :- Returns either true or flase
console.log(mystring.slice(3, 7)); // Output : desh
// The slice() method extracts a section of a string and returns it as a new string, 
// without modifying the original string.

let trimString = "   Hello, World     "
console.log(trimString.trim());
// The trim() method removes whitespace from both ends of a string.

console.log(trimString.replace('World', 'sky')); // Output: Hello, sky
// The replace() method replaces a specified substring or pattern with another substring.

// Concat 
let firstName = "Jasmine"
let lastName = "Thapa"
let fullName = firstName.concat(", ", lastName)
console.log(fullName);
// output : Jasmine, Thapa

