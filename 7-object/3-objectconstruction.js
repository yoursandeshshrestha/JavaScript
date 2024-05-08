// Constructor Function
function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
}

let person1 = new Person("John", 30, "Engineer");
let person2 = new Person("sandesh", 19, "Developer")

console.log(person1.name);
console.log(person2.name);

Person.prototype.hello = function() {
    return `Hello, my name is ${this.name}`
}

console.log(person2.hello())

