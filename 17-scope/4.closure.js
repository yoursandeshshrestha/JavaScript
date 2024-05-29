Closure:
// 1. A closure is a combination of a function and the lexical environment 
// within which that function was declared. It allows a function to access and 
// manipulate variables from its outer scope even after the outer function has finished executing.

// 2. Closures are created whenever a function is defined within another function 
// and the inner function retains access to variables of the outer function.

Example:

function outerFunction() {
    let outerVar = "I am from outer scope";

        function innerFunction() {
            console.log(outerVar); // Accessing outerVar from the outer scope
        }
    
    return innerFunction; // Returning the inner function
}

let closureExample = outerFunction(); // Closure created
closureExample(); // Output: I am from outer scope
