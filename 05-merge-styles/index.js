const fs = require('fs');
const path = require('path');
const pathForBundle = path.join(__dirname, 'project-dist', 'bundle.css');
const outputFile = fs.createWriteStream(pathForBundle);
const pathFromStyles = path.join(__dirname, 'styles');


const ss = fs.readdir(pathFromStyles, {withFileTypes: true}).then (files => {
  for (let file of files) {
    if(file.isFile()) {
      fs.readFile(path.join(__dirname, 'styles', file.name)).then (data => {
        outputFile.write(data);
      })
    };
  }
});






/*








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
*/

