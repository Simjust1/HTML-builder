const fs = require('fs');
const path = require('path');
const pathForDir = path.join(__dirname, 'files-copy');
const pathFromDir = path.join(__dirname, 'files');

  fs.rmdir(pathForDir, { recursive: true, force: true }, (err) => {
      fs.mkdir(pathForDir, { recursive: true }, (err) => {
        if (err) {
          console.error(err);
        }
        else {
          createFiles();
        }
      })
    })

  const createFiles = () => {
    fs.readdir(pathFromDir, (err, files) => {
      if (err)
        console.log(err);
      else {
        console.log("\nCurrent directory filenames:");
        files.forEach(file => {
          console.log(file);
          fs.copyFile(pathFromDir + '/' + file, pathForDir + '/' + file, (err) => {
            if (err) {
              console.log('error');
            }
            else {
              console.log(file);
            }
          });
        })
      }
    })
  }




/*   const ss = fs.readdir(pathFromDir, {withFileTypes: true} ).then (data => {
    for (let key of data) {
      fs.copyFile(pathFromDir + '/' + key.name, pathForDir + '/' + key.name);
    }
  }); */



