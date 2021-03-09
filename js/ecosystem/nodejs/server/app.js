const http = require('http');
const chalk = require('chalk');

const hostname = '127.0.0.1';
const port = 8000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(process.env, null, 2));
});

server.listen(port, hostname, () => {
  console.log(chalk.blueBright(`[INFO] Server running at http://${hostname}:${port}/`));
});

process.on('SIGTERM', () => {
  server.close(() => {
    console.log('Process gracefully terminated.')
  })
})