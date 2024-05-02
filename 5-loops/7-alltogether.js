let name = "Sandesh";
let surname = "Shrestha";
let i = 0;

console.log("This is for loop");
// The while statement creates a loop that executes a specified statement 
// as long as the test condition evaluates to true. 
// The condition is evaluated before executing the statement.
for (let i = 1; i < 3; i++) {
    //let name = "sandesh";
    console.log(`Number ${i}: My surname is ${surname}`)
}

console.log("This is for (while) loop");
//  The for statement creates a loop that consists of three optional expressions, 
// enclosed in parentheses and separated by semicolons, 
// followed by a statement (usually a block statement) to be executed in the loop.
while (i < 3) {
    i++
    console.log(`Number ${i}: My name is ${name}`)
}

console.log("This is for (Do-While) loop");
// The do...while statement creates a loop that executes a specified 
// statement until the test condition evaluates to false. 
// The condition is evaluated after executing the statement, resulting 
// in the specified statement executing at least once.
let score = 0;
let Script = "JavaScript"
do {
    console.log(`This is ${Script} Language`);
    score++;
} while (score < 3);


// <<<<<<<<<<< Array Loop >>>>>>>>>> //

let myArray = ["spiderMan", "batman", "superMan", "ironMan"]
let arr = 0;


console.log("<------ Loop through array using for loop ------->");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}


console.log("<------ Loop through array using while loop ------->");
while (arr < myArray.length) {
    console.log(`${myArray[arr]}`)
    arr++
}


console.log("<------ Loop through array using Do-While loop ------->");
let z = 0;
do {
    console.log(myArray[z])
    z++
} while (z < myArray.length);


// --------------- Array Loop END ------------------- //
