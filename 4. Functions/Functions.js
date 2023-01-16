function sumOfElement(...args) {
    return args.reduce((a, b) => a + b);
}

console.log("Sum Of Elements: " + sumOfElement(1, 2, 3, 4, 5, 10));

// getter and setter
const person = {
    firstName: "Mosh",
    lastName: "Hamedani",

    //Getter
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    },

    // Setter
    set fullName(value) {
        let fullName = value.split(" ");
        this.firstName = fullName[0];
        this.lastName = fullName[1];
    }
}

console.log("Full Name of the person: " + person.fullName);

person.fullName = "John Smith";
console.log("Full Name of the person after changing: " + person.fullName);


// var => function-scoped
// let, const (ES6/ES2015) => block-scoped

function start() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
start();






