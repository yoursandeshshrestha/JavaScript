let student = {
    name: "sandeshshrestha",
    age: 19,
    rollNumber: 7,
}

console.table(student)

// Output 
// ┌────────────┬───────────────────┐
// │ (index)    │ Values            │
// ├────────────┼───────────────────┤
// │ name       │ 'sandeshshrestha' │
// │ age        │ 19                │
// │ rollNumber │ 7                 │
// └────────────┴───────────────────┘

// <-------------------- Works on array too --------------->

const myArray = ["Mango", "Banana", "Wiki", "Watermelon"]
console.table(myArray)

// ┌─────────┬──────────────┐
// │ (index) │ Values       │
// ├─────────┼──────────────┤
// │ 0       │ 'Mango'      │
// │ 1       │ 'Banana'     │
// │ 2       │ 'Wiki'       │
// │ 3       │ 'Watermelon' │
// └─────────┴──────────────┘

const nestedObject = {
    person: "John",
    details: {
      personalInfo: {
        name: "Jane",
        age: 30,
        gender: "female"
      },
      contactInfo: {
        email: "jane@example.com",
        phone: "123-456-7890"
      }
    }
  };
  
  console.table(nestedObject);
  