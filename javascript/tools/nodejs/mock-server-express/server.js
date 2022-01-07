const express = require('express');
const chalk = require('chalk');

const hostname = '127.0.0.1';
const port = 9000;
const app = express();

try {

  const server = app.listen(port, () => {
    console.log(chalk.blueBright(`${new Date().toISOString()} [INFO] Server running at http://${hostname}:${port}/`));
  })

  app.use((req, res, next) => {
    console.log(chalk.blueBright(`${new Date().toISOString()} [INFO] ${req.url} request received`));
    console.log(chalk.blueBright(`${new Date().toISOString()} [INFO] middleware injecting CORS headers`));
    res.setHeader('Access-Control-Allow-Origin', '*'); //CORS: allow same origin requests from localhost
    next();
  });

  app.use(express.static('public')); //serving favicon from public folder

  app.get('/', (req, res) => {
    //console.log("request received");
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.status(200).send("Hello there! 🤓");
  });

  app.get('/:status', (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    res.status(req.params.status).send(`HTTP ${req.params.status}`);
    console.log(chalk.blueBright(`${new Date().toISOString()} [INFO] HTTP ${res.statusCode} response sent`));
  });

  app.get('/:status/delay/:length', async (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=UTF-8');
    console.log(chalk.blueBright(`${new Date().toISOString()} [INFO] waiting ${req.params.length}ms`))
    await new Promise(resolve => setTimeout(resolve, req.params.length));
    console.log(chalk.blueBright(`${new Date().toISOString()} [INFO] done waiting, responding`));
    res.status(req.params.status).send(`HTTP ${req.params.status} after ${req.params.length}ms`);
    console.log(chalk.blueBright(`${new Date().toISOString()} [INFO] HTTP ${res.statusCode} response sent`));
  });

  app.get('/debug', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send(JSON.stringify(process.env, null, 2));
  });

  app.get('/request', (req, res) => {
    res.send(200, req);
  });

  process.on('SIGTERM', () => {
    server.close(() => { console.log(chalk.blueBright(`\n${new Date().toISOString()} [INFO] [SIGTERM] closing server on ${port}`)) });
  })

  process.on('SIGINT', () => {
    server.close(() => { console.log(chalk.blueBright(`\n${new Date().toISOString()} [INFO] [SIGINT] closing server on ${port}`)) });
  })

} catch (e) {
  console.log("[ERROR] cought:", error);
  app.close(() => { console.log(chalk.redBright(`${new Date().toISOString()} [INFO] closing server on ${port}`)) });
}