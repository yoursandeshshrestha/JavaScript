//Converting a JSON Text to a JavaScript Object

//To convert a JSON text to a JavaScript object, you can use the JSON.parse() method.

//Example: This example converts the JSON to JavaSctipt Object.

const jsonString = '{"name": "John", "age": 30}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); // Output: John
console.log(jsonObject.age); // Output: 30
