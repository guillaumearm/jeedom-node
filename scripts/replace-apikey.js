
const fs = require('fs');
const path = require('path');
const { evolve } = require('ramda');

const fixturesPath = path.resolve(__dirname, '../tests/__nock-fixtures__');

const jsonFilePaths = fs.readdirSync(fixturesPath);

jsonFilePaths.forEach(fileName => {
  const filePath = path.resolve(fixturesPath, fileName);
  const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const newContent = content.map(evolve({ body: { params: { apikey: () => '42' } } }));
  fs.writeFileSync(filePath, JSON.stringify(newContent, null, 4));
})

