const circle = {
    radius: 1,
    draw: function () {
        console.log("Drawing circle...");
    },
}

// Clone the object
const anotherObject = Object.assign({color: "red"}, circle);
console.log("After Cloning: ");

for (let key in anotherObject) {
    console.log(`${key} ${anotherObject[key]}`);
}

// Another way to clone
const anotherObject2 = {...circle};
console.log("After Cloning with second method: ");
for (let key in anotherObject2) {
    console.log(`${key} ${anotherObject2[key]}`);
}

// Factory function
function createAddressFactory(street, city, zipCode) {
    return {
        street: street,
        city: city,
        zipCode: zipCode
    };
}

const addressObject = createAddressFactory('a', 'b', 'c');
console.log("After Using factory function Method");
for (let key in addressObject) {
    console.log(`${key} ${addressObject[key]}`);
}

// Constructor function
function CreateAddressConstructor(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const addressObject2 = new CreateAddressConstructor('a', 'b', 'c');
console.log("After Using Constructor function Method");
for (let key in addressObject2) {
    console.log(`${key} ${addressObject2[key]}`);
}

