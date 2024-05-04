// The difference between the two is primarily in the way they're defined and how they're hoisted in JavaScript:
    
// 1. Function Declaration:

// function haha() {
//     console.log("hahhaahha");
// }

// This is a function declaration. Function declarations are hoisted to the top of their scope. 
// That means you can call the haha() function before its declaration in your code, 
// and it will still work. 
// For example: ---------------------------------

    haha(); // Output: hahhaahha
    function haha() {
        console.log("hahhaahha");
    }

    // Function declarations also create a variable in the current scope 
    // (such as global scope or function scope) with the same name as the 
    // function, and assign the function to that variable. In this case, a 
    // variable named haha is created and assigned the function.

// Function Expression:

let haha = function() {
    console.log("hahhaahha");
};

    // This is a function expression assigned to a variable named haha.
    // Function expressions are not hoisted like function declarations. 
    // Therefore, you cannot call the haha() function before its definition in your code.
    // In this case, the function is assigned to the variable haha. 
    // You can call the function using the variable name haha, like haha().