let fruits = ["Mango", "Orange", "Banana", "Kiwi"]

// fruits.push("Apple") // [ 'Mango', 'Orange', 'Banana', 'Kiwi', 'Apple' ]

// Normal Push
let anotherfruits = "Apple"
anotherfruits = fruits.push(anotherfruits)
console.log(anotherfruits); // 5
console.log(fruits); // [ 'Mango', 'Orange', 'Banana', 'Kiwi', 'Apple' ]

// array push
let arrayPush = ["WaterMelon", "Stawberry"];
arrayPush = fruits.push(arrayPush)
console.log(arrayPush); // Output: 6
console.log(fruits); // Output: ['Mango', 'Orange', 'Banana', 'Kiwi', 'Apple', [ 'WaterMelon', 'Stawberry' ]]