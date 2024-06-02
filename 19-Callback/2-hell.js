// Callback Hell = Situation in JavaScript where callbacks 
//                 are nested within other callbacks to the
//                 degree where the code is difficult to read.
//                 Old pattern to handle asynchronous functions.
//                 Use Promises + async/await to avoid Callback Hell

function Task1(Callback){
    setTimeout(function(){
        console.log("Task 1 completed");
        Callback();
    }, 1500)
}

function Task2(callback){
    setTimeout(function(){
        console.log("Task 2 completed");
        callback();
    }, 1000)
}

function Task3(callback){
    setTimeout(function(){
        console.log("Task 3 completed");
        callback();
    }, 500)
}

// <------------- This is CallBack HEll ---------->
Task1(function(){
    Task2(function(){
        Task3(function(){
            console.log("All Task completed");
        });
    });
})

// Nesting callback after callback is known as Callback hell.