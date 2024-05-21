// Sets in JavaScript are a data structure that allow you to store unique values of any type.

let mySet = new Set([1, 2, 3, 3, 3, 4, 5]);
let nameset = new Set(["sumit","sumit","amit","anil","anish"])
console.log(mySet); // Output :- Set(5) { 1, 2, 3, 4, 5 }
console.log(nameset); // Output :- Set(4) { 'sumit', 'amit', 'anil', 'anish' }

// Adding value to set
mySet.add(6);
mySet.add(7)
console.log(mySet); // Output :- Set(7) { 1, 2, 3, 4, 5, 6, 7 }

// Removing value from set
mySet.delete(6);
console.log(mySet); // Output :- Set(6) { 1, 2, 3, 4, 5, 7 }

// Checking the Size of a Set
console.log(mySet.size); // Output :- 6

// Iterating Over a Set
nameset.forEach(function (setValue){
    console.log(setValue);
})
// Output :-
// sumit
// amit
// anil
// anish