// Creating a Div Element
let myDiv = document.createElement("div");
myDiv.style.height = "300px";
myDiv.style.width = "300px";
myDiv.style.backgroundColor = "pink";
myDiv.id = 'dynamicDiv';
myDiv.style.display = "flex"
myDiv.style.justifyContent = "center";
myDiv.style.alignItems = "center";
myDiv.style.flexDirection = "column"

// Appending a div into HTMl
let body = document.querySelector("body")
body.appendChild(myDiv);

// Creating and Appending a para into div
let myPara =  document.createElement('p');
myPara.innerText = "Switch Color";
myDiv.appendChild(myPara)

// Just Exprementing
let myButton = document.createElement("button");
myDiv.appendChild(myButton)
myButton.innerText = "Click Me Baby!"
myButton.id = "myBtn";

// Selecting Button 
// Knowledge :- Came to know this doesnt require we can directly 
// use let myButton = document.createElement("button"); to select the element;
let myBtn = document.querySelector("#myBtn");

// So i created a program to toggle between a color
function ChangeBGtoggle(){
    const defaultColor = "pink";
    const newColor = "lightblue";

    const currentColor = myDiv.style.backgroundColor;

    if(currentColor === defaultColor){
        myDiv.style.backgroundColor = newColor;
    }else{
        myDiv.style.backgroundColor = defaultColor;
    }
}

myButton.addEventListener("click", ChangeBGtoggle)


