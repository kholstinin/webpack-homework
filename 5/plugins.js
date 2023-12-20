const {} = require('tapable');
const assert = require('node:assert');

class Car {
	constructor() {
		this.speed;
		this.color;
		this.fuelAmount;

		this.hooks = {
			accelerate: null,
			paint: null,
			refuel: null
		}
	}

	accelerate(newSpeed) {
		const newValue = this.hooks.accelerate.call(newSpeed);
		this.speed = newValue;
	}

	paint(newColor, cb) {
		this.hooks.paint.callAsync(newColor, (err, newValue) => {
			if (err) {
				throw err;
			}

			this.color = newValue;
			cb();
		});
	}

	refuel(amount, cb) {
		this.hooks.refuel.callAsync(amount, (err) => {
			if (err) {
				this.fuelAmount = 0;

			} else {
				this.fuelAmount = amount;
			}

			cb();
		})
	}
}

const car = new Car();

// Plugins here

//

car.accelerate(100);
assert.equal(car.speed, 250);

car.paint('white', () => {
	assert.equal(car.color, 'whitegrey');
});

car.refuel(500, () => {
	assert.equal(car.fuelAmount, 0);
});
