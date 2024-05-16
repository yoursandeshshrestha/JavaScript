// Create a json date for practice
let jsonData = '{"model":[' +
	'{"carName":"Baleno","brandName":"Maruti" },' +
	'{"carName":"Aura","brandName":"Hyndai" },' +
	'{"carName":"Nexon","brandName":"Tata" }]}';

// Converting json data into javascript object 
let carDetail = JSON.parse(jsonData);

// Accessing the date 
console.log(`The carName is ${carDetail.model[0].carName} and brandName is ${carDetail.model[0].brandName}`); 
// Output :- The carName is Baleno and brandName is Maruti
console.log(`The carName is ${carDetail.model[1].carName} and brandName is ${carDetail.model[1].brandName}`);
// The carName is Aura and brandName is Hyndai
console.log(`The carName is ${carDetail.model[2].carName} and brandName is ${carDetail.model[2].brandName}`);
// The carName is Nexon and brandName is Tata


