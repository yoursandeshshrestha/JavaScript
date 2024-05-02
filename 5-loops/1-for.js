// for loop = repeat some code a LIMITED amount of times


// Printing Table using for loop
for (let i = 1; i <= 3; i++) {
    console.log(`Currently on loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(i + '*' + j + '=' + i*j);
    }
}

// Playing with array

let heroes = ["spiderMan", "batman", "superMan", "ironMan"]

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes); 
    console.log(heroes[i]); 
}

// console.log(heroes);
// [ 'spiderMan', 'batman', 'superMan', 'ironMan' ]
// [ 'spiderMan', 'batman', 'superMan', 'ironMan' ]
// [ 'spiderMan', 'batman', 'superMan', 'ironMan' ]
// [ 'spiderMan', 'batman', 'superMan', 'ironMan' ]

// console.log(heroes[i]);
// spiderMan
// batman
// superMan
// ironMan

