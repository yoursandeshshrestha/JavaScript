// JavaScript Date() Constructor
// JavaScript Date constructor is used to create a new Date object. 
// The value returned will be different on the basis of whether the object 
// is called with or without the new keyword. If we call the object new keyword 
// a Date object is created otherwise a string representing the current dat-time 
// is returned. Also, if we use this constructor as a function it will return a 
// string containing the present date-time.

// Syntax:
// new Date(val)
// new Date(DateStr) 
// new Date(DateObj) 
// new Date(year, monthIndex, day, hours, minutes, seconds, ms)

let newDate = new Date();
console.log(newDate); // Output :- 2024-04-09T15:15:56.816Z
console.log(typeof newDate); // object
console.log(newDate.getFullYear()); 
console.log(newDate.getMonth());    
console.log(newDate.getDate());    
console.log(newDate.getHours());   
console.log(newDate.getMinutes()); 
console.log(newDate.getSeconds());  
console.log(newDate.getMilliseconds()); 
console.log(newDate.getDay());     


// this is unreadable so we will convert it to string
newDate = newDate.toLocaleString();
console.log(newDate); // Output :- 9/4/2024, 8:48:09 pm
console.log(typeof newDate); // String

