const jsonServer = require('json-server');
const auth = require('json-server-auth')

const app  = jsonServer.create();
const router = jsonServer.router('db.json');

app.db = router.db;

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

app.use(auth);
app.use(middlewares);
app.use(router);

app.listen(port);