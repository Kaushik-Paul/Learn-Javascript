"use strict";
import {Circle} from "./Circle.js";

let c1 = new Circle(5);
// Instance method call
c1.draw();
c1.radius = 59;
console.log("The Radius of the circle is: " + c1.radius);

// Static method call
Circle.parse();

