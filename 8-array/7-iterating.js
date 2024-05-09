// Iterating Through Array Elements

// We can iterate array and access array elements using for and forEach loop.

// Example: It is the example of for loop.
// Creating an Array and Initializing with Values
let courses = ["HTML", "CSS", "JavaScript", "React"];
 
// Iterating through for loop
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i])
}

// Iterating thorugh for each
courses.forEach( function (element){
    console.log(element);
})
