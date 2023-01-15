// Variables

let num = 45.33;
if (typeof num === "number") {
    console.log("This is a number");
} else {
    console.log("This is not a number");
}

const result = "Hello, world";

let firstName = null;

function greet(firstName, lastName = "Stark") {
    console.log(`Hello ${firstName} ${lastName}`);
}

greet("Tony");

// Strict equality (checks both type and value)
console.log('1' === 1);

// Lose equality (checks only value -> converts the non-equal types then checks value)
console.log('1' == 1);
console.log(1 == true);

// Ternary operator
let points = 120;
let customerType = points >= 100 ? "gold" : "silver";
console.log("The Customer is " + customerType + " type");



