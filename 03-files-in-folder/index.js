const path = require('path');
const fs = require('node:fs');

const pathToFolder = path.join(__dirname, 'secret-folder');

const kBSize = (byte) => {
  return Math.floor(byte / 1024) + ' kB';
};

fs.readdir(pathToFolder, (err, files) => {
  if (err) {
    return console.log('--------------------------Error: ', err);
  }

  files.forEach((item) => {
    const pathf = path.join(__dirname, 'secret-folder', item);

    fs.stat(pathf, (err, stat) => {
      if (err) {
        console.error(err);
      }
      if (stat.isFile()) {
        const fileData = item.toString().split('.').join(' - ');
        console.log(
          fileData.padEnd(15, ' '),
          ' - ',
          kBSize(stat.size).padStart(4, ' ').toString(),
        );
      }
    });
  });
});
