// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// Pass or fail
const Marks = 70;

switch (Marks) {
    case 10:
        console.log("You have failed the exam");
        break;

    case 70:
        console.log("You have Passed the exam");
        break;

    default:
        break;
}