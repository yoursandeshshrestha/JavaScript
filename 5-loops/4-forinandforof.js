let heroes = ["superMan", "batMan", "spiderMan", "Ironman"]

// Using for...in loop to iterate over array indices
for (const item in heroes) {
    console.log(item);
}

// Using for...of loop to directly access array elements
for (const item of heroes) {
    console.log(item);
}

// Example
// Sample array of user objects
var users = [
    { username: "john_doe", followers: 1500, posts: 25 },
    { username: "jane_smith", followers: 2300, posts: 40 },
    { username: "alex_jones", followers: 1800, posts: 30 }
];

let userIndex = 1;
for (let user of users) {
    console.log(`User: ${userIndex}, ${user.username} - followers: ${user.followers}, Posts: ${user.posts}`);
    userIndex++;
}

// Output 
// User: 1, john_doe - followers: 1500, Posts: 25
// User: 2, jane_smith - followers: 2300, Posts: 40
// User: 3, alex_jones - followers: 1800, Posts: 30