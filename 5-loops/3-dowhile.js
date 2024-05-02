// the do...while loop is similar to the while loop, but with one 
// crucial difference: the do...while loop executes its block of code 
// at least once, even if the condition is initially false. After the 
// first iteration, the loop continues to execute as long as the specified 
// condition is true.

i = 0;
do {
    console.log("hello");
    i++
} while (i < 5);

// <<<<<<<<<<<<<<<< Array loop using do while >>>>>>>>>>>>>>>>>> //

let heroes = ["spiderMan", "batman", "superMan", "ironMan"];
let index = 0;

do {
    console.log(heroes[index]);
    index++
} while (index < heroes.length);

// Cant use same index twice // Result : undefined
let a = 0;
do {
    console.log(heroes[a]);
    a++
} while (a < heroes.length);



// output

// spiderMan
// batman
// superMan
// ironMan


// Explaination


// First do...while loop:
// The loop starts with index equal to 0.
// It prints "spiderMan" to the console and increments index to 1.
// It prints "batman" to the console and increments index to 2.
// It prints "superMan" to the console and increments index to 3.
// It prints "ironMan" to the console and increments index to 4.
// At this point, index is equal to heroes.length, so the loop condition 
// index < heroes.length becomes false, and the loop terminates.

// Second do...while loop:
// The loop starts with index equal to 4 (the value it had after the first loop).
// The condition index < heroes.length evaluates to false immediately because index is already equal to heroes.length (4).
// Therefore, the block of code inside the loop is never executed, and the loop terminates immediately.

// As a result, the second do...while loop doesn't produce any output because its condition is false 
// from the beginning. To make it work, you would need to reset the value of index to 0 before starting the second loop.