// In JavaScript, Objects can be created using two different methodologies namely Literal Form and Constructed Form.
// Literal Form: The literal form uses the construction of object literals that can be said as a collection of key-value pairs enclosed within a pair of curly braces. The syntaxial form is shown below.

let myobj = {
    key1: value1,
    key2: value2,
};

console.log(obj.key1);

// Constructed Form: The Constructed form uses either an object constructor function or the new 
// keyword to create an empty object ad then adds properties to the object one by one. The syntaxial 
// forms are shown below.
// Object Constructor Function: In this methodology, the user creates an explicit function to take 
// required values as parameters and assign them as the properties of the desired object.

function obj(value1, value2) {
    this.key1 = value1;
    this.key2 = value2;
}

// Using New Keyword: This methodology uses the New keyword in front of any constructor 
// method or any built-in constructor method ( such as Object, Date, String, etc) and 
// creates a new instance of the following object by mounting it on memory.

let obj = new Object();
obj.key1 = value1;
obj.key2 = value2;

// Differences between using Object Literals and the Constructed Form: Both the constructed 
// form and literal form result in creating exactly the same sort of object i.e. the end result 
// is the same for both methodologies. The only difference between the both is that object literals 
// can take care of several key-value pairs at once and thus is more convenient while on the 
// other hand with the constructed-form objects, we must add the properties one-by-one in separate statements. 

// Note: It is highly uncommon to use the Constructed Form over the Object Literals for 
// creating objects, hence for any further illustrations we will be using the object literals on most occasions.