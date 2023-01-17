// get prototype of object

newObj = {
    name: "Mosh",
};
let prototypeObject = Object.getPrototypeOf(newObj);
console.log("Prototype of obj : " + prototypeObject);

function Circle(radius) {
    // Instance members
    this.radius = radius;
    this.move = function () {
        console.log("Move");
    };
}

// Prototype members
Circle.prototype.draw = function () {
    this.move();
    console.log("Draw");
};

const c1 = new Circle(1);

c1.draw();