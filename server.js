const jsonServer = require('json-server');
const auth = require('json-server-auth')
const cors = require('cors');

const app  = jsonServer.create();
const router = jsonServer.router('db.json');

const whitelist = ["https://localhost:8000", 'https://slava-real-estate-care.netlify.app']

const corsOptions = {
  origin : (origin, callback) =>
    {
        if (whitelist.indexOf(origin) !== -1 || !origin) 
        {
          callback(null, true)
        } 
        else 
        {
          callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.options('*', cors());

app.db = router.db;

const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

app.use(auth);
app.use(middlewares);
app.use(router);

app.listen(port);