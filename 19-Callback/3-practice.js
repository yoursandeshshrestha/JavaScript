// // Making Call back after 2sec delay

// function getId(id, callback){
//     setTimeout(function(){
//         console.log("id:", id);
//         callback();
//     }, 2000)
// }

// function getPassword(Password){
//     return function(){
//         setTimeout(function(){
//             console.log("Password:", Password);
//         }, 3000)
//     }
// }

// getId("Yoursandesh", getPassword("SANDESH7866030737"))

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("Data :", dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000)
// }


// getData(1, function(){
//     getData(2)
// })

// Why do we need if :- the function required the callback
// and without it the function will not run, so to make function
// run without callback - we only use callback if it is given and we excute
// the function with callback or else we skip callback and directly run the code.

// Another call back

function Task1(task2callback){
    setTimeout(function(){
        console.log("Task 1 completed");
        if (task2callback) {
            task2callback();
        }
    }, 1000)
}

function Task2(callback){
    setTimeout(()=>{
        console.log("Task 2 completed");
        callback();
    }, 2000)
}

function taskdone(){
    setTimeout(()=>{
        console.log("all task completed");
    }, 500)
}

Task1(Task2(taskdone))