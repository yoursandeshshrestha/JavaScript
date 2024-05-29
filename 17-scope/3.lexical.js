// Lexical Scope:

// 1. Lexical scope refers to the ability of a function to access variables 
// from its containing (enclosing) scope at the time of its declaration.

// 2. In JavaScript, functions create a scope chain, and they have access to 
// variables from their containing scopes.

Example:

function outerFunction() {
    let outerVar = "I am from outer scope";

    function innerFunction() {
        console.log(outerVar); // Output: I am from outer scope
}
    innerFunction();
}

outerFunction();
