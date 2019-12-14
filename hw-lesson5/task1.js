// Rewrite function with Class
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        this.speed = 0;
        this.accelerate = function (amount) {
            return this.speed += amount;
        };
        this.breake = function (amount) {
            return this.speed -= amount;
        };
        this.status = function () {
            return this.brand + this.model + " running at " + this.speed + " km/h";
        };
    }
}

// Now use create a Car object using the class

let car = new Car("Renault", "Scenic");

console.log(car); // Should return new object

// Then create additinal class CarColor, exteds from the Car class and add new method carColor() in this class
// which return car color

class CarColor extends Car {
    constructor(brand, model, color) {
        super(brand, model);
        this.color = color;
        this.carColor = function () {
            return this.brand + this.model + " has " + this.color + " color";
        };
    }
}

car = new CarColor("Renault", "Scenic", "Red");

console.log(car);