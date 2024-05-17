//JavaScript JSON parse() Method
// The JSON.parse() method in JavaScript is used to parse a JSON string 
// which is written in a JSON format and returns a JavaScript object. 

// Syntax:
// JSON.parse( string, function )

// Parameters: This method accepts two parameters as mentioned above and described below:
//   1.  string: It is a required parameter and it contains a string that is written in JSON format.
//   2.  function: It is an optional parameter and is used to transform results. The function called for each item.

let jsonData = `{
    "name": "Alice",
    "age": 25,
    "city": "London"
  }`;
  
let person = JSON.parse(jsonData);

// Accessing Value from the Object
console.log(person.name); // Alice
console.log(person.age); // 25
console.log(person.city); // London

  
