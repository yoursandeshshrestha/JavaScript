let person = {
    name: "John",
    age: 30,
    profession: "Engineer"
};

// JSON.stringify
let personJSON = JSON.stringify(person);
console.log(personJSON); // Output: {"name":"John","age":35,"profession":"Software Developer"}

// JSON.parse
let parsedPerson = JSON.parse(personJSON);
console.log(parsedPerson); // Output: { name: "John", age: 35, profession: "Software Developer" }


// Practise 

let student = {
    name: "Sandesh",
    age: 19,
    course: "BCA"
}

let JSONstudent = JSON.stringify(student)
console.log(JSONstudent);

let PARSEstudent = JSON.parse(JSONstudent)
console.log(PARSEstudent);