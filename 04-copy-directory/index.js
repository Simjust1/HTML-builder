const fs = require('fs/promises');
const path = require('path');
const pathForDir = path.join(__dirname, 'files-copy');
const pathFromDir = path.join(__dirname, 'files');

  fs.mkdir(pathForDir, { recursive: true }, (err) => {
    if (err) {
        console.error(err);
        return;
    }
  })

  const ss = fs.readdir(pathFromDir, {withFileTypes: true}).then (data => {
    for (let key of data) {
      fs.copyFile(pathFromDir + '/' + key.name, pathForDir + '/' + key.name);
    }
  });



