let person = {
    name: "John",
    age: 30,
    profession: "Engineer"
};

// Object.keys(obj):
console.log(Object.keys(person)); // Output: ["name", "age", "profession"]

// Object.values(obj)
console.log(Object.values(person)); // [ 'John', 30, 'Engineer' ]

// Object.entries(obj)
console.log(Object.entries(person)); //  [ [ 'name', 'John' ], [ 'age', 30 ], [ 'profession', 'Engineer' ] ]


// Object.defineProperty(obj, prop, descriptor):
// Description: Defines a new property directly on an object, or modifies an existing property.
// Usage:
Object.defineProperty(person, 'email', {
value: 'john@example.com',
writable: true,
enumerable: true,
configurable: true
});
console.log(person.email); // Output: john@example.com
 
// Easy way 
person.mail = "sandesh@google.com"
console.log(person.mail); // sandesh@google.com
