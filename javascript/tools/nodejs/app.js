const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/html;charset=utf-8');
	res.end('<h1>Hello World</h1><h2>Second line</h2>');
});

server.listen(port, hostname, () => {
	console.log('Server running at http://${hostname}:${port}/');
});

/*
process.argv is an array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.

*/
