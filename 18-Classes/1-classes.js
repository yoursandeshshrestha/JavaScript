// <------------------ Function ---------------->
function MyObject(name, age){
    this.name = name;
    this.age = age;
}

const person1 = new MyObject("Sandesh", 19);
const person2 = new MyObject("Jasmine", 20);

console.log(person1.name, person1.age);
console.log(person2.name, person2.age);

// <------------------ Classes ---------------->
class person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const user1 = new person("ram", 25)
console.log(user1.name, user1.age);
// <------------------ Classes ---------------->