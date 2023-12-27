const path = require('path');
const fs = require('fs');

module.exports = function(source, maps, meta) {
	const
		{json} = meta,
		{name, kekValue} = this.getOptions(),
		metaPath = path.resolve(__dirname, './meta-settings.json'),
		settings = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));

	// ???

	json.name = name;
	json.kek = kekValue;
	json.settings = settings;

	return JSON.stringify(json);
}
