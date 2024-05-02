// break Statement:
// The break statement is used to exit the loop immediately, regardless 
// of whether the loop's condition has been met or not. When break is encountered, 
// the control jumps out of the loop, and the code execution continues with the statement following the loop.
Example:

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break; // Exit the loop when i reaches 5
    }
}

// In this example, the loop iterates from 0 to 9. When i becomes 5, the break 
// statement is encountered, and the loop exits immediately. Therefore, the output will be:

0
1
2
3
4
5

// 2. continue Statement:
// The continue statement is used to skip the current iteration of the loop and
// proceed to the next iteration. When continue is encountered, the remaining code 
// within the loop for the current iteration is skipped, and the loop proceeds with 
// the next iteration.

Example:

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue; // Skip the current iteration when i is 2
    }
    console.log(i);
}

// In this example, when i equals 2, the continue statement is executed, skipping 
// the console.log(i) statement. As a result, the number 2 is not printed, and the loop 
// continues with the next iteration. Therefore, the output will be:

0
1
3
4