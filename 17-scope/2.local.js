// Local Scope:
// Local scope refers to the innermost scope within a function or block 
// where variables and functions are accessible only within that function or block.
// Variables declared inside a function or block are limited to their 
// respective local scopes and cannot be accessed from outside.

Example:

function localScopeExample() {
// Variable declared in the local scope
    var localVar = "I am a local variable";
console.log(localVar); // Output: I am a local variable
}

localScopeExample();
// console.log(localVar); // Error: localVar is not defined

// var a = 10
// function f() {
//     var a = 40
// 	var b = 20
// 	console.log(a, b)
// }
// f(); // 40 20
// console.log(a); // 10

// Just Testing few things

// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a);
// console.log(b);
// console.log(c);

// var a = 100;
// b = 200;

// console.log(a);
// console.log(b);
// console.log(c);





var a = 10;
function f() {
    var a = 100;
    let b = 9
    console.log(a);
    console.log(b);
}
f();
console.log(a);

// Var

// console.log(x); // Output: undefined
// var x = 5;
// console.log(x); // Output: 5
// var localVar = "I am a outside variable";

// function example() {
//     var localVar = "I am a local variable";
//     if (true) {
//         var localVar = "I am another local variable";
//         console.log(localVar); // Output: I am another local variable
//     }
//     console.log(localVar); // Output: I am another local variable
// }
// example();
// console.log(localVar); // Output: I am a outside variable

// let 

//console.log(x); // Error: Cannot access 'x' before initialization
let x = 5;
console.log(x); // Output: 5

function example() {
    let localVar = "I am a local variable";
    if (true) {
        let localVar = "I am another local variable";
        console.log(localVar); // Output: I am another local variable
    }
    console.log(localVar); // Output: I am a local variable
}
example();



// Checking hosting

console.log(z); // Output : Undefined
// console.log(y); 

var z = 10;
let y = 20;
