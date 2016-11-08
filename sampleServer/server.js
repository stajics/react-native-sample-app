// server.js
const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(bodyParser.json());
server.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'user1' && password === 'pw') {
    res.status(200);
    return res.json({ token: 'asdf' });
  }
  res.status(400);
  return res.json({ error: 'Bad crredentials.' });
});
server.use((req, res, next) => {
  console.log(req.get('Authorization'));
  next();
});
server.use(middlewares);
server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
