// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

// Declaring Function
function myFunction(){
    console.log("Hi, Viewer")
}

// Calling Function
myFunction();

// Function with Parameter
function sum(a, b){
    console.log(a + b)
}

sum(5, 5) // This is argument

// Function return statement 
function add(a, b) {
    return a + b;
}

let result = add(3, 4);
console.log(result); // Output: 7
