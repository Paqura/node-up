const fs = require('fs');

// tasks queue      ['immediate', 'readFile']
// microtasks queue ['promise', 'nextTick']

console.log('start'); // 1

fs.readFile(__filename, (err, content) => {
	console.log('read file'); // 7
});

setImmediate(() => {
	console.log('immediate'); // 6
});

new Promise(resolve => {
	console.log('promise'); // 2
	resolve('promise then');
}).then(value => console.log(value)); // 5

process.nextTick(() => {
	console.log('nextTick'); // 4
});

console.log('end'); // 3