const fs = require('fs');
const path = require('path');
const pathForBundle = path.join(__dirname, 'project-dist', 'bundle.css');
const outputFile = fs.createWriteStream(pathForBundle);
const pathFromStyles = path.join(__dirname, 'styles');


const ss = fs.readdir(pathFromStyles, {withFileTypes: true} , (err, files) => {
  if (err)
        console.log(err);
  else {
    files.forEach(file => {
      if(file.isFile() && (path.extname(file.name)) === '.css') {
        fs.readFile(path.join(__dirname, 'styles', file.name), 'utf8', (err, data) => {
          if (err) {
            console.log(err)
          }
          else {
            console.log(file.name);
            console.log(data);
            outputFile.write(data);
          }

        })
      };
    })
  }
});


/*
 fs.stat(path.join(__dirname, 'styles', file.name),)


fs.readFile(path.join(__dirname, 'styles', file.name)).then (data => {
          outputFile.write(data);
        })


  const createFiles = () => {
    fs.readdir(pathFromDir, (err, files) => {
      if (err)
        console.log(err);
      else {
        files.forEach(file => {
          fs.copyFile(pathFromDir + '/' + file, pathForDir + '/' + file, (err) => {
            if (err) {
              console.log('error');
            }
          });
        })
      }
    })
  }

 */
