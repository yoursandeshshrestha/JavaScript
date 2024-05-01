// ! Basic Example

let day = 2;

switch (day) {
    case 1:
        console.log("Today is monday");
        break;
    case 2:
        console.log("Today is tuesday");
        break;
    case 3:
        console.log("Today is wednesday");
        break;
    case 4:
        console.log("Today is thursday");
        break;
    case 5:
        console.log("Today is friday");
        break;
    case 6:
        console.log("Today is saturday");
        break;
    case 7:
        console.log("Today is sunday");
        break;
    default:
        break;
}

// ! Intermediate example

let action = "draw";

switch(action) {
  case "read":
    console.log("Reading a book");
    break;
  case "write":
    console.log("Writing a story");
    break;
  case "draw":
    console.log("Drawing a picture");
    break;
  default:
    console.log("Invalid action");
}

// ! Advanced Example

let grade = "B";

switch(grade) {
  case "A":
  case "B":
  case "C":
    console.log("Pass");
    break;
  case "D":
    console.log("Needs improvement");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
}
