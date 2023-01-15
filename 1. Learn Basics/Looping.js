// for-in operator

const person = {
    name: "Mosh Hamidani",
    age: 25,
};

for (let key in person) {
    console.log(`Key: ${key} and the value is: ${person[key]}`);
}

let colorArray = ["red", "blue", "green"];
for (let color in colorArray) {
    console.log("The index present in the array is: " + color);
    console.log("And the value is: " + colorArray[color]);
}


// for-of operator
for (let color of colorArray) {
    console.log("Colors are: " + color);
}

// Error
// for (let value of person) {
//     console.log("The Value from person is: " + value);
// }

// Doing Loop Exercises

function showProperties(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'string') {
            console.log(`${key} ${obj[key]}`);
        }
    }
}

const movie = {
    title: "a",
    releaseYear: 2019,
    rating: 4.5,
    director: 'b'
};
showProperties(movie);


