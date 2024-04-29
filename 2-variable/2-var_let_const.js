// ? JavaScript:- var, let, and const are used for variable 
// ? declaration, but they differ in terms of scoping rules 
// ? and mutability. Let's explore each with examples:

// ! 1. var:

// * var was traditionally used for variable declaration in 
// * JavaScript, but it has some scoping issues and is generally
// * avoided in modern JavaScript development.

// ! 2. let:

// * let was introduced in ES6 (ECMAScript 2015) and is preferred 
// * over var for variable declaration in most cases. Variables 
// * declared with let have block-level scope.

// ! 3. const:

// * const also introduced in ES6, is used to declare constants. 
// * Constants are variables whose value cannot be changed once assigned. 
// * Like let, variables declared with const are block-scoped.


// ! <--------- Example starts ------------>

// ! var in javascript
var a = "hello"
console.log(a);
// ? variable re-declare & re-assign both possible with var
var a = "hello 2"
console.log(a);


// ! let in javascript
let name = "sandesh"
console.log(name);
// ? let name = "jasmine" // not possible to re-declare a varible
// ? but u can re-assign it
name = "jasmine"
console.log(name);

// ! Const in javascript
const favFood = "pizza"
console.log(favFood);
// ? re-declare and re-assign both not possible in const 
// favFood = "momo"
console.log(favFood);

// ! Key Points:

    // ? Use let when you need to reassign the variable's value.
    // ? Use const for values that won't change.
    // ? Avoid using var due to its scoping issues.