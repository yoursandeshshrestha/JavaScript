// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise to return a value"
//           PENDING -> RESOLVED or REJECTED
//           new Promise((resolve, reject) => {asynchronous code})


// Creating a promise
const ride = new Promise((resolve, reject) => {
    const arrived = false;
    if (arrived) {
        resolve("Drived arrived 🚗")
    } else {
        reject("Driver bailed 😒")
    }
});

// Consume a promise
ride.then(value => {
    console.log(value);
}).catch(error => {
    console.error(error);
}).finally(setTimeout((()=>{
    console.log('Ride Completed')
}), 1500));

