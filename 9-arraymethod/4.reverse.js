// reverse(): Reverses the order of the elements in an array.

let fruits = ["Mango", "Orange", "Banana", "Kiwi"]

let reverseArray = fruits.reverse();
console.log(reverseArray); // [ 'Kiwi', 'Banana', 'Orange', 'Mango' ]
console.log(fruits); // [ 'Kiwi', 'Banana', 'Orange', 'Mango' ]

let antiReverse = reverseArray.reverse();
console.log(antiReverse); // [ 'Mango', 'Orange', 'Banana', 'Kiwi' ]
console.log(fruits); // [ 'Mango', 'Orange', 'Banana', 'Kiwi' ]
