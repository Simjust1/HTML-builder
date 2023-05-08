const fs = require('fs/promises');
const path = require('path');
const filesFolderPath = path.join(__dirname, 'secret-folder');
let fileSize;
let fileName;
let fileExt;
console.log(filesFolderPath);

const ss = fs.readdir(filesFolderPath, {withFileTypes: true}).then (data => {
  for (let key of data) {
    if(key.isFile()) {
      let stats = fs.stat(path.join(__dirname, 'secret-folder', key.name));
      stats.then(data => {
      fileName = path.basename(key.name, path.extname(key.name));
      fileExt = path.extname(key.name).slice(1);
      fileSize = data.size;
      console.log(fileName + ' - ' + fileExt + ' - ' + fileSize);
      });
    }
  }
});





//for(var i = 0; i <= 3; i ++ ) {
//  const value = ss.readdir.isFile();
//  console.log(value);
//}


