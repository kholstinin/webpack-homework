const path = require('node:path');

module.exports = {
	// не изменять!
	devtool: false,
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.cooljson$/,
				type: 'json'
			}
		]
	},

	// ...ваш конфиг
}
