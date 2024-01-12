const assert = require('node:assert');
const path = require('node:path');
const fs = require('node:fs/promises');
const fg = require('fast-glob');

const files = fg.sync(path.resolve(__dirname, './dist/**'));

(async function() {
  for await (const file of files) {
    const fileName = path.parse(file).base;
    const content = await fs.readFile(file, 'utf-8');
    const base = 'http://localhost:3000';
    
    console.log(`Trying to request /${fileName}...`);
    const response = await fetch(`${base}/${fileName}`);

    assert.equal(response.status, 200);
    assert.equal(await response.text(), content);
    console.log('Success!\n');
  }
})();
