"use strict";

export class Circle {
    #radius = 0;
    constructor(radius) {
        // private member
        this.#radius = radius;
        this.move = function () {
            console.log("Moving");
        };
    }

    // Getter
    get radius() {
        console.log("Checking the value of radius");
        return this.#radius;
    }
    // Setter
    set radius(value) {
        this.#radius = value;
    }

    // Instance method
    draw() {
        console.log("Drawing");
    }

    // Static method
    static parse() {
        console.log("Parsing");
    }
}