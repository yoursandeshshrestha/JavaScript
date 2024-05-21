// Set Operations
// Sets in JavaScript support various set operations:

//     1. Union: Combining the elements of two sets.
//     2. Intersection: Finding the common elements between two sets.
//     3. Difference: Finding the elements that exist in one set but not the other.
//     4. Subset: Checking if one set is a subset of another.

// Here's an example of how to perform set operations:

let set1 = new Set([1, 2, 3]);
let set2 = new Set([3, 4, 5]);

// Union
let unionSet = new Set([...set1, ...set2]); // Output: {1, 2, 3, 4, 5}

// Intersection
let intersectionSet = new Set([...set1].filter(x => set2.has(x))); // Output: {3}

// Difference
let differenceSet = new Set([...set1].filter(x => !set2.has(x))); // Output: {1, 2}

// Subset
let isSubset = [...set1].every(x => set2.has(x)); // Output: false
