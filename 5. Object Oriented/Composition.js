const canEat = {
    hunger: 0,
    eat: function () {
        this.hunger--;
        console.log("Eating");
    },
}

const canWalk = {
    walk: function () {
        console.log("Walking");
    },
}

const canSwim = {
    swim: function () {
        console.log("Swimming")
    },
}

function Person() {
}
Object.assign(Person.prototype, canEat, canWalk);

function GoldFish() {
}

Object.assign(GoldFish.prototype, canEat, canSwim);

const person = new Person();
person.walk();

const goldFish = new GoldFish();
goldFish.swim();


