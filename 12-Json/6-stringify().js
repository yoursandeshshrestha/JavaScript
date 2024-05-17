// JavaScript JSON stringify() Method

// The JSON.stringify() method in JavaScript is used to convert JavaScript 
// objects into a JSON string. This method takes a JavaScript object as input 
// and returns a JSON-formatted string representing that object.

// Syntax:
// JSON.stringify(value, replacer, space);

// Parameters:
//     1. value: It is the value that is to be converted into a JSON string.
//     2. replacer: It is an optional parameter. This parameter value can be an 
//     altering function or an array used as a selected filter for the stringify. 
//     If the value is empty or null then all properties of an object are included in a string.
//     3. space: It is also an optional parameter. This argument is used to control 
//     spacing in the final string generated using the JSON.stringify() function. 
//     It can be a number or a string if it is a number then the specified number 
//     of spaces are indented to the final string and if it is a string then that 
//     string is (up to 10 characters) used for indentation.

// Create a simple JavaScript object
let person = {
    name: "Alice",
    age: 25,
    city: "London"
  };
  
// Convert the JavaScript object to JSON
let jsonData = JSON.stringify(person);
  