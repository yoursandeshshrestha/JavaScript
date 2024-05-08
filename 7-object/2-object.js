let students = {
    Name: "Sandesh Shrestha",
    Age: 19,
    Course: "BCA"
}

console.log(students.Name); // Sandesh Shrestha

let Anotherstudent = {
    Name: "Jasmine Thapa",
    Age: 20,
    Course: "BCA",
    greet: function greet(){
        return `Hello ${this.Name}`;
    }
}

console.log(Anotherstudent.greet());


// Changing Value in Object 

let person = {
    name: "Sandesh Shrestha",
    age: 19
}

console.log(person.age); // 19
person.age = 25;
console.log(person.age); // 25

console.log(person.name); // Sandesh Shrestha
person.name = "Don Sandesh"
console.log(person.name); // Don Sandesh
