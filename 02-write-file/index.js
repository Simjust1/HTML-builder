const fs = require('fs');
const path = require('path');

const pathForText = path.join(__dirname,'text.txt');

const outputFile = fs.createWriteStream(pathForText);


const readline = require('readline');

let rl = readline.createInterface( process.stdin, process.stdout );

rl.question('Enter the data: ', (data) => {
  if(data === 'exit') {
    console.log('Good Bye');
    rl.close();
  }
  else {
    outputFile.write(data);
    console.log('Enter the data: ');
  }
});

rl.on('line', (data) => {
  console.log('Enter the data: ');
  if(data === 'exit') {
    console.log('Good Bye');
    rl.close();
  }
  else {
    outputFile.write(`\n${data}`);
  }
});

rl.on('SIGINT', () => {
          console.log('\nGood Bye');
          rl.close();
  });


// ALTERNATIVE SOLUTION
/*
const { stdin, stdout } = process;

stdout.write('Input some data: ');

stdin.on('data', data => {
  outputFile.write(data);
  stdout.write('Input some data: ');
});


process.on('SIGINT', () => {
  process.exit();
});


process.on('SIGINT', (input) => {
        if (input.match(/^y(es)?$/i)) { process.exit(); }
  });

process.on('exit', () => stdout.write('\nGood bye'));

*/




