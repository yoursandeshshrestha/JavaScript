// IF STATEMENTS = if a condition is true, execute some code
//                                   if not, do something else

// let age = 17;

// if (age >= 18) {
//     console.log("You can access the website");
// } else {
//     console.log("You have to be 18+ to access this site");
// }

// <------------------ Another Example Nested if---------------->

let age = 17;
let hasLicense = false;

if (age >= 18) {
    console.log("You are old enough to drive");

    if (hasLicense) {
        console.log("You have license");
    } else {
        console.log("You dont have license yet");
    }


} else {
    console.log("You must be 18+ to drive");
}
