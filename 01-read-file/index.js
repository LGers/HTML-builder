const FILE = 'text.txt';
const fs = require('fs');
const path = require('path');
const readStream = fs.createReadStream(path.resolve(__dirname, FILE), 'utf-8');

readStream.on('error', (error) => console.log('Error: ' + error.message));

readStream.on('data', (chunk) => {
  console.log(chunk.toString());
});
