// server.js
const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
/* eslint no-console: "off" */

server.use(bodyParser.json());
// delay middleware
server.use((req, res, next) => {
  setTimeout(() => { next(); }, 1000);
});
// Login api call
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user' && password === 'password') {
    res.status(200);
    return res.json({ token: 'asdf' });
  }
  res.status(400);
  return res.json({ error: 'Bad credentials.' });
});

// All calls except login need Authorization
server.use((req, res, next) => {
  if (req.get('Authorization') === 'asdf' || req.get('Authorization') === 'qwer') {
    return next();
  }
  res.status(401);
  return res.json({ error: 'Unauthorized.' });
});

server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
