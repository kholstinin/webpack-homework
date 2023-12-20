const {} = require('tapable');
const assert = require('node:assert');

class Car {
	constructor() {
		this.speed = 0;
		this.color = 'red';
		this.fuelAmount = 0;

		this.hooks = {
			accelerate: null,
			paint: null,
			refuel: null
		}
	}

	accelerate(newSpeed, cb) {
		this.speed = newValue;
		cb();
	}

	paint(newColor, cb) {
		this.color = newValue;
		cb();
	}

	refuel(amount) {
		this.fuelAmount = amount;
	}
}

const car = new Car();


car.hooks.accelerate.tapAsync('Accelerate', (newSpeed, cb) => {
	cb(null, newSpeed + 100);
});

car.hooks.accelerate.tapAsync('AccelerateThreshold', (newSpeed, cb) => {
	if (newSpeed > 300) {
		cb('error');
	} else {
		cb(null, newSpeed);
	}
});

car.accelerate(100, () => {
	assert.equal(car.speed, 200);
});

car.accelerate(250, () => {
	assert.equal(car.speed, 0);
});


car.hooks.paint.tapAsync('Paint', (newColor, cb) => {
	setTimeout(() => {
		cb(null, 'red');
	}, 2000);
});

car.hooks.paint.tapAsync('Paint', (newColor, cb) => {
	setTimeout(() => {
		cb(null, 'black');
	}, 2000);
});

car.paint('white', () => {
	assert.equal(car.color, 'red');
});


car.hooks.refuel.tap('Refuel', function(context) {
	if (context.fuelAmount > 400) {
		context.fuelAmount = 400;
	}
});

car.refuel(500);
assert.equal(car.fuelAmount, 400);
