const http = require('http');
const connection = require('./connection');

const PORT = process.env.PORT || 8000;
const server = new http.Server();

server.on('request', connection);

server.listen(PORT, () => console.log(`Server runs on ${PORT} port`);
