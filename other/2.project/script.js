let countLabel = document.getElementById("countLabel")
let decrease = document.getElementById("decreaseBtn")
let reset = document.getElementById("resetBtn")
let increase = document.getElementById("increaseBtn")

let count = 0; 

increase.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decrease.onclick = function(){
    count--;
    countLabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
