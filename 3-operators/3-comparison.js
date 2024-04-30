// ! Comparison Operators:

// ? Comparison operators are used to compare two values and return a boolean result.


// ? Equal to (== or ===): Checks if two values are equal.   
console.log(5 == 5); // true
console.log('5' === 5); // false (strict equality)

// ! 1. == (Equality Operator):

// The == operator checks if the values of two operands are 
// equal, after converting both operands to a common type if 
// they are of different types. It performs type coercion if 
// necessary.

Example:

console.log(10 == 10);   // true
console.log(10 == '10'); // true (type coercion: string '5' is converted to number 5)
console.log(10 == 3);   // false


// ! 2. === (Strict Equality Operator):
// The === operator, also known as the strict equality 
// operator, checks if the values of two operands are equal 
// and of the same data type, without performing type coercion. 
// Both the value and the type of the operands must match for the 
// expression to be true.
// Example:

console.log(15 === 15);   // true
console.log(15 === '15'); // false (different types: number and string)
console.log(15 === 3);   // false

// ! Not equal to (!= or !==): Checks if two values are not equal.

console.log(5 != 3); // true
console.log('5' !== 5); // true (strict inequality)

// ! Greater than (>): Checks if the left operand 
// ! is greater than the right operand.

console.log(8 > 3); // true

// ! Less than (<): Checks if the left 
// ! operand is less than the right operand.

console.log(4 < 10); // true

// ! Greater than or equal to (>=) and Less than or equal 
// ! to (<=): Similar to greater than and less than, but also checks for equality.

console.log(10 >= 10); // true
console.log(5 <= 3); // false
