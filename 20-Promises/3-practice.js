function walkDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve("You Walked the dog 🐕");
            } else {
                reject("You didn't walked the dog 🐕")
            };
        }, 1500)
    })
};

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitechenCleaned = false;
            if (kitechenCleaned) {
                resolve("You cleaned the kitchen 🧹")
            } else {
                reject("You didn't cleaned the kitchen 🧹")
            }
        }, 1000)
    })
};

walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value);})
         .catch(error => {console.error(error);})
         .finally(() => {setTimeout(() => {console.log("All Task Done");}, 500)})