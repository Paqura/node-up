const fs = require('fs');

// Типы стримов
// Readable, Writable, Duplex, Transform
// Стрим изначально находится в режиме paused

const stream = fs.createReadStream('gd', {
  highWaterMark: 40,
  encoding: 'utf-8',
});

stream.on('data', chunk => {
  console.log(chunk);
});

// Завершение чтения/или любой
// другой операции (в данный момент)
stream.on('end', () => {
  console.log('end');
});

// Файл был закрыт
stream.on('close', () => {
  console.log('close');
});

// В буфере потока есть данные (факт, а не действие)
// Редкое событие
stream.on('readable', () => {});

// Всегда при работе со стримом нужно
// вешать обработчик ошибки
stream.on('error', err => {
  console.log(err.message);
});