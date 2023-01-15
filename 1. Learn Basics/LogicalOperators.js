// Logical Operator does not always just returns boolean type
let getTheValue = false || "Mosh";
console.log(`The value is: ${getTheValue}`);

// Falsy values in logical operators
// undefined
// null
// 0
// false
// ''
// NaN


// Anything that is not Falsy -> Truthy

let userColor = "";
let defaultColor = "blue";
let currentColor = userColor || defaultColor;
console.log(`The Current Color is: ${currentColor}`);











