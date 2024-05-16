// ChatGPT Example

let jsonPerson = `{
    "name": "John Doe",
    "age": 30,
    "address": {
      "city": "New York",
      "country": "USA"
    },
    "contacts": [
      {
        "type": "email",
        "value": "john@example.com"
      },
      {
        "type": "phone",
        "value": "+1234567890"
      }
    ],
    "friends": [
      {
        "name": "Alice",
        "age": 28
      },
      {
        "name": "Bob",
        "age": 32
      }
    ]
  }`;
  
  let person = JSON.parse(jsonPerson);
  console.log(`${person.name}`); // John Doe
  console.log(person.address.city); // New York
  console.log(person.contacts[0].value); // john@example.com
  console.log(person.contacts[1].value); // +1234567890

  console.log(`${person.name} have two friends who's name are ${person.friends[0].name} and ${person.friends[1].name}`);
  //Output :- John Doe have two friends who's name are Alice and Bob


// Looping 

person.friends.forEach(friend => {
    console.log(`${friend.name} is ${friend.age} years old.`);
});
// Output :- Alice is 28 years old.
        //Bob is 32 years old.