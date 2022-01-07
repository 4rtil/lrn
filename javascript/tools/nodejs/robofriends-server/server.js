const http = require('http');
const chalk = require('chalk');
const robots = require('./robots');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); //CORS: allow same origin requests from localhost
  res.end(JSON.stringify(robots));
});

server.listen(port, hostname, () => {
  console.log(chalk.blueBright(`[INFO] Server running at http://${hostname}:${port}/`));
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process gracefully terminated.')
  })
})