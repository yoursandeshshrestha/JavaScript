// Callback basically mean :- when we have to run particular function after only the execution of pervious
// function.

// Why do we need Callback Functions?

// JavaScript runs code sequentially in top-down order. However, there are some cases that
// code runs (or must run) after something else happens and also not sequentially.
// This is called asynchronous programming.

// Callbacks make sure that a function is not going to run before a task is completed but
// will run right after the task has completed. It helps us develop asynchronous JavaScript
// code and keeps us safe from problems and errors.

// <------------------ Example --------------------->

// function hello(){
//     console.log("Hello");
// }

// function bye(){
//     console.log("Bye");
// }

// hello();
// bye();

// <---------- Explain --------------->
// This is perfect but lets suppose hello function takes sometime to excute,
// Javascript will not wait for hello function and will directly move to bye fuction
// which is wrong order.

// So thats when the callback function take place, callback wait for the particular function
// to excute before excute self

// Example

// Lets suppose our hello function take some time, we will use settimout -
// settimeout basically means putthing timer

// function hello(){
//     setTimeout(function(){
//         console.log("Hello");
//     }, 3000);
// }

// function bye(){
//     console.log("Bye");
// }

// hello();
// bye();

// if we run this the bye function runs before hello and doesnt follow line order,
// this is know as async javascript

// <---------------- Main Thing ----------------->
// in oder to make sure the bye function run after hello we need to use it as call back.

function hello(callback) {
  setTimeout(function () {
    console.log("Hello");
    callback();
  }, 3000);
}

function bye() {
  console.log("Bye");
}

hello(bye);

// This is old way of programming and thats when the promises comes in place.
