function Shape() {
}

Shape.prototype.duplicate = function () {
    console.log("Duplicate");
};

function Circle(radius) {
    this.radius = radius;
}

// Inheritance
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

// Method overriding
Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log("Circle duplicate");
};

let c1 = new Circle(1);
c1.duplicate();


