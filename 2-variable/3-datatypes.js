// Primitive Data Types:

// String: Represents a sequence of characters, enclosed within single (' '), double (" "), or backtick ( ) quotes.
   let str = "Hello, World!";

// Number: Represents numeric values, including integers and floating-point numbers.
   let num = 42;

// Boolean: Represents a logical value, either true or false.
   let isTrue = true;

// Undefined: Represents a variable that has been declared but not assigned a value. 
// It also represents the value returned by functions that do not explicitly return anything.
   let undefinedVar;

// Null: Represents the intentional absence of any object value.
let nullValue = null;

// Symbol (ES6+): Represents a unique identifier, used primarily as object property keys.
const sym = Symbol('description');

// Non-primitive Data Types:

// Object: Represents a collection of key-value pairs, where keys are strings 
// (or Symbols) and values can be of any data type, including other objects.
let person = {
    name: "John",
    age: 30,
    isStudent: false
};

// Array: Represents a collection of elements, ordered and indexed starting from zero. 
// Arrays can hold values of different data types.
let numbers = [1, 2, 3, 4, 5];

// Function: Represents executable code, allowing for reusable blocks of code to be defined and invoked.
function add(a, b) {
    return a + b;
}

// Date: Represents dates and times.
let today = new Date();

// RegExp: Represents regular expressions, used for pattern matching within strings.
let regex = /pattern/;