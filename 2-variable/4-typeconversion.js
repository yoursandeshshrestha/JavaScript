// Conversion of number to string
let num = 123;	
console.log(`Type Of num before conversion: ${typeof num} `); // Before Conversion
// Output - Type Of num before conversion: number 
console.log(`Type Of num before conversion: ${typeof num.toString()} `); // After Conversion
// Output - Type Of num After conversion: string 
 

// Conversion of string to number
let str = "123";
console.log(`Type Of str before conversion: ${typeof str} `); // Before Conversion
// Output - Type Of num before conversion: string 
console.log(`Type Of str before conversion: ${typeof Number(str)} `); // After Conversion
// Output - Type Of num before conversion: number 

// Conversion of boolean to number & string
let BooleanValue = true;
console.log(`Type Of BooleanValue before conversion: ${typeof BooleanValue} `); // Before Conversion
// Output - Type Of num before conversion: boolean 
console.log(`Type Of BooleanValue before conversion: ${typeof Number(BooleanValue)} `); // After Conversion
// Output - Type Of num before conversion: number 
console.log(`Type Of BooleanValue before conversion: ${typeof BooleanValue.toString()} `); // Before Conversion
// Output - Type Of BooleanValue before conversion: string 