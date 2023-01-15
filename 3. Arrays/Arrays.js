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

