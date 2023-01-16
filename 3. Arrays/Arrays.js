const courses = [
    {id: 1, name: 'a'},
    {id: 2, name: 'b'},
];

let course = courses.find(function (course) {
    return course.name === 'a';
});
console.log("Course Found: " + JSON.stringify(course));

let courseIndex = courses.findIndex(course => course.name === 'a');
console.log("Course found at index: " + courseIndex);


// Removing the elements of the array
let numbers = [1, 2, 3, 4, 5];

// Method 1
// numbers.length = 0;
console.log("After emptying the list: " + numbers);

// Method 2
numbers = []
console.log("After emptying the list: " + numbers);

// Method 3
numbers.splice(0, numbers.length);
console.log("After emptying the list: " + numbers);

// Combine array using spread
numbers = [1, 2, 3, 4, 5];
let numbers2 = [6, 7];
let combinedArray = [...numbers, ...numbers2];
console.log("After combining with spread operator: " + combinedArray);

// Filtering array
numbers = [1, 2, -1, 3];
let filteredNumbers = numbers.filter(num => num > 0);
console.log("Filtered Number list: " + filteredNumbers)


// Mapping array
const items = numbers.map(num => {
    return {value: num};
});
console.log("After Mapping array: " + JSON.stringify(items));


// Reducing the array (calculate value, iterating value => do the calc., initial value of calculate value)
let sum = numbers.reduce((calculateValue, currentValue) => calculateValue + currentValue, 0);

console.log("The Sum of the array is: " + sum);


// Some Exercises on array
function removeArray(array, excludeNumbers) {
    let output = [];
    for (let num of array) {
        if (!excludeNumbers.includes(num)) {
            output.push(num);
        }
    }
    return output;
}

let afterExcludingArray = removeArray(numbers, [2, -1]);
console.log("After excluding array: " + afterExcludingArray);

// Move an element
function moveElement(array, startIndex, endIndex) {
    const numberToMove = array[startIndex];
    for (let i = startIndex; i < endIndex; i++) {
        array[i] = array[i + 1];
    }
    array[endIndex] = numberToMove;
}

numbers = [1, 2, 3, 4, 5, 1];
moveElement(numbers, 1, 4);
console.log("After moving element: " + numbers);

let countOccurance = numbers.reduce((count, currentElement) => {
    if (currentElement === 1) {
        count++;
    }
    return count;
}, 0);
console.log("Number of occurance: " + countOccurance)