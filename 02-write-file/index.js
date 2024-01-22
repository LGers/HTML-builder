const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(pathToFile, { flags: 'a' });

const { stdin, stdout } = require('node:process');

stdin.on('data', (data) => {
  if (data.toString().trim() === 'exit') {
    console.log('Have a nice day!');
    writeStream.end();
    process.exit();
  } else {
    writeStream.write(data);
  }
});

stdout.write('Text to write:\n');

process.on('SIGINT', () => {
  console.log('Goodbye!');
  writeStream.end();
  process.exit();
});
