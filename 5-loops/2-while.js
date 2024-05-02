// ? while loop = repeat some code WHILE some condition is true

isLoginedIn = true;
while (isLoginedIn) {
    console.log("You can use this site");
    isLoginedIn = false;
}

// <<<<<<< Array loop using while looop >>>>>>> //

let heroes = ["spiderMan", "batman", "superMan", "ironMan"];
let index = 0;

while (index < heroes.length) {
    console.log(heroes[index]);
    index++;
}
