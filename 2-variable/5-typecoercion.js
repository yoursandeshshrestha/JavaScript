// What is Type Coercion in JavaScript ?

// Type Coercion refers to the process of automatic or implicit conversion of values 
// from one data type to another. This includes conversion from Number to String, String 
// to Number, Boolean to Number, etc. when different types of operators are applied to the values.

// In case the behavior of the implicit conversion is not sure, the constructors of a data 
// type can be used to convert any value to that datatype, like the Number(), String() or Boolean() constructor.

// Example
// 1. Number to String Conversion=
// When any string or non-string value is added to a string, it always converts the 
// non-string value to a string implicitly. When the string ‘Rahul’ is added to the 
// number 10 then JavaScript does not give an error. It converts the number 10 to 
// string ’10’ using coercion and then concatenates both strings. 
let x = 10 + 'RAHUL';
let y = '20' + 10;
let z = true + '10';

console.log(x, typeof x); // 10RAHUL string
console.log(y, typeof y); // 2010 String
console.log(z, typeof z); // true10 String

// 2. String to Number Conversion
// When an operation like subtraction (-), multiplication (*), division (/), or modulus (%) 
// is performed, all the values that are not numbers are converted into the number data type, 
// as these operations can be performed between numbers only.

// The string '5' is converted
// to number 5 in all cases
// implicitly
let num1 = 10 - '5';
let num2 = 10 * '5';
let num3 = 10 / '5';
let num4 = 10 % '5';

console.log(num1, typeof num1); // 5 number
console.log(num2, typeof num2); // 20 number
console.log(num3, typeof num3); // 2 number
console.log(num4, typeof num4); // 0 number

// 3. Boolean to Number
// When a Boolean is added to a Number, the Boolean value is converted to a number 
// as it is safer and easier to convert Boolean values to Number values. A Boolean 
// value can be represented as 0 for ‘false’ or 1 for ‘true’. 

let boolean1 = true + 2;
let boolean2 = false + 2;

console.log(boolean1); // true = 1, so 1 + 2 = 3
console.log(boolean2); // false = 0, so 0 + 2 = 2

// The Equality Operator
// The equality operator (==) can be used to compare values irrespective of their type. 
// This is done by coercing a non-number data type to a number. 

let wtf1 = (10 == '10');
let wtf2 = (true == 1);
let wtf3 = (true == 'true');

console.log(wtf1); // true
console.log(wtf2); // true
console.log(wtf3); // false
