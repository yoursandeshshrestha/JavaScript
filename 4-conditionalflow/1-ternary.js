// Ternary operators in JavaScript provide a concise way to write conditional expressions. 
// The syntax of the ternary operator is:
// ? condition ? expression1 : expression2

// ! Example :-

let age = 18;
let message = (age >= 18) ? "You are adult" : "You are minor";
console.log(message);

// ! Example 2 :-

let score = 55;
let grade = (score >= 90) ? "A" : 
            (score >= 80) ? "B" :
            (score >= 70) ? "C" :
            (score >= 60) ? "D" : "F";

console.log("Your grade is:", grade); // Output: "Your grade is: C"

