const {} = require('tapable');
const assert = require('node:assert');

class Car {
	constructor() {
		this.speed = 0;
	}

	accelerate(newSpeed) {
		this.speed = newSpeed;
	}
}

const car = new Car();



car.accelerate(100);
assert.equal(car.speed, 150);

car.accelerate(150);
assert.equal(car.speed, 200);
