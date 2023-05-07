const fs = require('fs');
const path = require('path');

const pathAbsolute = path.join(__dirname, 'text.txt');

const readableStream = fs.createReadStream(pathAbsolute);

let data = '';

readableStream.on('data', chunk => data += chunk);

readableStream.on('end', () => console.log('End', data.toString()));

