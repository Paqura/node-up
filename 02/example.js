const fs = require('fs');
const path = require('path');

const stream = fs.createReadStream(path.join(__dirname, 'bad-char.js'), {
  encoding: 'utf-8',
});

let text = '';

stream.on('data', chunk => {
  console.log(chunk);
  text += chunk;
});

stream.on('end', () => {
  console.log('end');
});

stream.on('error', err => {
  console.log(err.message);
});