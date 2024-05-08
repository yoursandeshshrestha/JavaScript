function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
}

let person1 = new Person("Alice", 25, "Doctor");
let person2 = new Person("Bob", 30, "Engineer");

Person.prototype.introduce = function(){
    console.log(`Hi, I'm ${this.name}, and I'm a ${this.profession}`);
}

person1.introduce(); // Hi, I'm Alice, and I'm a Doctor
person2.introduce(); // Hi, I'm Bob, and I'm a Engineer

// Practice
Person.prototype.bye = function(){
    console.log(`bye bye by ${this.name}`);
}

person1.bye(); // bye bye by Alice
person2.bye(); // bye bye by Bob
